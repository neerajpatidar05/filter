import { SearchOutlined } from '@mui/icons-material'
import { Box, Button, TextField } from '@mui/material'
import React from 'react'

const SearchBox = () => {
  return (
    <>
    <Box>
    <TextField
    id="outlined-search"
    type="search"
    placeholder="Search by Address/Txn Hash"
    // value={searchInput}
    // onChange={(e) => setSearchInput(e.target.value)}
    sx={{ml:"70%",mr:1,width:"25%"}}
  />
  <Button
    variant="contained"
    id="btn_search"
    startIcon={<SearchOutlined fontSize="medium" />}
    // onClick={() => getBlockDetails()}
  ></Button>
    </Box>
   
    </>
  )
}

export default SearchBox