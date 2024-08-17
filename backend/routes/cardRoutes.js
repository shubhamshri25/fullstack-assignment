const express = require("express");
const router = express.Router();
const Card = require("../models/card");

// route for creating a card
router.post("/", async (req, res) => {
  try {
    const { title, description } = req.body;

    if (!title || !description) {
      return res
        .status(400)
        .json({ message: "Title and description are required" });
    }

    const newCard = await Card.create({ title, description });
    // await newCard.save();
    res.status(201).json(newCard);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// route for getting all cards
router.get("/", async (req, res) => {
  try {
    const cards = await Card.find({});
    res.status(200).json(cards);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// route for getting a specific card
router.get("/:title", async (req, res) => {
  try {
    const { title } = req.params;
    const card = await Card.findOne({ title });

    if (!card) {
      return res.status(404).json({ message: "Card not found" });
    }

    res.status(200).json(card);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
