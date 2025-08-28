const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Routes
app.get("/", (req, res) => res.send("API is running"));
const authRoutes = require("./routes/authRoutes");

app.use("/api/auth", authRoutes);
const storeRoutes = require("./routes/storeRoutes");
app.use("/api/stores", storeRoutes);
const ratingRoutes = require("./routes/ratingRoutes");
app.use("/api/ratings", ratingRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
