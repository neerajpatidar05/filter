import { SearchOutlined } from '@mui/icons-material'
import { Box, Button, TextField } from '@mui/material'
import React from 'react'
import './SearchBox.css'

const SearchBox = () => {
  return (
    <>
    <div className='search_box_container'>
        <TextField
          id="outlined-search"
          type="search"
          placeholder="Search by Block number/Txn Hash"
        />
        <Button
          variant="contained"
          id="btn_search"
          startIcon={<SearchOutlined fontSize="large" />}
        ></Button>
    </div>
   
    </>
  )
}

export default SearchBox