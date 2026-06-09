const express = require("express");
const {
  registerUser,
  loginUser,
  getProperties,
  bookProperty,
  getMyBookings,
} = require("../controllers/userController");

const { authMiddleware } = require("../middlewares/authMiddleware");

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/properties", getProperties);
router.post("/book-property", authMiddleware, bookProperty);
router.get("/my-bookings", authMiddleware, getMyBookings);

module.exports = router;