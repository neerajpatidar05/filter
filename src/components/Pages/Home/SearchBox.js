import { SearchOutlined } from '@mui/icons-material'
import { Box, Button, Grid, TextField } from '@mui/material'
import React,{useState} from 'react'
import './SearchBox.css'
import Web3 from "web3";
import { useNavigate } from "react-router-dom";


const SearchBox = () => {
  const [searchInput, setSearchInput] = useState("");
  const web3 = new Web3();
  web3.setProvider("https://testnet.dexit.network");
  const navigate = useNavigate();

  const getBlockDetails = async () => {
    if (searchInput.length <= 10) {
      let blockDetails = await web3.eth.getBlock(searchInput);
      console.log(blockDetails, "blockDetails");
      navigate("/searchdetails", { state: { blockDetails: blockDetails } });
    } else if (searchInput.length > 10) {
      navigate("/searchhash", { state: { details: searchInput } });
    }
  };
  return (
    <>
    <div className='search_box_container'>
      <Grid container>
        <Grid xs={8} md={10}>
        <TextField
        fullWidth
          id="outlined-search"
          type="search"
          placeholder="Search by Block number/Txn Hash"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
        </Grid>
        <Grid xs={4} md={2}>
        <Button
          variant="contained"
          id="btn_search"
          startIcon={<SearchOutlined fontSize="large" />}
          onClick={() => getBlockDetails()}
        ></Button>
        </Grid>
      </Grid>
    </div>
   
    </>
  )
}

export default SearchBox