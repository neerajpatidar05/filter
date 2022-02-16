import { Button, Divider, Grid, IconButton, InputBase, Paper, Stack, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import "./Search.css";
import { SearchOutlined } from "@mui/icons-material";
import Web3 from "web3";
import { useNavigate } from "react-router-dom";
import SearchIcon from '@mui/icons-material/Search';

const Search = () => {
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
    <div className="parent_div">
    <Grid container>
    <Grid xs={12} sm={8} md={9} style={{padding:"5% 6.5%"}}>
      <Typography sx={{ color: "#D6DA3C", fontSize: "1.5rem", pb: 1 }}>
            Dexit Explorer
        </Typography>
    <Paper
      component="form"
      sx={{ p: '2px 4px', display: 'flex', alignItems: 'center' }}
    >
      
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search by Block number/Txn Hash"
        // inputProps={{ 'aria-label': 'search google maps' }}
        fullWidth
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
      />
      {/* <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
        <SearchIcon />
      </IconButton> */}
      <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
      <IconButton color="primary" sx={{ p: '10px' }} aria-label="directions">
        <SearchIcon  onClick={() => getBlockDetails()}/>
      </IconButton>
    </Paper>
    </Grid>
    </Grid>
    </div>
    </>
    // <div className="parent_div">
    //   <div className="input_div">
    //     <Typography sx={{ color: "#D6DA3C", fontSize: "1.5rem", pb: 1 }}>
    //       Dexit Explorer
    //     </Typography>

    //     <TextField
    //       id="outlined-search"
    //       type="search"
    //       placeholder="Search by Block number/Txn Hash"
    //       value={searchInput}
    //       onChange={(e) => setSearchInput(e.target.value)}
    //     />
    //     <Button
    //       variant="contained"
    //       id="btn_search"
    //       startIcon={<SearchOutlined fontSize="medium" />}
    //       onClick={() => getBlockDetails()}
    //     ></Button>
    //   </div>
    // </div>
    
  );
};

export default Search;
