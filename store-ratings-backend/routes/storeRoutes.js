const express = require("express");
const { Store, Rating } = require("../models"); // import Rating
const authMiddleware = require("../middlewares/authMiddleware");

const router = express.Router();

// Admin can add a store
router.post("/", authMiddleware(["admin"]), async (req, res) => {
  try {
    const store = await Store.create(req.body);
    res.status(201).json(store);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Anyone logged in can view stores with ratings
router.get("/", authMiddleware(), async (req, res) => {
  try {
    const stores = await Store.findAll({
      include: [{ model: Rating }], // include ratings
    });
    res.status(200).json(stores);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
