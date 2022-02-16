import React from 'react';
import Navbar from './components/Navbar/Navbar.js';
import Blocks from './components/Pages/Table/Blocks.js';
import WalletCard from './components/Pages/Wallet/WalletCard.js';
import { Route, Routes, BrowserRouter as Router,useLocation } from "react-router-dom";
import Transactions from './components/Pages/Table/Transactions.js';
import { Typography } from '@mui/material';
import Stack from './components/Pages/Stacking/Stack.js';
import Home from './components/Pages/Home/Home.js';
import TransactionInfo from './components/Pages/Table/TransactionInfo.js';
import SingleTransactionDetails from './components/Pages/Table/SingleTransactionDetails.js';
import NewTable from './components/Pages/Table/NewTable.js';
import TransactionDetails from './components/Pages/Table/TransactionDetails.js';
import Header2 from './components/Header/Header2.js';
import SearchBlock from './components/Pages/SearchData/SearchBlock.js';
import SearchHash from './components/Pages/SearchData/SearchHash.js';
import AllBlock from './components/Pages/Blocks/AllBlock.js';
import BlockNumberDetails from './components/Pages/Blocks/BlockNumberDetails.js';
import AllTransactions from './components/Pages/AllTransactions/AllTransactions.js';

// import './App.css';


function App() {
	
return (
	<div className="App">
		<Router>

		<Header2/>

			<Routes>
				<Route path="/" element={<>
				<Home/>
				</>} />

				<Route path="/blocks" element={<>
				<Blocks/>
				</>} 
				/>

				<Route path="/transactions" element={<>
					<Transactions/>
				</>} 
				/>


				<Route path="/staking" element={<>
					<Stack/>
				</>} 
				/>

				<Route path="/transactionDetails" element={<>
					<TransactionInfo/>
				</>} 
				/>


				<Route path="/wallet" element={<>
				<WalletCard/>
				</>} />

				<Route path="/singledetails" element={<>
				<NewTable/>
				</>} />

				<Route path="/singletransactioninfo" element={<>
				<TransactionDetails/>
				</>} />

				<Route path="/searchdetails" element={<>
				<SearchBlock/>
				</>} />

				<Route path="/searchhash" element={<>
				<SearchHash/>
				</>} />


				<Route path="/allblocks" element={<>
				<AllBlock/>
				</>} />

				<Route path="/alltransactions" element={<>
				<AllTransactions/>
				</>} />

				<Route path="/blockdetails" element={<>
				<BlockNumberDetails/>
				</>} />


			</Routes>
		</Router>

		{/* <NewNavbarTwo/> */}

	</div>
);
}

export default App;
