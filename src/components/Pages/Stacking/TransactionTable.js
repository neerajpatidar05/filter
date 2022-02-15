import React, { useEffect } from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { Card } from '@mui/material';
import { Box } from '@mui/system';
import Connection from '../Connections/Connection'


const columns = [
    {id:'id',label:'ID',minWidth:20},
    { id: 'address', label: 'Address', minWidth: 100 },
    { id: 'amount', label: 'Amount', minWidth: 100 },
    { id: 'votingpower', label: 'Voting Power', minWidth: 100 },
    { id: 'firstBlock', label: 'First Block', minWidth: 100 },
    { id: 'lastBlock', label: 'Last Block', minWidth: 100 },
  ];

const TransactionTable = ({validatorsDetails}) => {

  return (
      <>
      <div className='validator_container'>
      <Card sx={{ display: 'flex', alignItems: 'center', p: 2 }}>
                <Box sx={{ flexGrow: 1 }}>
                <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                    <TableRow className="heading_table">
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