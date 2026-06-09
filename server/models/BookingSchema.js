const mongoose = require("mongoose");

const bookingModel = mongoose.Schema(
  {
    propertyId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "property",
      required: true,
    },

    ownerId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
    },

    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },

    userName: {
      type: String,
      required: [true, "Please provide a User Name"],
    },

    phone: {
      type: String,
      required: [true, "Please provide a Phone Number"],
    },

    bookingStatus: {
      type: String,
      enum: ["pending", "approved", "rejected"],
      default: "pending",
    },
  },
  { timestamps: true }
);

const bookingSchema = mongoose.model("booking", bookingModel);

module.exports = bookingSchema;