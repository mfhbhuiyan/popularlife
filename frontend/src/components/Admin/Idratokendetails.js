import React, { Fragment, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useAlert } from "react-alert";
import { Button } from "@material-ui/core";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import PersonIcon from "@material-ui/icons/Person";
import {getTokenDetails,clearErrors,updateToken} from "../../actions/userAction";
import axios from "axios";
import { UPDATE_TOKEN_RESET } from "../../constants/userConstants";

import "./Idratokendetails.css";



const Idratokendetails = ({history, match }) =>{

  const dispatch = useDispatch();

    const alert = useAlert();
  
    const { loading, error, accessToken } = useSelector((state) => state.tokenDetails);

    const {
      isUpdated,
      message,
    } = useSelector((state) => state.tokenupdate);

    const [company, setCompany] = useState("");

    const [tokenNumber, setTokenNumber] = useState("");

    // const [comments, setComments] = useState([]);

    const userId = match.params.id;


    useEffect(() => {
      if (accessToken && accessToken._id !== userId) {
        dispatch(getTokenDetails(userId));
      } else {
          setCompany(accessToken.company);
          setTokenNumber(accessToken.tokenNumber);
             
      }
      if (error) {
        alert.error(error);
        dispatch(clearErrors());
      }
  
      if(isUpdated){
        alert.success(message);
        history.push("/account");
        dispatch({ type: UPDATE_TOKEN_RESET });
            }
   
    }, [dispatch, alert, error,history,isUpdated, accessToken, userId]);

    // useEffect(() => {
    //  console.log(comments)
    // }, [comments])
  
    const updateUserSubmitHandler = (e) => {
      e.preventDefault();

      const myForm2 = new FormData();

      myForm2.set("tokenNumber", tokenNumber);

      dispatch(updateToken(userId,myForm2));

    }


  const [comments, setComments] = useState([]);
  // const [comments, setComments] = useState(["Md. Foyshal Hossain", "Rupshi Rupgonj", "01985133577"]);

    const sendComment = () => {

      const response= axios({
        method: "post",
        url: `https://idra-ump.com/app/extern/v1/authenticate`,
         data: {
          "client_id": "popular",
          "client_secret": "3m7RevNs2J"
        },
               
      })

       .then(res=>{
              setComments([...comments, res.data])
      })
   
      // setComments([...comments, comments]);

      };
  
    console.log(comments);





  
    return(
      <Fragment>

  
  <form className="createProductForm"
encType="multipart/form-data" 
onSubmit={updateUserSubmitHandler}>

<h1>Access Token</h1>

<input type="submit" value= "Update Token" className ="signUpBtn"/>

<div>
<labal>TokenNumber</labal>
<textarea rows="4" cols="50" name="comment" form="usrform"
value={tokenNumber} onChange={(e) => setTokenNumber(e.target.value)}>
Enter text here...</textarea>
</div> 

</form >

<div className="createProductForm">

<div>
<button onClick={sendComment}>Token Generate</button>
</div>
     
<div>
{comments && comments.map(comment=>{
return(
<div key={comment.id}>
<textarea rows="4" cols="50" name="comment" form="usrform"
value={comment.access_token} onChange={(e) => setTokenNumber(e.target.value)}>
Enter text here...</textarea>
</div>

)})
}
</div>

</div>
 
   </Fragment>
    )

}

export default Idratokendetails;