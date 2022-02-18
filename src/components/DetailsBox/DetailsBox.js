import { Box, Paper, Typography, Grid, Card } from "@mui/material";
import React,{useState} from "react";
import Divider from "@mui/material/Divider";
import Web3 from "web3";
import Connection from "../Pages/Connections/Connection";

const DetailsBox = () => {
  const[currentBlockNumber,setCurrentBlock]=React.useState()
  const[callData,setCallData]=React.useState(true)
  const [dd,setDD] = useState([])
  const [listData,setListData]=useState(false)
  let customList = []

  const web3 = new Web3();
  web3.setProvider("https://testnet.dexit.network");

  const getLatestBlockNumber=async()=>{
    let currentBlock = await web3.eth.getBlockNumber();

    console.log(currentBlock,"block number");
    setCurrentBlock(currentBlock-1);
    setCallData(!callData)
  }

  async function getBalanceData(){
    let list= await Connection.getValidatorsList() 
   handleValidatorListDetails(list)
  }

  const handleValidatorListDetails= async(list)=>{
    let contract=await Connection.getContractBalance()
    console.log(contract.toString(),"contract")
     if(list){
       console.log(typeof(list),"listsss")
      for(let i=0;i<list.length;i++){
        console.log(list[i][0],"list[i]")
        let dataget=await Connection.stakeValidatorBalance(list[i][0])
        let totalVotingPower=(contract.toString()/dataget.toString())*100
        let customObject={
          address:list[i][0],
          amount:dataget.toString(),
          votingpower:totalVotingPower,
        }
        let check=customList.find(item=>item.address===list[i][0])
        if(check==undefined){
          customList.push(customObject)
        }
        console.log(check,"check")
        }
     }
    
    setDD(customList)
    setListData(!listData)
  }


  React.useEffect(() => {
    getLatestBlockNumber()
    getBalanceData();
  }, []);
  return (
    <>
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
          top: "40%",
          ml: 5,
          mr: 5,
        }}
      >
        <Grid container>
          <Grid xs={12} md={4} sx={{ p: 4 }}>
            <Typography sx={{ color: "gray" }}>DXT Price</Typography>
            <Typography sx={{ mb: 2 }}>
              $424.62 @ 0.009737 BTC (+8.34%)
            </Typography>
            <Divider />
            <Typography sx={{ color: "gray",mt:2 }}>
              DXT MARKET CAP
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
                <Typography>{dd ? dd.length : "-"}</Typography>
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
