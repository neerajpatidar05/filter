import React, { useEffect } from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { Card, Typography } from '@mui/material';
import { Box } from '@mui/system';
import Connection from '../Connections/Connection'


const columns = [
    {id:'id',label:'ID',minWidth:20},
    { id: 'address', label: 'Address', minWidth: 50 },
    { id: 'amount', label: 'Amount', minWidth: 50 },
    { id: 'votingpower', label: 'Voting Power', minWidth: 50 },
    { id: 'firstBlock', label: 'First Block', minWidth: 50 },
    { id: 'lastBlock', label: 'Last Block', minWidth: 50 },
  ];

const TransactionTable = ({validatorsDetails}) => {

  return (
      <>
      <div className='validator_container'>
      <Card sx={{ display: 'flex',  p: 2,flexDirection:"column",boxShadow:"none",background:"#F8FAFD" }}>
          <Typography variant="h6">Validators Top Leaderboard (Blocks Validated)</Typography>
                <Box sx={{ flexGrow: 1 ,mt:2}}>
                <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 ,p:2}} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                        <Typography sx={{p:2,fontSize:"14px"}}>{validatorsDetails.length} validators found</Typography> 
                        </TableRow>
                    <TableRow className="heading_table" sx={{background:"#F8FAFD"}}>
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
                        {console.log(validatorsDetails,"jhjhjhj")}
                        {validatorsDetails.map((val,key)=>{
                            return(
                                <>
                                    <TableRow
                                            key={key}
                                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                        >
                                            <TableCell component="th" scope="row">{key}</TableCell>
                                            <TableCell component="th" scope="row">
                                                {val[0]}
                                            </TableCell>
                                            <TableCell >{val[1].toString()}</TableCell>
                                    </TableRow>
                                </>
                            )
                        })}
                        {/* {validatorsDetails.map((val, key) => {

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