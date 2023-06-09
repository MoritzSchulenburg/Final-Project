import express from "express";
import Restaurant from "../models/Restaurant.js";
import {
  createRestaurant,
  deleteRestaurant,
  getRestaurant,
  getRestaurants,
  updateRestaurant,
} from "../controllers/restaurants.js";
// import { createError } from "../utils/error.js";

const router = express.Router();

router.post("/", createRestaurant);

router.put("/:id", updateRestaurant);

router.delete("/:id", deleteRestaurant);

router.get("/:id", getRestaurant);

router.get("/", getRestaurants);

export default router;
