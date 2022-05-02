import React, { useEffect } from "react";
import Sidebar from "./Sidebar.js";
import "./dashboard.css";
import { Typography } from "@material-ui/core";
import {Link} from "react-router-dom";
import MetaData from "../../components/MetaData";
import {useDispatch, useSelector} from "react-redux";

import { getAllUsers } from "../../actions/userAction.js";



const Dashboard = () => {

  const dispatch = useDispatch();

  const { users } = useSelector((state) => state.allUsers);

  let outOfStock = 0;

  products &&
    products.forEach((item) => {
      if (item.Stock === 0) {
        outOfStock += 1;
      }
    });

  useEffect(() => {
 
    dispatch(getAllUsers());
  }, [dispatch]);

  let totalAmount = 0;
  orders &&
    orders.forEach((item) => {
      totalAmount += item.totalPrice;
    });

      return (
        <div className="dashboard">
          <MetaData title="Dashboard - Admin Panel" />
          <Sidebar />
    
          <div className="dashboardContainer">
            <Typography component="h1">Dashboard</Typography>
    
            <div className="dashboardSummary">
              <div>
                <p>
                  Total Amount <br /> ট {totalAmount}
                </p>
              </div>
              <div className="dashboardSummaryBox2">

      
                <Link to="/admin/users">
                  <p>Users</p>
                  <p>{users && users.length}</p>
                </Link>
              </div>
            </div>
         
          </div>
        </div>
      );
    };
    
    export default Dashboard;
    