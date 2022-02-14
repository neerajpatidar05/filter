import { CircularProgress, TableCell, TableFooter, TableHead ,Box, Card, Typography} from '@mui/material';
import React, { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import Web3 from "web3";
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import { useTheme } from "@mui/material/styles";
import PropTypes from "prop-types";
import TableBody from "@mui/material/TableBody";
import TablePagination from "@mui/material/TablePagination";
import IconButton from "@mui/material/IconButton";
import FirstPageIcon from "@mui/icons-material/FirstPage";
import LastPageIcon from "@mui/icons-material/LastPage";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";





function TablePaginationActions(props) {
    const theme = useTheme();
    const { count, page, rowsPerPage, onPageChange } = props;
  
    const handleFirstPageButtonClick = (event) => {
      onPageChange(event, 0);
    };
  
    const handleBackButtonClick = (event) => {
      onPageChange(event, page - 1);
    };
  
    const handleNextButtonClick = (event) => {
      onPageChange(event, page + 1);
    };
  
    const handleLastPageButtonClick = (event) => {
      onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
    };
  
    return (
      <Box sx={{ flexShrink: 0, ml: 2.5 }}>
        <IconButton
          onClick={handleFirstPageButtonClick}
          disabled={page === 0}
          aria-label="first page"
        >
          {theme.direction === "rtl" ? <LastPageIcon /> : <FirstPageIcon />}
        </IconButton>
        <IconButton
          onClick={handleBackButtonClick}
          disabled={page === 0}
          aria-label="previous page"
        >
          {theme.direction === "rtl" ? (
            <KeyboardArrowRight />
          ) : (
            <KeyboardArrowLeft />
          )}
        </IconButton>
        <IconButton
          onClick={handleNextButtonClick}
          disabled={page >= Math.ceil(count / rowsPerPage) - 1}
          aria-label="next page"
        >
          {theme.direction === "rtl" ? (
            <KeyboardArrowLeft />
          ) : (
            <KeyboardArrowRight />
          )}
        </IconButton>
        <IconButton
          onClick={handleLastPageButtonClick}
          disabled={page >= Math.ceil(count / rowsPerPage) - 1}
          aria-label="last page"
        >
          {theme.direction === "rtl" ? <FirstPageIcon /> : <LastPageIcon />}
        </IconButton>
      </Box>
    );
  }
  
  TablePaginationActions.propTypes = {
    count: PropTypes.number.isRequired,
    onPageChange: PropTypes.func.isRequired,
    page: PropTypes.number.isRequired,
    rowsPerPage: PropTypes.number.isRequired,
  };


const TransactionInfo = () => {
    const web3 = new Web3();
    web3.setProvider("https://testnet.dexit.network");
    const location=useLocation();
    const navigate=useNavigate()
    const [transaction, setTransaction] = React.useState([]);
    const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
    // const transactionInfo=location.state.transactions
    useEffect(() => {
        if(location.state.transactions){
        getData(location.state.transactions)

        }
    },[])

    const getData=async(val)=>{
        console.log("getdata",typeof val) 
        let details=[]
        console.log("getdataexact", val[0])
        val.map(async(e,i)=>{
        // let getTransactionDetails =await web3.eth.getTransaction(e)
        let getTransactionRecipt =await web3.eth.getTransactionReceipt(e)
        // console.log(getTransactionDetails,"getTransactionDetails")
        console.log(getTransactionRecipt,"[[[[[[[[[[[[[[[[[[[[[[[getTransactionDetails]]]]]]]]]]]]]]]]]]]]]]]")
        // let data=gete)
        setTransaction([...details,getTransactionRecipt])

        details.push(getTransactionRecipt)
        })

        // let getTransactionDetails =await web3.eth.getTransaction(val[0])
        // console.log(getTransactionDetails,"getTransactionDetails")
        // console.log(getTransactionDetails.blockNumber,"getTransactionDetails22")
    }

if(transaction.length!=0) {

    transaction.map((e,i)=>{
        console.log(e.blockNumber,"blockNumber")
    })
}


        const rows = transaction;

        console.log(transaction,"transaction condition")
        const emptyRows =
        page > 0 ? Math.max(0, (1 + page) * rowsPerPage - transaction.length) : 0;

        const handleChangePage = (event, newPage) => {
        setPage(newPage);
        };

        const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
        };

        const sendTransactionDetails=(details)=>{
            navigate('/singletransactioninfo',{state:{details:details}})
        }


  return (
    <>
    <Card sx={{ display: 'flex', alignItems: 'center', p: 2 ,mt:2}}>
        { transaction.length!=0 ? (
        <Box sx={{ flexGrow: 1 }}>
            <Typography variant="h5">A total of {transaction.length} transactions found</Typography>
        <TableContainer component={Paper} sx={{mt:2}}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead style={{background:"whitesmoke"}}>
              <TableRow>
                <TableCell>Transaction Hash</TableCell>
                <TableCell align="left">Block</TableCell>
                <TableCell align="left">From</TableCell>
                <TableCell align="left">To</TableCell>
                <TableCell align="left">Block hash</TableCell>
              </TableRow>
            </TableHead>
            {transaction.length != 0 ? (
              <TableBody>
                {(rowsPerPage > 0
                  ? rows.slice(
                      page * rowsPerPage,
                      page * rowsPerPage + rowsPerPage
                    )
                  : transaction
                ).map((row, index) => (
                  <TableRow
                    key={index}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    onClick={()=>sendTransactionDetails(row)}
                  >
                    <TableCell component="th" scope="row">
                    {row.transactionHash}
                    </TableCell>
                    <TableCell align="right">{row.blockNumber}</TableCell>
                    <TableCell align="right">{row.from}</TableCell>
                    <TableCell align="right">{row.to ? row.to : row.contractAddress}</TableCell>
                    <TableCell align="right">{row.blockHash}</TableCell>
                  </TableRow>
                ))}
                {emptyRows > 0 && (
                  <TableRow style={{ height: 53 * emptyRows }}>
                    <TableCell colSpan={6} />
                  </TableRow>
                )}
              </TableBody>
            ) : (
              <TableRow align="center">
                <TableCell colSpan={12} align="center">
                    <Box sx={{ display: 'flex',justifyContent:"center" }}>
                        <CircularProgress />
                    </Box>
                </TableCell>
              </TableRow>
            )}{" "}
            <TableFooter>
              <TableRow>
                <TablePagination
                  rowsPerPageOptions={[5, 10, 15, { label: "All", value: -1 }]}
                  colSpan={3}
                  count={rows.length}
                  rowsPerPage={rowsPerPage}
                  page={page}
                  SelectProps={{
                    inputProps: {
                      "aria-label": "rows per page",
                    },
                    native: true,
                  }}
                  onPageChange={handleChangePage}
                  onRowsPerPageChange={handleChangeRowsPerPage}
                  ActionsComponent={TablePaginationActions}
                />
              </TableRow>
            </TableFooter>
          </Table>
        </TableContainer>
        </Box>
        ): <Typography>Transactions found</Typography>
        }
    </Card>
    </>
  )
}

export default TransactionInfo