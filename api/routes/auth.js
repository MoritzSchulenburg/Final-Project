import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  res.send("Hello, this is auth endpoint");
});

router.get("/api/register", (req, res) => {
  res.send("Hello, this is auth register endpoint");
});

export default router;
