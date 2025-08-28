import React, { useState } from "react";
import API, { setAuthToken } from "../api";
import { useNavigate } from "react-router-dom";

const AddStore = () => {
  const [form, setForm] = useState({ name: "", description: "" });
  const navigate = useNavigate();

  const token = localStorage.getItem("token");
  setAuthToken(token);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await API.post("/stores", form);
      alert("Store added successfully!");
      navigate("/stores");
    } catch (err) {
      alert(err.response.data.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Store</h2>
      <input
        name="name"
        placeholder="Store Name"
        onChange={handleChange}
        required
      />
      <input
        name="description"
        placeholder="Description"
        onChange={handleChange}
        required
      />
      <button type="submit">Add Store</button>
    </form>
  );
};

export default AddStore;
