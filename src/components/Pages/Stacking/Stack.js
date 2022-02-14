import { Box, Button, Card, Modal, TextField, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import './Stacking.css'
import Connection from '../Connections/Connection'



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

    const [dd, setdd] = useState([])
    const handleOpenUnStack = () => setOpenUnStack(true);
    const handleCloseUnStack = () => setOpenUnStack(false);

    const handleOpenStack = () => setOpenStack(true);
    const handleCloseStack = () => setOpenStack(false);

    const handleStakeSubmit = async () => {
        // const callFunctions=async()=>{
        console.log("stakeamount", stakerAmount)
        let result = await Connection.stakeDxt({ value: stakerAmount });
        // let abc=await result.wait();
        // if(abc){
        //     let validate= await Connection.setMaxValidators()
        // console.log("validate",validate)
        // }
        console.log(result, "ksahdjsgjsj");
        // }
        setOpenStack(false)
    }

    console.log("Stack", Connection);

    const handleunStake = async () => {
        let result = await Connection.withdrawStake(stakerAmount2);
        console.log(result)
        setOpenUnStack(false)
    }

    const handleValidate = async () => {
        let result = await Connection.getValidtorsDetails();
        console.log(result,"sfghj")
        let ab=[]
        ab.push(result)
        setdd(...dd,...ab)
        console.log("dd",dd)
        setOpenUnStack(false)
    }
    // const validatorList=async()=>{
    //     let validate= await Connection.setMaxValidtors()
    //     console.log(validate,"valdate")
    // }

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
                            {/* <TextField id="outlined-basic" label="Staker Address" variant="outlined" sx={{mt:1}} value={stakerAddress} onChange={(e)=>setStakerAddress(e.target.value)}/> */}
                            <TextField id="outlined-basic" label="Staker Amount" variant="outlined" sx={{ mt: 1 }} value={stakerAmount} onChange={(e) => setStakerAmount(e.target.value)} />
                            {/* <TextField id="outlined-basic" label="Validator Name" variant="outlined" sx={{mt:1}} value={validatorName} onChange={(e)=>setValidatorName(e.target.value)}/> */}
                            {/* <TextField id="outlined-basic" label="Validator Description" variant="outlined" sx={{mt:1}} value={validatorDescription} onChange={(e)=>setValidatorDescription(e.target.value)}/> */}
                            {/* <TextField id="outlined-basic" label="Outlined" variant="outlined" sx={{mt:1}}/> */}
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
                    onClose={handleCloseStack}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style}>
                        <Typography variant="h4" sx={{ textAlign: 'center' }}>Staking</Typography>
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
                            <Button variant="outlined" onClick={handleOpenStack}>Stack</Button>
                            <Button variant="outlined" onClick={() => handleOpenUnStack()}>UnStack</Button>
                            <Button variant="outlined" onClick={() => handleValidate()}>Validators List</Button>
                        </div>
                    </Box>
                </Card>

            </div>
            <div>
                {console.log("dd",dd)}
                {dd.length?
                <table>
                    <tr>
                        <th>{dd[0]}</th>
                        <th>{dd[1].toString()}</th>
                        <th>{dd[2]}</th>
                    </tr>
                </table>:''}
            </div>
        </>
    );
};

export default Stack;
