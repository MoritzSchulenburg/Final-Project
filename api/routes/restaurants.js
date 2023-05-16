import express from "express";
import Restaurant from "../models/Restaurant.js";

const router = express.Router();

router.post("/", async (req, res) => {
  const newRestaurant = new Restaurant(req.body);

  try {
    const savedRestaurant = await newRestaurant.save();
    res.status(200).json(savedRestaurant);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.put("/:id", async (req, res) => {
  try {
    const updatedRestaurant = await Restaurant.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedRestaurant);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    await Restaurant.findByIdAndDelete(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json("Restaurant has been deleted");
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const restaurant = await Restaurant.findById(req.params.id);
    res.status(200).json(restaurant);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/", async (req, res, next) => {
  try {
    const restaurants = await Restaurant.findById("adadadadad");
    res.status(200).json(restaurants);
  } catch (err) {
    next(err);
  }
});

export default router;
