import { Box, Button, Card, Modal, TextField, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import './Stacking.css'
import Connection from '../Connections/Connection'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TransactionTable from './TransactionTable';





const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 450,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const Stack = () => {
    const [openStack, setOpenStack] = React.useState(false);
    const [openUnStack, setOpenUnStack] = React.useState(false);
    const [stakerAddress, setStakerAddress] = useState('')
    const [stakerAmount, setStakerAmount] = useState('')
    const [stakerAmount2, setStakerAmount2] = useState('')
    const [validatorName, setValidatorName] = useState('')
    const [validatorDescription, setValidatorDescription] = useState('')
    const[validatorListData,setValidatorListData]=useState()

    const [dd, setdd] = useState([])
    const handleOpenUnStack = () => setOpenUnStack(true);
    const handleCloseUnStack = () => setOpenUnStack(false);

    const handleOpenStack = () => setOpenStack(true);
    const handleCloseStack = () => setOpenStack(false);
    console.log(Connection,"connections")
    
    useEffect(() => {
        // handleValidate()
        getBalanceData()
    }, [])

    const getBalanceData=async()=>{
        let dataget=await Connection.stakeValidatorBalance("0xE0C1C57FeCaEfFf18874a1872F1FA0A30F1D1f4A")
        // let advalid=await Connection.stakeValidators()
        // console.log(advalid,"advalid")
        let contact=await Connection.getContractBalance()
        let list=await Connection.getValidatorsList()

        handleValidatorListDetails(list)
        setValidatorListData(list)
    // console.log(dataget.toString(),"connections")
    // console.log(contact.toString(),"contract")
    // console.log(list,"list")
    // console.log(result,"list")
    }

    const getAmount= async(address)=>{
        let result= await Connection.stakeValidatorBalance(address)
        let contact=await Connection.getContractBalance()
        let contractAmount=contact.toString()
        let amount=result.toString()
        const amountContract=contractAmount.slice(0,amount.length-18)
        const totalamount=amount.slice(0,amount.length-18)
        console.log(totalamount,"amount",amountContract)
        const resultData=(amountContract/totalamount)*100
        console.log(resultData,"resultData")
        return amount
        
    }

    const handleValidatorListDetails=(list)=>{
        if(list){
            return list.map(async(item,index)=>{
                return(
                    <>
                    {console.log(await getAmount(item[0]))}
                    {console.log(await Connection.stakeValidatorBalance(item[0]))}
                    {console.log(item[0],"item")}
                    </>
                )
            })
        }
    }


    const handleStakeSubmit = async () => {
        // const callFunctions=async()=>{
        // console.log("stakeamount", stakerAmount)
        let result = await Connection.stakeDxt({ value: stakerAmount });
        setOpenStack(false)
        console.log(result,"results")
        let abc = await result.wait();
        if (abc) {
            // let validate= await Connection.setMaxValidators()
            handleValidate()
            setOpenStack(false)
        }
        // handleCloseStack()
    }

    // console.log("Stack", Connection);

    const handleunStake = async () => {
        let result = await Connection.withdrawStake(stakerAmount2);
        console.log(result)
        setOpenUnStack(false)
    }

    const handleValidate = async () => {
        console.log("validator call")
        let result = await Connection.getValidtorsDetails();
        let ab = []
        ab.push(result)
        console.log("set validatores", ab)
        setdd(ab)
    }

    

    // console.log(dd,"list of va,idators")

    function createData(name, calories, fat, carbs, protein) {
        return { name, calories, fat, carbs, protein };
    }

    const rows = [
        createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
        createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
        createData('Eclair', 262, 16.0, 24, 6.0),
        createData('Cupcake', 305, 3.7, 67, 4.3),
        createData('Gingerbread', 356, 16.0, 49, 3.9),
    ];


    return (
        <>
            <div className='stack_modal'>
                <Modal
                    open={openStack}
                    onClose={handleCloseStack}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style}>
                        <Typography variant="h4" sx={{ textAlign: 'center' }}>Staking</Typography>
                        <div className='text_input'>
                            <TextField id="outlined-basic" label="Staker Address" variant="outlined" sx={{mt:1}} value={stakerAddress} onChange={(e)=>setStakerAddress(e.target.value)}/>
                            <TextField id="outlined-basic" label="Staker Amount" variant="outlined" sx={{ mt: 1 }} value={stakerAmount} onChange={(e) => setStakerAmount(e.target.value)} />
                            <TextField id="outlined-basic" label="Validator Name" variant="outlined" sx={{mt:1}} value={validatorName} onChange={(e)=>setValidatorName(e.target.value)}/>
                            <TextField id="outlined-basic" label="Validator Description" variant="outlined" sx={{mt:1}} value={validatorDescription} onChange={(e)=>setValidatorDescription(e.target.value)}/>
                            <TextField id="outlined-basic" label="Website" variant="outlined" sx={{mt:1}}/>
                        </div>

                        <div className='btn_postdetails'>
                            <Button variant="contained" color="primary" sx={{ mt: 1 }} onClick={() => handleStakeSubmit()}>Submit</Button>
                            <Button variant="contained" color="primary" sx={{ mt: 1 }} onClick={() => handleCloseStack()}>Close</Button>
                        </div>
                    </Box>
                </Modal>
            </div>

            <div className='unstack_modal'>
                <Modal
                    open={openUnStack}
                    onClose={handleCloseUnStack}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style}>
                        <Typography variant="h4" sx={{ textAlign: 'center' }}>UnStaking</Typography>
                        <div className='text_input'>
                            {/* <TextField id="outlined-basic" label="Staker Address" variant="outlined" sx={{mt:1}} value={stakerAddress} onChange={(e)=>setStakerAddress(e.target.value)}/> */}
                            <TextField id="outlined-basic" label="Staker Amount" variant="outlined" sx={{ mt: 1 }} value={stakerAmount2} onChange={(e) => setStakerAmount2(e.target.value)} />
                            {/* <TextField id="outlined-basic" label="Validator Name" variant="outlined" sx={{mt:1}} value={validatorName} onChange={(e)=>setValidatorName(e.target.value)}/> */}
                            {/* <TextField id="outlined-basic" label="Validator Description" variant="outlined" sx={{mt:1}} value={validatorDescription} onChange={(e)=>setValidatorDescription(e.target.value)}/> */}
                            {/* <TextField id="outlined-basic" label="Outlined" variant="outlined" sx={{mt:1}}/> */}
                        </div>

                        <div className='btn_postdetails'>
                            <Button variant="contained" color="primary" sx={{ mt: 1 }} onClick={() => handleunStake()}>Submit</Button>
                            <Button variant="contained" color="primary" sx={{ mt: 1 }} onClick={() => handleCloseUnStack()}>Close</Button>
                        </div>
                    </Box>
                </Modal>
            </div>


            <div className='card_container'>
                <Card sx={{ width: 600, alignItems: "center", p: 2 }}>
                    <Box sx={{ flexGrow: 1 }}>
                        <div className='btn_container'>
                            <Button variant="outlined" onClick={handleOpenStack}>Stake</Button>
                            <Button variant="outlined" onClick={() => handleOpenUnStack()}>UnStake</Button>
                            <Button variant="outlined" onClick={() => handleValidate()}>Validators List</Button>
                        </div>
                    </Box>
                </Card>

            </div>

            
        </>
    )
};

export default Stack;
