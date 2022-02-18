import React, { useState,useEffect,Suspense } from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { Card, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Connection from "../Connections/Connection";

const columns = [
  { id: "address", label: "Address", minWidth: 50 },
  { id: "amount", label: "Amount", minWidth: 50 },
  { id: "votingpower", label: "Voting Power", minWidth: 50 },
  { id: "firstBlock", label: "First Block", minWidth: 50 },
  { id: "lastBlock", label: "Last Block", minWidth: 50 },
];



const TransactionTable = () => {
    const [dd,setDD] = useState([])
    // console.log("TXTABLE",dd);
    const [listData,setListData]=useState(false)
    let customList = []
    async function getBalanceData(){
      let list= await Connection.getValidatorsList() 
     handleValidatorListDetails(list)
    }
  

  const getAmount= async(address)=>{
    console.log(address,":address")
      let result= await Connection.stakeValidatorBalance(address)
      let amount= await result.toString()
      // console.log(result,"amount")
      return amount
      
  }

  const handleValidatorListDetails= async(list)=>{
    let contract=await Connection.getContractBalance()
    console.log(contract.toString(),"contract")
     if(list){
       console.log(typeof(list),"listsss")
      for(let i=0;i<list.length;i++){
        console.log(list[i][0],"list[i]")
        let dataget=await Connection.stakeValidatorBalance(list[i][0])
        let totalVotingPower=(contract.toString()/dataget.toString())*100
        let customObject={
          address:list[i][0],
          amount:dataget.toString(),
          votingpower:totalVotingPower,
        }
        let check=customList.find(item=>item.address===list[i][0])
        if(check==undefined){
          customList.push(customObject)
        }
        console.log(check,"check")
        // for(let j=0;j<=customList.length;j++){
        //   if(customList.length===0){
        //     customList.push(customObject)
        //   }
        //   if(customList.length>0){
        //     // console.log(customList,"customList")
        //     // console.log(customList[j].address," array list customList")
        //     // console.log(customObject.address,"object address customList")
        //     if(customList[j].address!=customObject.address){
        //     console.log(customList,"inside loopcustomList")
        //       customList.push(customObject)
        //     }
        //   }
        // }
        // customList.push(customObject)
        }
     }
    
    setDD(customList)
    setListData(!listData)// console.log(dd,"listttedd")
  }


  const listState=()=>{
    if(dd.length!=0){
      console.log("listed collection")
        return dd.map(async(item,index)=>{
            return(
                <>
                {/* {console.log(await getAmount(item[0]),"fdfdfdfd")}
                {console.log(await Connection.stakeValidatorBalance(item[0]))}
                {console.log(item[0],"item")} */}
                </>
            )
        })
    }
}

      
      useEffect(() => {
        getBalanceData();
      }, []);


    

  return (
    <>
      <div className="validator_container">
        <Card
          sx={{
            display: "flex",
            p: 2,
            flexDirection: "column",
            boxShadow: "none",
            background: "#F8FAFD",
          }}
        >
          <Typography variant="h6">
            Validators Top Leaderboard (Blocks Validated)
          </Typography>
          <Box sx={{ flexGrow: 1, mt: 2 }}>
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650, p: 2 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <Typography sx={{ p: 2, fontSize: "14px" }}>
                      {dd.length} validators found
                    </Typography>
                  </TableRow>
                  <TableRow
                    className="heading_table"
                    sx={{ background: "#F8FAFD" }}
                  >
                    {columns.map((column) => (
                      <TableCell
                        key={column.id}
                        align={column.align}
                        style={{ top: 57, minWidth: column.minWidth }}
                      >
                        {column.label}
                      </TableCell>
                    ))}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {console.log(dd, "jhjhjhj")}
                  {
                    listData &&
                     dd.map((item)=>{
                        return(
                          <>
                          <TableRow 
                          sx={{
                            "&:last-child td, &:last-child th": { border: 0 },
                          }}
                          >
                          <TableCell component="th" scope="row">
                            {item.address}
                          </TableCell>
                            
                            <TableCell>
                              {item.amount}
                            </TableCell>

                            <TableCell>
                              {item.votingpower}
                            </TableCell>
                          
                          </TableRow>
                          </>
                        )
                      })
                    
                  }
                  {/* {dd.length!=0 ? dd.map(async(val, key) => {
                    return (
                      <>
                        <TableRow
                          key={key}
                          sx={{
                            "&:last-child td, &:last-child th": { border: 0 },
                          }}
                        >
                          <TableCell component="th" scope="row">
                            {key}
                          </TableCell>
                          <TableCell component="th" scope="row">
                            {val[0]}
                          </TableCell>
                          <TableCell>{await getAmount(val[0])}</TableCell>
                        </TableRow>
                      </>
                    );
                  })
                  :"null"
                  } */}
                 
                  {/* {dd.map((val, key) => {

                            return (
                                <>
                                    {val.slice(0).reverse().map((row, i) => (
                                        <TableRow
                                            key={i}
                                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                        >
                                            <TableCell component="th" scope="row">{i}</TableCell>
                                            <TableCell component="th" scope="row">
                                                {row[0]}
                                            </TableCell>
                                            <TableCell >{row[1].toString()}</TableCell>
                                        </TableRow>
                                    ))}
                                </>)
                        })} */}
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
        </Card>
      </div>
    </>
  );
};

export default TransactionTable;
