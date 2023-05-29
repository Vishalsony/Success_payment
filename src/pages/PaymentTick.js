
import React from 'react'
import classes from './PaymentTick.module.css';
import CheckRoundedIcon from '@mui/icons-material/CheckRounded';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import Typography from '@mui/material/Typography';

const PaymentTick = (props) => {
const vishal = props.status

  return (
    <div>
    
   {vishal==='pass'? <div className={classes.first}>
      <div className={classes.second}>
      <div className={classes.success2}>
    
        <CheckRoundedIcon sx={{fontSize:"10em",color:"white"}}/>
  
        </div>
      </div>
        
        <Typography variant="h5" sx={{mt:3,color:'white'}} gutterBottom>
        Payment Successful
      </Typography>
        <Typography variant="h6" sx={{mt:3,color:'white'}} gutterBottom>
        Please wait for a second,
      </Typography>
        <Typography variant="h6" sx={{mt:1,color:'white'}} gutterBottom>
        we will redirect you on main page
      </Typography>
    </div>
    :
    <div className={classes.first}>
      <div className={classes.second}>
      <div className={classes.success2_1}>
    
        <CloseRoundedIcon sx={{fontSize:"10em",color:"white"}}/>
  
        </div>
      </div>
        
        
        <Typography variant="h6" sx={{mt:3,color:'white'}} gutterBottom>
        Unfortunetely, payment is not 
      </Typography>
        <Typography variant="h6" sx={{mt:1,color:'white'}} gutterBottom>
        successfully captured.
      </Typography>
    </div>

  }

    </div>
  )
}

export default PaymentTick;
