const Property = require("../models/PropertySchema");
const Booking = require("../models/BookingSchema");

// Add Property
const addProperty = async (req, res) => {
  try {
    const property = await Property.create({
      ...req.body,
      ownerId: req.user._id,
      ownerName: req.user.name,
      propertyImage: req.file ? req.file.filename : null,
    });

    res.status(201).json({
      message: "Property added successfully",
      property,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get Owner Properties
const getOwnerProperties = async (req, res) => {
  try {
    const properties = await Property.find({ ownerId: req.user._id });
    res.json(properties);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update Property
const updateProperty = async (req, res) => {
  try {
    const property = await Property.findOneAndUpdate(
      { _id: req.params.id, ownerId: req.user._id },
      req.body,
      { new: true }
    );

    res.json({
      message: "Property updated successfully",
      property,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete Property
const deleteProperty = async (req, res) => {
  try {
    await Property.findOneAndDelete({
      _id: req.params.id,
      ownerId: req.user._id,
    });

    res.json({ message: "Property deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get Bookings for Owner Properties
const getOwnerBookings = async (req, res) => {
  try {
    const bookings = await Booking.find({ ownerId: req.user._id }).populate(
      "propertyId userId"
    );

    res.json(bookings);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update Booking Status
const updateBookingStatus = async (req, res) => {
  try {
    const booking = await Booking.findByIdAndUpdate(
      req.params.id,
      { bookingStatus: req.body.bookingStatus },
      { new: true }
    );

    res.json({
      message: "Booking status updated",
      booking,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  addProperty,
  getOwnerProperties,
  updateProperty,
  deleteProperty,
  getOwnerBookings,
  updateBookingStatus,
};