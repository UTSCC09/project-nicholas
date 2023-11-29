const express = require("express");
const router = express.Router();
const BoughtItem = require("../models/boughtItemModel");

router.post("/", async (req, res) => {

    const { itemname, price, size, buyerId, file } = req.body;
    const { firstName, lastName, address, postal, country, city, email } = req.body;
    const { cardName, cardNumber, cardCVV, cardMonth, cardYear } = req.body; 

    const boughtItem = new BoughtItem({
        itemname: itemname,
        price: price,
        size: size,
        buyerId: buyerId,
        file: file,
        firstName: firstName,
        lastName: lastName,
        address: address,
        postal: postal,
        country: country,
        city: city,
        email: email,
        cardName: cardName,
        cardNumber: cardNumber,
        cardCVV: cardCVV,
        cardMonth: cardMonth,
        cardYear: cardYear
    });
    try{
        const newBoughtItem = await boughtItem.save();
        res.status(201)
    } catch (err) {
        res.status(500).json({message: err.message});
    }
})

router.get("/user/:id", async (req, res) => {
    const id = req.params.id;
    try{
        const boughtitems = await BoughtItem.find({buyerId: id})
        res.json(boughtitems);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;