const mongoose = require("mongoose");

const userModel = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
      trim: true,
    },

    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      trim: true,
    },

    password: {
      type: String,
      required: [true, "Password is required"],
    },

    type: {
      type: String,
      required: [true, "User type is required"],
      enum: ["admin", "owner", "user"],
      default: "user",
    },

    isApproved: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

const userSchema = mongoose.model("user", userModel);

module.exports = userSchema;