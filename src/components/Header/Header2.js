import React,{useState} from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import Blockchains from "./Blockchains";
import Validators from "./Validators";
import { Button, CardMedia } from "@mui/material";
import logo from '../../Image/logo512.png'
import { ethers } from 'ethers'
import {useNavigate} from 'react-router-dom'




export default function Header2() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const navigate = useNavigate();
  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
  const [errorMessage, setErrorMessage] = useState(null);
	const [defaultAccount, setDefaultAccount] = useState(null);
	const [userBalance, setUserBalance] = useState(null);
	const [connButtonText, setConnButtonText] = useState('Connect Wallet');
  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };


  const connectWalletHandler = () => {
		if (window.ethereum && window.ethereum.isMetaMask) {
			console.log('MetaMask Here!');

			window.ethereum.request({ method: 'eth_requestAccounts'})
			.then(result => {
				accountChangedHandler(result[0]);
				setConnButtonText('Wallet Connected');
				getAccountBalance(result[0]);
			})
			.catch(error => {
				setErrorMessage(error.message);

			});

		} else {
				console.log('Need to install MetaMask');
				setErrorMessage('Please install MetaMask browser extension to interact');
			}
		}

		// update account, will cause component re-render
		const accountChangedHandler = (newAccount) => {
			setDefaultAccount(newAccount);
			getAccountBalance(newAccount.toString());
		}

		const getAccountBalance = (account) => {
			window.ethereum.request({method: 'eth_getBalance', params: [account, 'latest']})
			.then(balance => {
				setUserBalance(ethers.utils.formatEther(balance));
			})
			.catch(error => {
				setErrorMessage(error.message);
			});
		};

		const chainChangedHandler = () => {
			// reload the page to avoid any errors with chain change mid use of application
			window.location.reload();
		}


		// listen for account changes
		window.ethereum.on('accountsChanged', accountChangedHandler);

		window.ethereum.on('chainChanged', chainChangedHandler);

    const handleRoute=()=>{
      navigate('/staking')
    }

    const handleHome=()=>{
      navigate('/')
    }

    const handleBlock=()=>{
      navigate('/blocks')
    }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{background:"white",color:"#7A93B4",boxShadow:"none"}}>
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: "none", sm: "block",cursor:"pointer" } }}
            onClick={()=>handleHome()}
          >
            <CardMedia
             component="img"
             height="30"
              image={logo}
            />
          </Typography>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: "none", md: "flex",alignItems:"center" } }}>
            <IconButton
              size="small"
              aria-label="show 4 new mails"
              color="inherit"
              onClick={()=>handleHome()}
            >
              <span style={{fontSize:"13px",textTransform:"uppercase"}}>Home</span>
            </IconButton>

            <IconButton
              size="small"
              aria-label="show 4 new mails"
              color="inherit"
              onClick={()=>handleBlock()}
            >
              <span style={{fontSize:"13px",textTransform:"uppercase",marginLeft:"12px"}}>Blocks</span>
            </IconButton>

            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
            >
              <Blockchains />
            </IconButton>
            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
              onClick={()=>handleRoute()}
            >
              <Validators />
            </IconButton>
          </Box>
          <Button id="demo-customized-button" color="error" variant="contained" onClick={connectWalletHandler}>Connect</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
