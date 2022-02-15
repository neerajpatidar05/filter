import { Grid } from "@mui/material";
import React from "react";
import Blocks from "../Table/Blocks";
import Transactions from "../Table/Transactions";
import Search from "./Search";
import DetailsBox from "../../DetailsBox/DetailsBox";
import Footer from "../../Footer/Footer";

const Home = () => {
  return (
    <>
      <Grid container>
        <Grid md={12} xs={12}>
          <Search />
        </Grid>
      </Grid>
      <DetailsBox />
      <Grid container>
        <Grid md={6} sm={12} sx={{ p: 2, mt: 25 }}>
          <Blocks />
        </Grid>
        <Grid md={6} sm={12} sx={{ p: 2, mt: 25 }}>
          <Transactions />
        </Grid>
      </Grid>
      <Footer />
    </>
  );
};

export default Home;
