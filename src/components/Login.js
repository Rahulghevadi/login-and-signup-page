import { TextField, Button } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom'
import PersonAddIcon from '@material-ui/icons/PersonAdd'

export default function Login() {
    return (
        
        <div className="Log-container">
            <div className="login-icon">
                <PersonAddIcon fontSize="large"/>
            </div>
            <div className="login-icon-col2">
                LogIn
            </div>
            <div className="col-1">
                <TextField id="email" type="text" variant="outlined" label="enter password" />

                {/* <input placeholder="Enter Email/Phone" /> */}
            </div>

            <div className="col-2">
                <TextField id="password" type="password" variant="outlined" label="enter password" />
                {/* <input type="password" placeholder="Enter Password" /> */}
            </div>
            <div>
                <Button variant="contained" color="primery" >Login</Button>
                {/* <button type="submit">Login</button> */}
               
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
