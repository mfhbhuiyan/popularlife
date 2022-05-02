import React, { Fragment, useEffect } from "react";
import { DataGrid } from "@material-ui/data-grid";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useAlert } from "react-alert";
import EditIcon from "@material-ui/icons/Edit";
import "./orlist.css"
import { getAllOrList, clearErrors } from "../../actions/userAction";


const Orlist = () =>{
   
 const dispatch = useDispatch();
 const alert = useAlert();
 const { error, users } = useSelector((state) => state.allOR);

useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }


    dispatch(getAllOrList());
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
            <Link to={`/operator/orlist/${params.getValue(params.id, "id")}`}>
              <EditIcon />
            </Link>
          </Fragment>
        );
      },
    },
   
    {field: "orId",headerName: "orId",minWidth: 200,flex:1,},
    {field: "status",headerName: "status",minWidth: 200,flex:1,},
    {field: "orSerialNumber",headerName: "orSerialNumber",minWidth: 150,flex: 0.5,},
    {field: "policyNumber",headerName: "policyNumber",minWidth: 150,flex: 0.5,},
    {field: "projectCode",headerName: "projectCode",minWidth: 150,flex: 0.5,},
    {field: "officeBranchCode",headerName: "officeBranchCode",minWidth: 150,flex: 0.5,},
    {field: "officeBranchName",headerName: "officeBranchName",minWidth: 150,flex: 0.5,},
    {field: "orType",headerName: "orType",minWidth: 150,flex: 0.5,},
    {field: "orDate",headerName: "orDate",minWidth: 150,flex: 0.5,},
    {field: "dueDate",headerName: "dueDate",minWidth: 150,flex: 0.5,},
    {field: "fromInstallment",headerName: "fromInstallment",minWidth: 150,flex: 0.5,},
    {field: "toInstallment",headerName: "toInstallment",minWidth: 150,flex: 0.5,},
    {field: "premiumUnitAmount",headerName: "premiumUnitAmount",minWidth: 150,flex: 0.5,},
    {field: "totalPremiumAmount",headerName: "totalPremiumAmount",minWidth: 150,flex: 0.5,},
    {field: "lateFee",headerName: "lateFee",minWidth: 150,flex: 0.5,},
    {field: "suspenseAmount",headerName: "suspenseAmount",minWidth: 150,flex: 0.5,},
    {field: "others",headerName: "others",minWidth: 150,flex: 0.5,},
    {field: "totalPayableAmount",headerName: "totalPayableAmount",minWidth: 150,flex: 0.5,},
    {field: "modeOfPayment",headerName: "modeOfPayment",minWidth: 150,flex: 0.5,},
    {field: "paymentDetail",headerName: "paymentDetail",minWidth: 150,flex: 0.5,},
    {field: "prId",headerName: "prId",minWidth: 150,flex: 0.5,},
    {field: "prDate",headerName: "prDate",minWidth: 150,flex: 0.5,},
    {field: "nextPremiumDueDate",headerName: "nextPremiumDueDate",minWidth: 150,flex: 0.5,},
    {field: "totalPremiumPaidSoFar",headerName: "totalPremiumPaidSoFar",minWidth: 150,flex: 0.5,},
    {field: "premiumMode",headerName: "premiumMode",minWidth: 150,flex: 0.5,},
    {field: "depositDate",headerName: "depositDate",minWidth: 150,flex: 0.5,},
    {field: "depositedToBank",headerName: "depositedToBank",minWidth: 150,flex: 0.5,},
    {field: "depositedToBranch",headerName: "depositedToBranch",minWidth: 150,flex: 0.5,},
    {field: "depositedToAccountNumber",headerName: "depositedToAccountNumber",minWidth: 150,flex: 0.5,},
    {field: "mfs",headerName: "mfs",minWidth: 150,flex: 0.5,},
    {field: "agentName",headerName: "agentName",minWidth: 150,flex: 0.5,},
    {field: "agentId",headerName: "agentId",minWidth: 150,flex: 0.5,},
    {field: "productCode",headerName: "productCode",minWidth: 150,flex: 0.5,},
    {field: "riskStartDate",headerName: "riskStartDate",minWidth: 150,flex: 0.5,},
    {field: "dateOfBirth",headerName: "dateOfBirth",minWidth: 150,flex: 0.5,},
    


   
  ];

  const rows = [];

  users &&
    users.forEach((item) => {
      rows.push({
        id: item._id,
        orId: item.orId,
        orSerialNumber: item.orSerialNumber,
        policyNumber: item.policyNumber,
        projectCode: item.projectCode,
        officeBranchCode: item.officeBranchCode,
        officeBranchName: item.officeBranchName,
        orType: item.orType,
        orDate: item.orDate,
        dueDate: item.dueDate,
        fromInstallment: item.fromInstallment,
        toInstallment: item.toInstallment,
        premiumUnitAmount: item.premiumUnitAmount,
        totalPremiumAmount: item.totalPremiumAmount,
        lateFee: item.lateFee,
        suspenseAmount: item.suspenseAmount,
        others: item.others,
        totalPayableAmount: item.totalPayableAmount,
        modeOfPayment: item.modeOfPayment,
        paymentDetail: item.paymentDetail,
        prId: item.prId,
        prDate: item.prDate,
        nextPremiumDueDate: item.nextPremiumDueDate,
        totalPremiumPaidSoFar: item.totalPremiumPaidSoFar,
        premiumMode: item.premiumMode,
        depositDate: item.depositDate,
        depositedToBank: item.depositedToBank,
        depositedToBranch: item.depositedToBranch,
        depositedToAccountNumber: item.depositedToAccountNumber,
        mfs: item.mfs,
        mfsAccountNumber: item.mfsAccountNumber,
        agentName: item.agentName,
        agentId: item.agentId,
        productCode: item.productCode,
        riskStartDate: item.riskStartDate,
        dateOfBirth: item.dateOfBirth,
        status: item.status,
         });
    });

    return(
<Fragment>
       <div>
              <div className="orListContainer">
          <h1 id="productListHeading">Original Receipt List</h1>

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

export default Orlist;