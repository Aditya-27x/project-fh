const express = require("express");
const Projects = require("../models/project.model");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const pjs = await Projects.find();
    pjs
      ? res.status(200).json({ success: true, data: pjs })
      : res.status(404).json({ success: false, msg: "projects not found" });
  } catch (error) {
    res.status(500).json({ success: false, error });
  }
});

router.get('/:id', async(req,res)=>{
    try {
        const id = req.params.id
        const pj = await Projects.findOne({_id:id});


        pj
        ? res.status(200).json({success:true,data:pj}):
        res.status(404).json({success:false,msg:"project not found"});

    } catch (error) {
        res.status(500).json({ success: false, error });
    }
})

module.exports=router;

