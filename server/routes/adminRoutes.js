const express = require("express");
const {
  getAllUsers,
  approveOwner,
  getAllProperties,
  getAllBookings,
} = require("../controllers/adminController");

const {
  authMiddleware,
  roleMiddleware,
} = require("../middlewares/authMiddleware");

const router = express.Router();

router.get(
  "/users",
  authMiddleware,
  roleMiddleware("admin"),
  getAllUsers
);

router.put(
  "/approve-owner/:id",
  authMiddleware,
  roleMiddleware("admin"),
  approveOwner
);

router.get(
  "/properties",
  authMiddleware,
  roleMiddleware("admin"),
  getAllProperties
);

router.get(
  "/bookings",
  authMiddleware,
  roleMiddleware("admin"),
  getAllBookings
);

module.exports = router;