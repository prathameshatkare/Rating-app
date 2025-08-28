import React, { useEffect, useState } from "react";
import API, { setAuthToken } from "./api";

const Stores = () => {
  const [stores, setStores] = useState([]);
  const [ratings, setRatings] = useState({});

  useEffect(() => {
    const token = localStorage.getItem("token");
    setAuthToken(token);
    fetchStores();
  }, []);

  const fetchStores = async () => {
    try {
      const res = await API.get("/stores");
      setStores(res.data);
    } catch (err) {
      alert(err.response?.data?.message || err.message);
    }
  };

  const handleRatingChange = (storeId, value) => {
    setRatings({ ...ratings, [storeId]: value });
  };

  const submitRating = async (storeId) => {
    try {
      await API.post("/ratings", { storeId, rating: ratings[storeId] });
      alert("Rating submitted!");
      fetchStores(); // refresh stores to update average rating
    } catch (err) {
      alert(err.response?.data?.message || err.message);
    }
  };

  return (
    <div>
      <h2>Stores</h2>
      {stores.map((store) => {
        const totalRatings =
          store.Ratings?.reduce((sum, r) => sum + r.rating, 0) || 0;
        const avgRating = store.Ratings?.length
          ? (totalRatings / store.Ratings.length).toFixed(1)
          : "No ratings";

        return (
          <div
            key={store.id}
            style={{
              border: "1px solid black",
              margin: "10px",
              padding: "10px",
            }}
          >
            <h3>{store.name}</h3>
            <p>{store.description}</p>
            <p>Average Rating: {avgRating}</p>
            <input
              type="number"
              min="1"
              max="5"
              value={ratings[store.id] || ""}
              onChange={(e) => handleRatingChange(store.id, e.target.value)}
            />
            <button onClick={() => submitRating(store.id)}>
              Submit Rating
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Stores;
