import { Box, Paper, Typography } from "@mui/material";
import React from "react";
import Divider from "@mui/material/Divider";

const DetailsBox = () => {
  return (
    <>
      <Paper
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
      </Paper>
    </>
  );
};

export default DetailsBox;
