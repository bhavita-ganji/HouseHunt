const express = require("express");
const {
  addProperty,
  getOwnerProperties,
  updateProperty,
  deleteProperty,
  getOwnerBookings,
  updateBookingStatus,
} = require("../controllers/ownerController");

const {
  authMiddleware,
  roleMiddleware,
} = require("../middlewares/authMiddleware");

const router = express.Router();

router.post(
  "/add-property",
  authMiddleware,
  roleMiddleware("owner", "admin"),
  addProperty
);

router.get(
  "/properties",
  authMiddleware,
  roleMiddleware("owner", "admin"),
  getOwnerProperties
);

router.put(
  "/property/:id",
  authMiddleware,
  roleMiddleware("owner", "admin"),
  updateProperty
);

router.delete(
  "/property/:id",
  authMiddleware,
  roleMiddleware("owner", "admin"),
  deleteProperty
);

router.get(
  "/bookings",
  authMiddleware,
  roleMiddleware("owner", "admin"),
  getOwnerBookings
);

router.put(
  "/booking/:id",
  authMiddleware,
  roleMiddleware("owner", "admin"),
  updateBookingStatus
);

module.exports = router;