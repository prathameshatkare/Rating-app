const jwt = require("jsonwebtoken");
require("dotenv").config();

const authMiddleware = (roles = []) => {
  return (req, res, next) => {
    const token = req.headers["authorization"];
    if (!token)
      return res
        .status(401)
        .json({ message: "Access denied. No token provided." });

    try {
      const decoded = jwt.verify(token.split(" ")[1], process.env.JWT_SECRET);
      req.user = decoded;

      // Check role
      if (roles.length && !roles.includes(decoded.role)) {
        return res
          .status(403)
          .json({ message: "Forbidden. You do not have access." });
      }

      next();
    } catch (err) {
      res.status(400).json({ message: "Invalid token" });
    }
  };
};

module.exports = authMiddleware;
