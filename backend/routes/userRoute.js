const express = require("express");
const router = express.Router();
const User = require("../models/userModel");

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

router.post("/login", (req, res) => {
    const { email, password } = req.body;
    User.findOne({ email: email }, (err, user) => {
        if (err) return res.status(500).end(err);
        if (!user) return res.status(401).end("Access Denied");
        compare(password, user.password, (err, valid) => {
            if (err) return res.status(500).end(err);
            if (!valid) return res.status(401).end("Access Denied");
            res.setHeader(
                "Set-Cookie",
                serialize("username", user._id, {
                  path: "/",
                  maxAge: 60 * 60 * 24 * 7, // 1 week in number of seconds
                }),
            );
            res.status(201).json(user);
        })
    })
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