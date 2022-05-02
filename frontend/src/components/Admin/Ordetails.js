import React, { Fragment, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useAlert } from "react-alert";
import { Button,Alert } from "@material-ui/core";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import PersonIcon from "@material-ui/icons/Person";
import { DataGrid } from "@material-ui/data-grid";
import {getOrDetails,clearErrors,updateStatus,getPliclToken} from "../../actions/userAction";
import { UPDATE_STATUS_RESET } from "../../constants/userConstants";
import axios from "axios";
import "./Ordetails.css"
import { Link } from "react-router-dom";
import EditIcon from "@material-ui/icons/Edit";
import swal from 'sweetalert';

const Ordetails =({history, match })=>{
    const dispatch = useDispatch();
    const alert = useAlert();
  
    const { loading, error, user } = useSelector((state) => state.allordetails);

    const {token} = useSelector((state) => state.tokenPlicl);



    const {isDeleted} = useSelector((state) => state.user);


    const {
      isUpdated,
      message,
    } = useSelector((state) => state.orstatus);
  
    const [orId, setOrId] = useState("");
    const [orSerialNumber, setOrSerialNumber] = useState("");
    const [policyNumber, setPolicyNumber] = useState("");
    const [projectCode, setProjectCode] = useState("");
    const [officeBranchCode, setOfficeBranchCode] = useState("");
    const [officeBranchName, setOfficeBranchName] = useState("");
    const [orType, setOrType] = useState("");
    const [orDate, setOrDate] = useState("");
    const [dueDate, setDueDate] = useState("");
    const [fromInstallment, setFromInstallment] = useState("");
    const [toInstallment, setToInstallment] = useState("");
    const [premiumUnitAmount, setPremiumUnitAmount] = useState("");
    const [totalPremiumAmount, setTotalPremiumAmount] = useState("");
    const [lateFee, setLateFee] = useState("");
    const [suspenseAmount, setSuspenseAmount] = useState("");
    const [others, setOthers] = useState("");
    const [totalPayableAmount, setTotalPayableAmount] = useState("");
    const [modeOfPayment, setModeOfPayment] = useState("");
    const [paymentDetail, setPaymentDetail] = useState("");
    const [prId, setPrId] = useState("");
    const [prDate, setPrDate] = useState("");
    const [nextPremiumDueDate, setNextPremiumDueDate] = useState("");
    const [totalPremiumPaidSoFar, setTotalPremiumPaidSoFar] = useState("");
    const [premiumMode, setPremiumMode] = useState("");
    const [depositDate, setDepositDate] = useState("");
    const [depositedToBank, setDepositedToBank] = useState("");
    const [depositedToBranch, setDepositedToBranch] = useState("");
    const [depositedToAccountNumber, setDepositedToAccountNumber] = useState("");
    const [mfs, setMfs] = useState("");
    const [mfsAccountNumber, setMfsAccountNumber] = useState("");
    const [agentName, setAgentName] = useState("");
    const [agentId, setAgentIdl] = useState("");
    const [productCode, setProductCode] = useState("");
    const [riskStartDate, setRiskStartDate] = useState("");
    const [dateOfBirth, setDateOfBirth] = useState("");
    const [status, setStatus] = useState("");
    
    const [company, setCompany] = useState("");


  

    const[firstname3,setFirstname3]=useState("");

    const[firstname4,setFirstname4]=useState("");

    const[firstname5,setFirstname5]=useState("");
    const [tokenNumber, setTokenNumber] = useState("");

    const [comments, setComments] = useState([]);

    const [messageText, setMessageText] = useState("");
       
  const userId = match.params.id;
  const userId2 ="625d43af33693433a06f393d";

  const redirect ="all/users"


  useEffect(() => {


    if (token && token._id !== userId2) {
      dispatch(getPliclToken(userId2));
    } else {
      setFirstname5(token.tokenNumber);
    }
       
    
 

      if (user && user._id !== userId) {
      dispatch(getOrDetails(userId));
    } else {
      setOrId(user.orId);
      setOrSerialNumber(user.orSerialNumber);
      setPolicyNumber(user.policyNumber);
      setProjectCode(user.projectCode);
      setOfficeBranchCode(user.officeBranchCode);
      setOfficeBranchName(user.officeBranchName);
      setOrType(user.orType);
      setOrDate(user.orDate);
      setDueDate(user.dueDate);
      setFromInstallment(user.fromInstallment);
      setToInstallment(user.toInstallment);
      setPremiumUnitAmount(user.premiumUnitAmount);
      setTotalPremiumAmount(user.totalPremiumAmount);
      setLateFee(user.lateFee);
      setSuspenseAmount(user.suspenseAmount);
      setOthers(user.others);
      setTotalPayableAmount(user.totalPayableAmount);
      setModeOfPayment(user.modeOfPayment);
      setPaymentDetail(user.paymentDetail);
      setPrId(user.prId);
      setPrDate(user.prDate);
      setNextPremiumDueDate(user.nextPremiumDueDate);
      setTotalPremiumPaidSoFar(user.totalPremiumPaidSoFar);
      setPremiumMode(user.premiumMode);
      setDepositDate(user.depositDate);
      setDepositedToBank(user.depositedToBank);
      setDepositedToBranch(user.depositedToBranch);
      setDepositedToAccountNumber(user.depositedToAccountNumber);
      setMfs(user.mfs);
      setMfsAccountNumber(user.mfsAccountNumber);
      setAgentName(user.agentName);
      setAgentIdl(user.agentId);
      setProductCode(user.productCode);
      setRiskStartDate(user.riskStartDate);
      setDateOfBirth(user.dateOfBirth);
      setStatus(user.status);
             
  
    }

     if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }

    if(isUpdated){
      // alert.success(message);
      // alert.success(messageText);
      // alert.show(messageText)

       history.push("/operator/orlist");
      dispatch({ type: UPDATE_STATUS_RESET });
          }
          // console.log(token);

      }, [dispatch, alert, error,history,isUpdated,isDeleted,user,userId,tokenNumber,messageText]);

  
  const updateUserSubmitHandler = (e) => {
    e.preventDefault();
   
    const myForm = new FormData();

    const myForm2 = new FormData();

    
    myForm.set("orId", orId);
    myForm.set("orSerialNumber", orSerialNumber);
    myForm.set("policyNumber", policyNumber);
    myForm.set("projectCode", projectCode);
    myForm.set("officeBranchCode", officeBranchCode);
    myForm.set("officeBranchName", officeBranchName);
    myForm.set("orType", orType);
    myForm.set("orDate", orDate);
    myForm.set("dueDate", dueDate);
    myForm.set("fromInstallment", fromInstallment);
    myForm.set("toInstallment", toInstallment);
    myForm.set("premiumUnitAmount", premiumUnitAmount);
    myForm.set("totalPremiumAmount", totalPremiumAmount);
    myForm.set("lateFee", lateFee);
    myForm.set("suspenseAmount", suspenseAmount);
    myForm.set("others", others);
    myForm.set("totalPayableAmount", totalPayableAmount);
    myForm.set("modeOfPayment", modeOfPayment);
    myForm.set("paymentDetail", paymentDetail);
    myForm.set("prId", prId);
    myForm.set("prDate", prDate);
    myForm.set("nextPremiumDueDate", nextPremiumDueDate);
    myForm.set("totalPremiumPaidSoFar", totalPremiumPaidSoFar);
    myForm.set("premiumMode", premiumMode);
    myForm.set("depositDate", depositDate);
    myForm.set("depositedToBank", depositedToBank);
    myForm.set("depositedToBranch", depositedToBranch);
    myForm.set("depositedToAccountNumber", depositedToAccountNumber);
    myForm.set("mfs", mfs);
    myForm.set("mfsAccountNumber", mfsAccountNumber);
    myForm.set("agentName", agentName);
    myForm.set("agentId", agentId);
    myForm.set("productCode", productCode);
    myForm.set("riskStartDate", riskStartDate);
    myForm.set("dateOfBirth", dateOfBirth);

    myForm2.set("status", 1);


    // const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6InBvcHVsYXIiLCJyb2xlIjoiTGlmZSIsImlhdCI6MTY0OTg0NDc1NCwiZXhwIjoxNjQ5OTMxMTU0fQ.uoATK2D2DvdoS3W4l3pxB_RBY9s7ZGTXX-FjBZXt0b4'

    // setFirstname3(tokenNumber);
    const token = firstname5;

   console.log(firstname5);
    // alert(token);
   
    const config = {headers: {"Content-Type": "application/json",'Authorization': `Bearer ${token}`}};

var object = {};
myForm.forEach((value, key) => object[key] = value);
var ordata = JSON.stringify(object);
console.log(ordata);



const response = axios({
      method: "post",
      url: `https://idra-ump.com/app/extern/v1/original-receipt`,
      data: JSON.stringify(object),
      headers: {"Content-Type": "application/json",'Authorization': `Bearer ${token}`},

      
    })

    .then(res=>{

     setComments([...comments, res.data])
      console.log(res.data.message);
      console.log(comments);// donot show 
      alert.success(res.data.message);
      // swal({
      //   title: "Good job!",
      //   text: "You clicked the button!",
      //   icon: "success",
      //   button: "Aww yiss!",
      // });
      
      })

      // .then(function (response) {

      //  //handle success
      //  // history.push("/all/users");
      //   console.log(response);
      // })

      
      // .catch(function (response) {
      //   //handle error
      //  console.log(response);
      // });
 
      console.log(myForm2);
        
 
    dispatch(updateStatus(userId,myForm2));

  };

  

function onclickHandle(event) {

    setFirstname5(firstname4);
}


    return(
      
      <Fragment>
  
 <div>


<form 

encType="multipart/form-data" 
onSubmit={updateUserSubmitHandler}>

<h1>Original Receipt Insert to UMP Database</h1>

<div>
{comments && comments.map(comment=>{
return(
<div key={comment.id}>
<textarea rows="4" cols="50" name="comment" form="usrform"
value={comment.message} onChange={(e) => setMessageText(e.target.value)}>
Enter text here...</textarea>


</div>

)})
}
</div>

<input type="submit" value= "InsertData" className ="signUpBtn"/>

<div>
 <labal>orId</labal> <input type="text" value={orId} onChange={(e) => setOrId(e.target.value)} readOnly = {true}/>
</div>

<div>
<labal>orSerialNumber</labal><input type="text"  value={orSerialNumber} onChange={(e) => setOrSerialNumber(e.target.value)} readOnly = {true}/>
</div> 

<div>
<labal>policyNumber</labal> <input type="text" value={policyNumber} onChange={(e) => setPolicyNumber(e.target.value)} readOnly = {true}/>
</div>


<div>
<labal>projectCode</labal> <input type="text"  value={projectCode} onChange={(e) => setProjectCode(e.target.value)} readOnly = {true}/>
</div>

<div>
<labal>officeBranchCode</labal> <input type="text"  value={officeBranchCode} onChange={(e) => setOfficeBranchCode(e.target.value)} readOnly = {true}/>
</div> 

<div>
<labal>officeBranchName</labal> <input type="text" value={officeBranchName} onChange={(e) => setOfficeBranchName(e.target.value)} readOnly = {true}/>
</div>

<div>
<labal>orType</labal> <input type="text"  value={orType} onChange={(e) => setOrType(e.target.value)} readOnly = {true}/>
</div>

<div>
<labal>orDate</labal>  <input type="text"  value={orDate} onChange={(e) => setOrDate(e.target.value)} readOnly = {true}/>
</div> 

<div>
<labal>dueDate</labal>  <input type="text"  value={dueDate} onChange={(e) => setDueDate(e.target.value)} readOnly = {true}/>
</div>

<div>
<labal>fromInstallment</labal>  <input type="text"  value={fromInstallment} onChange={(e) => setFromInstallment(e.target.value)} readOnly = {true}/>
</div>

<div>
<labal>toInstallment</labal> <input type="text" value={toInstallment} onChange={(e) => setToInstallment(e.target.value)} readOnly = {true}/>
</div> 

<div>
<labal>premiumUnitAmount</labal> <input type="text"  value={premiumUnitAmount} onChange={(e) => setPremiumUnitAmount(e.target.value)} readOnly = {true}/>
</div>

<div>
<labal>totalPremiumAmount</labal>  <input type="text"  value={totalPremiumAmount} onChange={(e) => setTotalPremiumAmount(e.target.value)} readOnly = {true}/>
</div>

<div>
<labal>lateFee</labal>  <input type="text"  value={lateFee} onChange={(e) => setLateFee(e.target.value)} readOnly = {true}/>
</div> 

<div>
<labal>suspenseAmount</labal> <input type="text" value={suspenseAmount} onChange={(e) => setSuspenseAmount(e.target.value)} readOnly = {true}/>
</div>

<div>
<labal>others</labal> <input type="text"  value={others} onChange={(e) => setOthers(e.target.value)} readOnly = {true}/>
</div>

<div>
<labal>totalPayableAmount</labal>  <input type="text"  value={totalPayableAmount} onChange={(e) => setTotalPayableAmount(e.target.value)} readOnly = {true}/>
</div> 

<div>
<labal>modeOfPayment</labal>  <input type="text" value={modeOfPayment} onChange={(e) => setModeOfPayment(e.target.value)} readOnly = {true}/>
</div>

<div>
<labal>paymentDetail</labal> <input type="text" value={paymentDetail} onChange={(e) => setPaymentDetail(e.target.value)} readOnly = {true}/>
</div>

<div>
<labal>prId</labal>  <input type="text"  value={prId} onChange={(e) => setPrId(e.target.value)} readOnly = {true}/>
</div> 

<div>
<labal>prDate</labal> <input type="text"  value={prDate} onChange={(e) => setPrDate(e.target.value)} readOnly = {true}/>
</div>

<div>
<labal>nextPremiumDueDate</labal>  <input type="text"  value={nextPremiumDueDate} onChange={(e) => setTotalPremiumPaidSoFar(e.target.value)} readOnly = {true}/>
</div>

<div>
<labal>totalPremiumPaidSoFar</labal>  <input type="text" value={totalPremiumPaidSoFar} onChange={(e) => setTotalPremiumPaidSoFar(e.target.value)} readOnly = {true}/>
</div> 

<div>
<labal>premiumMode</labal> <input type="text"  value={premiumMode} onChange={(e) => setPremiumMode(e.target.value)} readOnly = {true}/>
</div>

<div>
<labal>depositDate</labal>  <input type="text" value={depositDate} onChange={(e) => setDepositDate(e.target.value)} readOnly = {true}/>
</div>

<div>
<labal>depositedToBank</labal>  <input type="text"  value={depositedToBank} onChange={(e) => setDepositedToBranch(e.target.value)} readOnly = {true}/>
</div> 

<div>
<labal>depositedToAccountNumber</labal> <input type="text" value={depositedToAccountNumber} onChange={(e) => setDepositedToAccountNumber(e.target.value)} readOnly = {true}/>
</div>

<div>
<labal>mfs</labal>  <input type="text"  value={mfs} onChange={(e) => setMfs(e.target.value)} readOnly = {true}/>
</div>

<div>
<labal>mfsAccountNumber</labal> <input type="text" value={mfsAccountNumber} onChange={(e) => setMfsAccountNumber(e.target.value)} readOnly = {true}/>
</div> 

<div>
<labal>agentName</labal> <input type="text" value={agentName} onChange={(e) => setAgentName(e.target.value)} readOnly = {true}/>
</div>

<div>
<labal>agentId</labal>  <input type="text" value={agentId} onChange={(e) => setAgentIdl(e.target.value)} readOnly = {true}/>
</div>

<div>
<labal>productCode</labal> <input type="text"  value={productCode} onChange={(e) => setProductCode(e.target.value)} readOnly = {true}/>
</div> 

<div>
<labal>riskStartDate</labal>  <input type="text" value={riskStartDate} onChange={(e) => setRiskStartDate(e.target.value)} readOnly = {true}/>
</div>

<div>
<labal>dateOfBirth</labal>  <input type="text" value={dateOfBirth} onChange={(e) => setDateOfBirth(e.target.value)} readOnly = {true}/>
</div>

<div>
<labal>status</labal>  <input type="text" value={status} onChange={(e) => setStatus(e.target.value)} readOnly = {true}/>
</div>

</form>
 </div>

</Fragment>
    )
}

export default Ordetails;