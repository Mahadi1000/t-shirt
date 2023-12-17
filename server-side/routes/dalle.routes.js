import express from "express";
import * as dotenv from "dotenv";
import OpenAI from "openai";

dotenv.config();

const openai = new OpenAI({
  key: process.env.OPENAI_API_KEY,
  engine: "text-davinci-003", // Use the appropriate engine version
});

const router = express.Router();

router.route("/").get((req, res) => {
  res.status(200).json({ message: "Hello from DALL.E ROUTES" });
});

router.route("/").post(async (req, res) => {
  try {
    const { prompt } = req.body;

    const response = await openai.complete({
      engine: "text-davinci-003", // Use the appropriate engine version
      prompt,
      max_tokens: 50, // Adjust based on your needs
    });

    const image = response.choices[0].text;

    res.status(200).json({ photo: image });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Something went wrong" });
  }
});

export default router;
