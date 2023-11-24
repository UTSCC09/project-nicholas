const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const PORT = 3001;

const userRoute = require("./routes/userRoute");
const itemRoute = require("./routes/itemRoute");

const app = express();

app.use(cors());
app.use(express.json({limit: '50mb'}));

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
app.use("/api/items", itemRoute);

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
})