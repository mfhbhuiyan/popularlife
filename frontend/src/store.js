import {createStore,applyMiddleware, combineReducers} from "redux";
import thunk from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension";
import { profileReducer, userReducer,forgotPasswordReducer,allUsersReducer,userDetailsReducer,allOrsReducer,orDetailsReducer,statusUpdateReducer,tokenAllsReducer,tokenDetailsReducer,tokenUpdateReducer,allPliclReducer} from "./reducers/userReducer";

 const reducer = combineReducers({
      user:userReducer,
      profile:profileReducer,
      forgotPassword:forgotPasswordReducer,
      allUsers: allUsersReducer,
      userDetails: userDetailsReducer,
      allOR:allOrsReducer,
      allordetails: orDetailsReducer,
      orstatus: statusUpdateReducer,
      accessToken: tokenAllsReducer,
      tokenDetails:tokenDetailsReducer,
      tokenupdate: tokenUpdateReducer,
      tokenPlicl:allPliclReducer,
      }); 

const cartFromLocalStorage = localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : []

const shippingInfoStorage = localStorage.getItem("shippingInfo") ? JSON.parse(localStorage.getItem("shippingInfo")): {}
 
 let initialState = {

     cart: {
          cartItems: cartFromLocalStorage,
          shippingInfo: shippingInfoStorage
     }

     };



const middleware = [thunk];

 const store= createStore(
     reducer,
     initialState,
     composeWithDevTools(applyMiddleware(...middleware))
     );

     export default store;
