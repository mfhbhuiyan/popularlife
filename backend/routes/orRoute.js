const express = require ("express");

const {getAllOrlist,getOrDetails,updateStatus,getTokenAlls,registerToken,getTokenDetails,updateToken,getTokenIdra} = require("../controllers/orController");

const {isAuthenticatedUser, authorizeRoles} = require("../middleware/auth");


const router = express.Router();

router.route("/create/token").get(registerToken)



router.route("/officer/idratoken").get(isAuthenticatedUser, authorizeRoles('officer'), getTokenAlls);  
router.route("/officer/idratoken/:id").get(isAuthenticatedUser, authorizeRoles('officer'), getTokenDetails); 
router.route("/officer/idratoken/update/:id").put(isAuthenticatedUser, authorizeRoles('officer'), updateToken); 


router.route("/operator/orlist").get(isAuthenticatedUser, authorizeRoles('operator'), getAllOrlist);  
router.route("/operator/orlist/:id").get(isAuthenticatedUser, authorizeRoles('operator'), getOrDetails); 
router.route("/operator/token/:id2").get(isAuthenticatedUser, authorizeRoles('operator'), getTokenIdra); 
router.route("/operator/statusupdate/:id").put(isAuthenticatedUser, authorizeRoles('operator'), updateStatus); 


// router.route("/operator/token/:id2").get(getTokenIdra);  

// router.route("/idratoken").get(getTokenAlls); 

// router.route("/idratoken/:id").get(getTokenDetails); 

// router.route("/idratoken/update/:id").put(updateToken); 



module.exports = router; 

