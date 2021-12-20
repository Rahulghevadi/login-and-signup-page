import { TextField, Button } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom'
import LockOpenIcon from '@material-ui/icons/LockOpen';
import ShowHidden from './ShowHidden';

export default function Login() {
    return (
        
        <div className="Log-container">
            <div className="login-icon">
                <LockOpenIcon fontSize="large"/>
            </div>
            <div className="login-icon-col2">
                LogIn
            </div>
            <div className="col-1">
                <TextField id="email" type="text" variant="outlined" label="Enter Email/Phone" />
            </div>
            <div className="col-2">
                <ShowHidden/>
                {/* <TextField id="password" type="password" variant="outlined" label="Enter password" /> */}
            </div>
            <div>
                <Button variant="contained" color="primary" >Login</Button>
            </div>
            <div>
                <p>New To VEGES?
                    <Link to="/signup">
                        Create Account.
                    </Link>
                </p>
                
            </div>
            
        </div>

    );

}
