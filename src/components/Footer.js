import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
library.add(fab);

export default function Footer() {
    return (
       <div className="main-footer">
            <div className="footer-container">
                <h2> About Us</h2>

                <div className="footer-col1">
                    <h2>
                        Contact Us
                    </h2>
                    <div className="footer-col2">
                        <FontAwesomeIcon icon={["fab", "facebook-f"]} size="2x" color="blue" />
                        <FontAwesomeIcon icon={["fab", "instagram"]} size="2x" color="red" />
                         <FontAwesomeIcon icon={["fab", "twitter"]} size="2x" color="blue" />
                    </div>
                </div>
                <div>
                  <h2>Help</h2>
                </div>

            </div>
           
        </div>

    ); 
}
