import React from 'react';
import Navbar from './components/Navbar/Navbar.js';
import Blocks from './components/Pages/Table/Blocks.js';
import WalletCard from './components/Pages/Wallet/WalletCard.js';
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Transactions from './components/Pages/Table/Transactions.js';
import { Typography } from '@mui/material';
import Stack from './components/Pages/Stacking/Stack.js';
import Home from './components/Pages/Home/Home.js';
import TransactionInfo from './components/Pages/Table/TransactionInfo.js';
import SingleTransactionDetails from './components/Pages/Table/SingleTransactionDetails.js';
import NewTable from './components/Pages/Table/NewTable.js';
import TransactionDetails from './components/Pages/Table/TransactionDetails.js';
import Header2 from './components/Header/Header2.js';

// import './App.css';


function App() {
	// bcd();
	// async function bcd() {
	// 	let neww=await abc.getValidators1();
	// 	console.log(neww,"Hello bcd");
	// }
return (
	<div className="App">
		<Router>
			<Routes>
				<Route path="/" element={<><Header2/>
				<Home/>
				</>} />

				<Route path="/blocks" element={<><Navbar/>
				<Blocks/>
				</>} 
				/>

				<Route path="/transactions" element={<><Navbar/>
					<Transactions/>
				</>} 
				/>


				<Route path="/staking" element={<><Navbar/>
					<Stack/>
				</>} 
				/>

				<Route path="/transactionDetails" element={<><Navbar/>
					<TransactionInfo/>
				</>} 
				/>


				<Route path="/wallet" element={<><Navbar/>
				<WalletCard/>
				</>} />

				<Route path="/singledetails" element={<><Navbar/>
				<NewTable/>
				</>} />

				<Route path="/singletransactioninfo" element={<><Navbar/>
				<TransactionDetails/>
				</>} />


			</Routes>
		</Router>

		{/* <NewNavbarTwo/> */}

	</div>
);
}

export default App;
