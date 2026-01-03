import express from "express";
import upload from "../config/multer.js";
import JobApplication from "../models/JobApplication.js";

const router = express.Router();

router.post("/apply", upload.single("resume"), async (req, res) => {
  try {
    const {
      name,
      email,
      phone,
      address,
      laptop,
      education,
      experience,
      languages,
      skills,
      links,
      voluntaryDisclosures,
    } = req.body;

    const resumePath = req.file ? `/uploads/${req.file.filename}` : "";

    const newApplication = new JobApplication({
      name,
      email,
      phone,
      address,
      laptop,
      education,
      experience,
      languages,
      skills,
      links,
      voluntaryDisclosures,
      resume: resumePath,
    });

    await newApplication.save();

    res.status(201).json({
      message: "Application submitted successfully!",
      application: newApplication,
    });
  } catch (error) {
    console.error("Error submitting application:", error);
    res.status(500).json({ error: "Error submitting application" });
  }
});

export default router;
