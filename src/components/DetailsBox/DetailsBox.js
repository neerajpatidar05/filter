import { Box, Paper, Typography, Grid, Card } from "@mui/material";
import React from "react";
import Divider from "@mui/material/Divider";
import Web3 from "web3";

const DetailsBox = () => {
  const[currentBlockNumber,setCurrentBlock]=React.useState()
  const[callData,setCallData]=React.useState(true)
  const web3 = new Web3();
  web3.setProvider("https://testnet.dexit.network");

  const getLatestBlockNumber=async()=>{
    let currentBlock = await web3.eth.getBlockNumber();
    console.log(currentBlock,"block number");
    setCurrentBlock(currentBlock-1);
    setCallData(!callData)
  }

 
  React.useEffect(() => {
    getLatestBlockNumber()
  }, []);
  return (
    <>
      {/* <Paper
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          backgroundColor: "white",
          // height: "25vh",
          color: "#12161C",
          width: "90%",
          ml: 12,
          border: "1px solid white",
          borderRadius: 5,
          position: "absolute",
          top: "35%",
        }}
      >
        <Box sx={{ p: 5, width: "30%" }}>
          <Typography sx={{ color: "gray" }}>BNB Price</Typography>
          <Typography sx={{ mb: 2 }}>
            $424.62 @ 0.009737 BTC (+8.34%)
          </Typography>
          <Divider />
          <Typography sx={{ color: "gray", mt: 2 }}>
            BNB MARKET CAP ON BSC
          </Typography>
          <Typography sx={{ mb: 2 }}>
            $9,542,097,990.00 (22,472,088 BNB)
          </Typography>
        </Box>
        <Divider
          sx={{ my: 0.5 }}
          orientation="vertical"
          flexItem
          variant="middle"
        />
        <Box sx={{ p: 5, width: "30%" }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              mb: 2,
            }}
          >
            <Box>
              <Typography sx={{ color: "gray" }}>LATEST BLOCK</Typography>
              <Typography>15269156 (3.0s)</Typography>
            </Box>
            <Box>
              <Typography sx={{ color: "gray", mt: 2, ml: 4 }}>
                TRANSACTIONS
              </Typography>
              <Typography>2,490.91 M (62.6 TPS)</Typography>
            </Box>
          </Box>

          <Divider />
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              mt: 2,
            }}
          >
            <Box>
              <Typography sx={{ color: "gray", mt: 2 }}>
                ACTIVE VALIDATOR
              </Typography>
              <Typography>21</Typography>
            </Box>
            <Box>
              <Typography sx={{ color: "gray", mt: 2, ml: 4 }}>
                VOTING POWER
              </Typography>
              <Typography>17,721,506.04 BNB</Typography>
            </Box>
          </Box>
        </Box>
        <Divider
          sx={{ my: 0.5 }}
          orientation="vertical"
          flexItem
          variant="middle"
        />
        <Box sx={{ p: 5, width: "30%" }}>
          BSC TRANSACTION HISTORY LAST 14 DAYS
        </Box>
          </Paper>*/}

      <Card
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          backgroundColor: "white",
          // height: "25vh",
          color: "#12161C",
          width: "90%",
          border: "1px solid white",
          borderRadius: 5,
          position: "absolute",
          top: "35%",
          ml: 5,
          mr: 5,
        }}
      >
        <Grid container>
          <Grid xs={12} md={4} sx={{ p: 4 }}>
            <Typography sx={{ color: "gray" }}>BNB Price</Typography>
            <Typography sx={{ mb: 2 }}>
              $424.62 @ 0.009737 BTC (+8.34%)
            </Typography>
            <Divider />
            <Typography sx={{ color: "gray",mt:2 }}>
              BNB MARKET CAP ON BSC
            </Typography>
            <Typography sx={{ mb: 2 }}>$9,542,0</Typography>
          </Grid>

          <Divider
            sx={{ my: 0.5 }}
            orientation="vertical"
            flexItem
            variant="middle"
          />

          <Grid xs={12} md={4} sx={{ p: 4 }}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                mb: 2,
              }}
            >
              <Box>
                <Typography sx={{ color: "gray" }}>LATEST BLOCK</Typography>
                <Typography>{currentBlockNumber ? currentBlockNumber :"-"}</Typography>
              </Box>
              <Box>
                <Typography sx={{ color: "gray", ml: 4 }}>
                  TRANSACTIONS
                </Typography>
                <Typography>2,490.91 M (62.6 TPS)</Typography>
              </Box>
            </Box>

            <Divider />
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                mt: 2,
              }}
            >
              <Box>
                <Typography sx={{ color: "gray" }}>
                  ACTIVE VALIDATOR
                </Typography>
                <Typography>21</Typography>
              </Box>
              <Box>
                <Typography sx={{ color: "gray", ml: 4 }}>
                  VOTING POWER
                </Typography>
                <Typography>17,721,506.04 BNB</Typography>
              </Box>
            </Box>
          </Grid>

          <Divider
            sx={{ my: 0.5 }}
            orientation="vertical"
            flexItem
            variant="middle"
          />

          <Grid xs={12} md={4} sx={{ p: 2 }}>
           
          </Grid>
        </Grid>
      </Card>
    </>
  );
};

export default DetailsBox;
