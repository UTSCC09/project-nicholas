const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
    {
        email: {
            type: String,
            required: true,
            unique: true
        },

        password: {
            type: String,
            required: true
        },

        firstname: {
            type: String,
            required: true
        },

        lastname: {
            type: String,
            required: true
        }
    },
    {
        timestamps: true,
    }
)

export default mongoose.model("User", userSchema);