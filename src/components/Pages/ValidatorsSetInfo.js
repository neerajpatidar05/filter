import React, { useState, useEffect } from "react";
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

const columns = [
  { id: "age", label: "Age", minWidth: 20 },
  { id: "block", label: "Block", minWidth: 20 },
  { id: "validators", label: "Validators", minWidth: 50 },
  { id: "totalVotingPower", label: "Total Voting Power", minWidth: 50 },
  { id: "totalJailed", label: "Total Jailed", minWidth: 50 },
  { id: "totalIncoming", label: "Total Incoming", minWidth: 50 },
];

const ValidatorsSetInfo = () => {
  const [dd, setDD] = useState([]);
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
          <Typography variant="h6">Validators Set Info</Typography>
          <Box sx={{ flexGrow: 1, mt: 2 }}>
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650, p: 2 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <Typography sx={{ p: 2, fontSize: "14px" }}>
                      Showing 25 of total 772223 snapshots (taken at per minute
                      intervals)
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
                  {dd.map((val, key) => {
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
                          <TableCell>{val[1].toString()}</TableCell>
                        </TableRow>
                      </>
                    );
                  })}
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

export default ValidatorsSetInfo;
