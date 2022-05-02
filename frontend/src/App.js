import React,{useEffect,useState} from "react";

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import WebFont from "webfontloader";

import Header from './components/Header';
import Footer from './components/Footer';
import LoginSingUp from './components/User/LoginSingUp';
import store from "./store"
import { loadUser } from './actions/userAction';
import UserOptions from "./components/User/UserOptions.js"
import {useSelector } from 'react-redux';
import Profile from './components/User/profile.js';
import ProtectedRoute from './components/Route/ProtectedRoute';
import UpdateProfile from './components/User/UpdateProfile.js'
import UpdatePassword from "./components/User/UpdatePassword.js"
import ForgotPassword from "./components/User/ForgotPassword.js"
import ResetPassword from "./components/User/ResetPassword.js"
import axios from "axios";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import Dashboard from "./components/Admin/Dashboard.js"
import UsersList from "./components/Admin/UsersList.js";
import UpdateUser from "./components/Admin/UpdateUser.js";
import Orlist from "./components/Admin/Orlist";
import Ordetails from "./components/Admin/Ordetails";
import IdraToken from "./components/Admin/IdraToken";
import Idratokendetails from "./components/Admin/Idratokendetails";


function App() {
  

const {isAuthenticated, user} = useSelector((state) => state.user);



  React.useEffect(() => {
  WebFont.load({
  google:{families: ["Roboto", "Droid Sans", "Chilanka"],

  },
});

store.dispatch(loadUser());


}, []);


  return (
    
    
    <Router>
      
      {/* <Mainview></Mainview> */}

    {/* <Header></Header> */}

    
    {isAuthenticated && <UserOptions user={user}/>} 
    

    <main>
    
    <Switch>
        
 
    <Route exact path= "/" component = {LoginSingUp}></Route>

    <Route exact path= "/login" component = {LoginSingUp}></Route>

    
    {/* <Route exact path="/idratoken" component={IdraToken} /> */}

    <ProtectedRoute isOfficer = {true} exact path="/officer/idratoken" component = {IdraToken}></ProtectedRoute>
    <ProtectedRoute isOfficer = {true} exact path="/officer/idratoken/:id" component = {Idratokendetails}></ProtectedRoute>
    
    {/* <Route exact path="/idratoken/:id" component={Idratokendetails} /> */}
       
    <ProtectedRoute exact path="/account" component = {Profile}></ProtectedRoute>
    
    <ProtectedRoute exact path="/me/update" component = {UpdateProfile}></ProtectedRoute>
    
    <ProtectedRoute exact path="/password/update" component = {UpdatePassword}></ProtectedRoute>

    <Route exact path="/password/forgot" component = {ForgotPassword}></Route>

    <Route exact path="/password/reset/:token" component = {ResetPassword}></Route>

           
    <ProtectedRoute isAdmin = {true} exact path="/admin/dashboard" component = {Dashboard}></ProtectedRoute>
    
    <ProtectedRoute isAdmin = {true} exact path="/admin/users" component = {UsersList}></ProtectedRoute>

    <ProtectedRoute isAdmin = {true} exact path="/admin/user/:id" component = {UpdateUser}></ProtectedRoute>

    

    <ProtectedRoute isOperator = {true} exact path="/operator/orlist" component = {Orlist}></ProtectedRoute>

    <ProtectedRoute isOperator = {true} exact path="/operator/orlist/:id" component = {Ordetails}></ProtectedRoute>

    
   
    </Switch>

    </main>
    {/* <Footer></Footer> */}
    </Router>

        

  );
}

export default App;
   