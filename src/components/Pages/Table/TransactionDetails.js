import { Box, Card, Button,Divider, Grid, List, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, TextField } from '@mui/material'
import Web3 from "web3";
import React,{useEffect,useState} from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import './singleTransaction.css'


const TransactionDetails = () => {
    const location=useLocation();
    const getDetails=location.state.details
    const navigate=useNavigate
    const web3 = new Web3();
    web3.setProvider("https://testnet.dexit.network");
    const[getDetailsInfo,setDetailsInfo]=useState()

    console.log(getDetails,"Hello TransactionDetails");
    const handleChangeState=()=>{
        navigate('/')
    }
        useEffect(()=>{
            getInfo()
        },[getDetails])
    
    const getInfo=async()=>{
        let getTransactionDetails =await web3.eth.getTransaction(getDetails.transactionHash)
        console.log(getTransactionDetails,"getTransactionDetails////////////")
        setDetailsInfo(getTransactionDetails)
    }

  return (
    <>
    {getDetails ?
    <Card sx={{ display: 'flex', alignItems: 'center', p: 2 }}>
        <Box sx={{ flexGrow: 1 }}>
          <ArrowBackIcon onClick={()=>handleChangeState()} fontSize="large" sx={{mt:3}}/>

        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableBody>
                    <TableRow
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                        <TableCell align="left">Transaction Hash :</TableCell>
                        <TableCell align="left">{getDetails.transactionHash}</TableCell>
                    </TableRow>

                    <TableRow
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                        <TableCell align="left">Status :</TableCell>
                        <TableCell align="left">{getDetails.status==true ? (<Button variant="contained" disabled id="success">Success</Button>):(<Button variant="contained" disabled id="unsucess">Failed</Button>)}</TableCell>
                    </TableRow>


                    <TableRow
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                        <TableCell align="left"  >Block Number :</TableCell>
                        <TableCell align="left">{getDetails.blockNumber}</TableCell>
                    </TableRow>

                    <TableRow
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                        <TableCell align="left"  >From :</TableCell>
                        <TableCell align="left">{getDetails.from}</TableCell>
                    </TableRow>

                    <TableRow
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                        <TableCell align="left"  >To :</TableCell>
                        <TableCell align="left">{getDetails.to ? getDetails.to : getDetails.contractAddress}</TableCell>
                    </TableRow>

                    <TableRow
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                        <TableCell align="left"  >Value :</TableCell>
                        <TableCell align="left">{getDetails.value}</TableCell>
                    </TableRow>

                    <TableRow
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                        <TableCell align="left"  >Gas Price :</TableCell>
                        <TableCell align="left">{getDetailsInfo ? getDetailsInfo.gasPrice:"-"}</TableCell>
                    </TableRow>

                    <TableRow
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                        <TableCell align="left"  >Gas Used by Transaction :</TableCell>
                        <TableCell align="left">{getDetails.gasUsed}</TableCell>
                    </TableRow>

                    <TableRow
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                        <TableCell align="left"  >Nonce :</TableCell>
                        <TableCell align="left">{getDetailsInfo ? getDetailsInfo.nonce:"-"}</TableCell>
                    </TableRow>

                </TableBody>
          </Table>
        </TableContainer>

        </Box>
    </Card>
    :
    "not get"
    }
    </>
  )
}

export default TransactionDetails