import React, { Fragment, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button } from "@material-ui/core";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import PersonIcon from "@material-ui/icons/Person";
import { DataGrid } from "@material-ui/data-grid";
import { Link } from "react-router-dom";
import { useAlert } from "react-alert";
import EditIcon from "@material-ui/icons/Edit";
import "./orlist.css"

import {getAllTokens,clearErrors} from "../../actions/userAction";

import axios from "axios";

const IdraToken = () =>{

    const dispatch = useDispatch();

    const alert = useAlert();

       const { loading, error, accessToken } = useSelector((state) => state.accessToken);

    
    useEffect(() => {
        if (error) {
          alert.error(error);
          dispatch(clearErrors());
        }
        
        dispatch(getAllTokens());
      }, [dispatch, alert, error]);
      

      const columns = [
        { field: "id", headerName: "User ID", minWidth: 180, flex: 0.8 },
    
        {
          field: "actions",
          flex: 0.3,
          headerName: "Actions",
          minWidth: 150,
          type: "number",
          sortable: false,
          renderCell: (params) => {
            return (
              <Fragment>
                <Link to={`/officer/idratoken/${params.getValue(params.id, "id")}`}>
                  <EditIcon />
                </Link>
              </Fragment>
            );
          },
        },
       
        {field: "company",headerName: "company",minWidth: 200,flex:1,},
        {field: "tokenNumber",headerName: "tokenNumber",minWidth: 200,flex:1,},
    ]


    const rows = [];

    accessToken &&
    accessToken.forEach((item) => {
      rows.push({
        id: item._id,
        company: item.company,
        tokenNumber: item.tokenNumber,
         });
    });



    return(
        <Fragment>
        <div>
           <div className="productListContainer">
           <h1 id="productListHeading">Access Token</h1>
 
           <DataGrid
             rows={rows}
             columns={columns}
             pageSize={10}
             disableSelectionOnClick
             className="productListTable"
             autoHeight
           />
         </div>
       </div>
     </Fragment>
    )
}

export default IdraToken;