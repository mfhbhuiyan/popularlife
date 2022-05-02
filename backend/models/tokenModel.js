const mongoose = require("mongoose")


const tokenSchema = mongoose.Schema({

    company:{type:String,requre:true},
    tokenNumber:{type:String,requre:true}
    

})


module.exports = mongoose.model("Companytoken",tokenSchema);