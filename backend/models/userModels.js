import mongoose from "mongoose";

const userSchema = mongoose.Schema(
    {
        email: {
            type: String,
            require: [true, "please add an email"],
            unique: true
        },

        password: {
            type: String,
            require: [true, "please add a password"]
        }
    },
    {
        timestamps: true,
    }
)

export default mongoose.model("User", userSchema);