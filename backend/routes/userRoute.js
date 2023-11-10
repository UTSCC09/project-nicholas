const express = require("express");
const router = express.Router();
const User = require("../models/userModel");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");

const { compare, genSalt, hash } = require("bcrypt");

router.get("/", async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
});

router.post("/register", async (req, res) => {
    const { firstname, lastname, email, password } = req.body;

    const salt = await genSalt(10);
    const hashedPassword = await hash(password, salt);

    const user = new User({
        email: email,
        firstname: firstname,
        lastname: lastname,
        password: hashedPassword
    });
    try {
        const newUser = await user.save();
        res.status(201).json(newUser);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

router.post("/login", async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email: email });

    if (user && compare(password, user.password)){
        dotenv.config();
        const token = jwt.sign(user.toJSON(), process.env.MY_SECRET, { expiresIn: "1d" });
        res.cookie("token", token, {
            httpOnly: true
        });
        res.status(201).json(user);
    } else {
        return res.status(401).end("Access Denied");
    }
});

router.get("/logout", (req, res) => {
    res.setHeader(
        "Set-Cookie",
        serialize("username", "", {
          path: "/",
          maxAge: 60 * 60 * 24 * 7,
        }),
    );
    res.status(200).json("Successfully Logged Out");
});

router.delete("/:id", (req, res) => {

});

module.exports = router;