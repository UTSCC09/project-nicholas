const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const userRoute = require("./routes/User");

const app = express();

app.use(express.json());
app.use(cors());

const db_uri = "mongodb+srv://nicholas:nicholas123@cluster0.jk2vgyt.mongodb.net/?retryWrites=true&w=majority";

async function connect() {
    try {
        await mongoose.connect(db_uri);
        console.log("Connected to MongoDB");
    } catch (error) {
        console.error(error);
    }
}
connect();

app.use("/api/users", userRoute);

app.listen(3001, () => {
    console.log("Server started on port 3001")
})