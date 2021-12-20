import { Button, TextField } from '@material-ui/core';
import React from 'react'
import { Link } from 'react-router-dom'
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import ShowHidden from './ShowHidden';


function Signup  () {
    return (
        <div className="Sign-container">
            <div className="signup-colunms">
                <div className="signup-icon">
                    <PersonAddIcon fontSize="large" />
                </div>
                <div className="signup-icon-col2">
                    SignUp
                </div>
                <div className='col-3'>
                    <TextField id="name" type="text" variant="outlined" label="Enter Name" />
                </div>
                <div className='col-4'>
                     <TextField id="mobile" type="numaric" variant="outlined" label="Enter Mobile Number" />
                 </div>
                <div className='col-5'>
                     <TextField id="email" type="text" variant="outlined" label="Enter Email Address" />
                 </div>
                <div className='col-6'>
                    <ShowHidden/>
                     {/* <TextField id="password" type="password" variant="outlined" label="Enter Password" /> */}
                </div>
                <div className="signup-button">
                    <Button  variant="contained" color="primary">Signup</Button>
                </div>
            </div>
            
            
            <div className="col-7">
                <Link  to="/">
                    Go To Login.
                </Link>
            </div>
        </div>
    )
}

export default Signup;
