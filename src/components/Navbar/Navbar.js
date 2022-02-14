import React,{useState} from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Grid} from '@mui/material';
import {useNavigate,Link} from 'react-router-dom';
import './Navbar.css'
import { ethers } from 'ethers'


export default function Navbar() {
  const navigate = useNavigate();

  const handleBlock = () => {
    navigate('/blocks');
  }
  const handleWallet = () => {
    navigate('/wallet');
  }


  const [errorMessage, setErrorMessage] = useState(null);
	const [defaultAccount, setDefaultAccount] = useState(null);
	const [userBalance, setUserBalance] = useState(null);
	const [connButtonText, setConnButtonText] = useState('Connect Wallet');

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

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
            <Grid container>
                <Grid xs={5}>
                    <div className='navbar_heading'>
                      <Link to='/blocks'>
                    <Typography variant="h6">
                      Blocks
                    </Typography>
                    </Link>

                    <Link to='/transactions'>
                      <Typography variant="h6">
                          Transactions
                      </Typography>
                    </Link>

                    <Link to='/staking'>
                    <Typography variant="h6">
                        Staking
                    </Typography>
                    </Link>
                    </div>
                </Grid>
                <Grid xs={7} className='btn_section'>
                    <Button  onClick={connectWalletHandler} variant='contained' color='warning'>Connect</Button>
                </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
