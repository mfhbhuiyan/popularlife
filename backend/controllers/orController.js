const orcollected = require("../models/orModel");
const ErrorHander = require("../utils/errorhander");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const Companytoken = require("../models/tokenModel");


// Get all OR(admin)

exports.getAllOrlist =catchAsyncErrors(async(req,res,next)=>{

    // const users = await orcollected.find();
    const users = await orcollected.find({status:'0'});
    
    res.status(200).json({
       success:true,
       users,
    });

});



// Get User Detail(admin)

exports.getOrDetails = async(req,res,next)=>{

    const user = await orcollected.findById(req.params.id);

    res.status(200).json({
        success:true,
        user,
    });

};


    // or update status admin


    exports.updateStatus = catchAsyncErrors(async(req,res)=>{

        const newUserData={
            status: req.body.status,
        }
        
    
        const user = await orcollected.findByIdAndUpdate(req.params.id,newUserData,{
            new:true,
            runValidators:true,
            useFindAndModify:false,
             
         });
    
         res.status(200).json({
            success:true,
            message:"Single original receipt submitted"
         });
    
    
    });
    

// Create Token 

exports.registerToken = async(req,res)=>{

    const {company,tokenNumber} = req.body;

    const token = await Companytoken.create({
        company,
        tokenNumber
    });

    res.status(200).json({
        success:true,
        token,
    });

};


  
// Get getTokenAlls 

exports.getTokenAlls = catchAsyncErrors(async(req,res,next)=>{

    const accessToken = await Companytoken.find();

    res.status(200).json({
        success:true,
        accessToken,
    });

});


  
// Get getTokenAlls Detail

exports.getTokenDetails = catchAsyncErrors(async(req,res,next)=>{

    const accessToken = await Companytoken.findById(req.params.id);

    res.status(200).json({
        success:true,
        accessToken,
    });

});





// update token admin


exports.updateToken = catchAsyncErrors(async(req,res,next)=>{

    const newUserData={
        tokenNumber: req.body.tokenNumber,
    }
    

    const accessToken = await Companytoken.findByIdAndUpdate(req.params.id,newUserData,{
        new:true,
        runValidators:true,
        useFindAndModify:false,
         
     });

     res.status(200).json({
        success:true,
        message:"Token Updated"
     });


});


exports.getTokenIdra =catchAsyncErrors(async(req,res,next)=>{

    // const users = await orcollected.find();
    // const token = await Companytoken.find({_id:'625d43af33693433a06f393d'});
    const token =  await Companytoken.findById(req.params.id2);
    
    res.status(200).json({
       success:true,
       token,
    });

});
