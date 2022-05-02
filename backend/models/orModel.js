const mongoose = require("mongoose")

const orSchema = mongoose.Schema({

    orId : {type:String},
    orSerialNumber :  {type:String},
    policyNumber :  {type:String},
    projectCode :  {type:String},
    officeBranchCode :  {type:String},
    officeBranchName :  {type:String},
    orType :  {type:String},
    orDate :  {type:String},
    dueDate :  {type:String},
    fromInstallment :  {type:String},
    toInstallment :  {type:String},
    premiumUnitAmount :  {type:String},
    totalPremiumAmount :  {type:String},
    lateFee :  {type:String},
    suspenseAmount :  {type:String},
    others : {type:String},
    totalPayableAmount : {type:String},
    modeOfPayment :  {type:String},
    paymentDetail :  {type:String},
    prId :  {type:String},
    prDate :  {type:String},
    nextPremiumDueDate :  {type:String},
    totalPremiumPaidSoFar :  {type:String},
    premiumMode :  {type:String},
    depositDate :  {type:String},
    depositedToBank :  {type:String},
    depositedToBranch :  {type:String},
    depositedToAccountNumber :  {type:String},
    mfs :  {type:String},
    mfsAccountNumber :  {type:String},
    agentName :  {type:String},
    agentId :  {type:String},
    productCode :  {type:String},
    riskStartDate :  {type:String},
    dateOfBirth :  {type:String},
    status :  {type:String},
})


module.exports = mongoose.model("orcollected", orSchema) 