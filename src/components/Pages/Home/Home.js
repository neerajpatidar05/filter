import { Grid } from '@mui/material'
import React from 'react'
import Blocks from '../Table/Blocks'
import Transactions from '../Table/Transactions'

const Home = () => {
  return (
    <>
        <Grid container>
            <Grid md={6} sm={12} sx={{p:2}}>
                <Blocks/>
            </Grid>
            <Grid md={6} sm={12} sx={{p:2}}>
                <Transactions/>
            </Grid>
        </Grid>
    </>
  )
}

export default Home