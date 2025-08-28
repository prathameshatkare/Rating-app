const express = require("express");
const {
  submitRating,
  getStoreRatings,
} = require("../controllers/ratingController");
const authMiddleware = require("../middlewares/authMiddleware");

const router = express.Router();

// Submit rating (user only)
router.post("/", authMiddleware(["user"]), submitRating);

// Get all ratings for a store (any logged-in user)
router.get("/:storeId", authMiddleware(), getStoreRatings);

module.exports = router;
