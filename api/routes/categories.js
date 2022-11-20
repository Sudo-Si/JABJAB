const router =require("express").Router();
const Category = require("../models/category");

//CREATE NEW CAT
router.post("/", async(req, res)=>{
    const newCat = new Category (req.body);
    try {
        const savedCat = await newCat.save();
        res.status(200).json(savedCat);
    } catch (err) {
        res.status(500).json(err)
    }

});
//CREATE NEW CAT
router.get("/", async(req, res)=>{
    // const cats = await Category.find();
    try {
        const savedCat = await Category.find();
        res.status(200).json(savedCat);
    } catch (err) {
        res.status(500).json(err)
    }

});

module.exports = router;