const express = require('express');
const User = require('../models/user.model');
const router = express.Router();


router.get('/', async(req,res)=>{
    try {
        const users= await User.find();
        if(!users){res.status(404).json({success:false,msg:"user not found"});}
        res.status(200).json({
            success:true,
            data:users
        })
    } catch (error) {
        res.status(500).json({success:false,message:"error at getting users", error})
    }
});

router.get('/:id', async(req,res)=>{
    const id = req.params.id;

    try {
        const user = await User.findOne({_id:id});

        !user && res.status(404).json({success:false,message:"cant fine the user"});

        res.status(200).json({success:true,data:user});
    } catch (error) {
        res.status(500).json({message:'error at getting specific user',error})
    }
});

router.post('/register', async(req,res)=>{
    try {
        
      const nu=  new User(req.body);
      await nu.save();

      !nu && res.status(400).json({succcess:false,msg:'user cant be regiistered coz of come conflits',nu});

      res.status(200).json({success:true,message:"user registered successully",data:nu});

    } catch (error) {
        res.status(500).json({success:false,msg:"cant register the user causing server error",error});
    }
});

router.post('/login', async(req,res)=>{
    try {
        const {email,password}=req.body;

       const user= await User.findOne({email:email});

       !user&& res.status(404).json({succcess:false,msg:'user not found please register first!! '});

       user.password===password?
       res.status(200).json({success:true,msg:"userlogin successfully", data:user}):
       res.status(422).json({succcess:false,msg:'invelid password'});

        
        
    } catch (error) {
        res.status(500).json({success:false,msg:"cant login the user causing server error",error});
    }
})

module.exports=router;