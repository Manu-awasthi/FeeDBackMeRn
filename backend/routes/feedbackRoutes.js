import express from "express";
import Feedback from "../models/Feedback.js";

const router = express.Router();

// POST feedback
router.post("/", async (req, res) => {
  try {
    const feedback = await Feedback.create(req.body);
    res.status(201).json(feedback);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// GET all feedbacks
router.get("/", async (req, res) => {
 try{ const feedbacks = await Feedback.find();
  res.json(feedbacks);}catch(error){
   
    res.status(500).json({ message: error.message });
  }
});

//get one by id
router.get("/:id" , async(req,res)=>{
  try{
  const feedback = await Feedback.findById(req.params.id)
   if (!feedback) return res.status(404).json({ message: "Feedback not found" });
    res.status(200).json(feedback);
  }catch(err){
     res.status(500).json({ message: error.message });
  

  }
})

router.put("/:id", async (req, res) => {
  try {
    const updated = await Feedback.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!updated) return res.status(404).json({ message: "Feedback not found" });
    res.status(200).json(updated);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const deleted = await Feedback.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ message: "Feedback not found" });
    res.status(200).json({ message: "Feedback deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;
