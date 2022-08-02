import express from "express";
const router = express.Router();


router.post("/create", async (req, res) => {
   res.send("Hello world")
});

export default router;
