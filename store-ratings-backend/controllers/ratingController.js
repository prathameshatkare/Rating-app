const { Rating, Store, User } = require("../models");

// Submit a rating
exports.submitRating = async (req, res) => {
  const { storeId, rating } = req.body;
  const userId = req.user.id;

  try {
    // Check if store exists
    const store = await Store.findByPk(storeId);
    if (!store) return res.status(404).json({ message: "Store not found" });

    // Create or update rating
    let userRating = await Rating.findOne({ where: { userId, storeId } });
    if (userRating) {
      userRating.rating = rating;
      await userRating.save();
    } else {
      userRating = await Rating.create({ userId, storeId, rating });
    }

    res
      .status(200)
      .json({ message: "Rating submitted successfully", rating: userRating });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get all ratings for a store
exports.getStoreRatings = async (req, res) => {
  const { storeId } = req.params;

  try {
    const store = await Store.findByPk(storeId, {
      include: [{ model: Rating, include: [User] }],
    });
    if (!store) return res.status(404).json({ message: "Store not found" });

    res.status(200).json(store.Ratings);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
