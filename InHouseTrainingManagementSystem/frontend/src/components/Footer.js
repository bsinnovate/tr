import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="main-footer">
      <div className="container">
        <div className="row">
        
         
        
        <div className="row">
          <p className="col-sm">
            &copy;{new Date().getFullYear()} InHouseTrainingManagementSystem | All rights reserved |
            Terms Of Service | Privacy
          </p>
        </div>
      </div>
      </div>
      </div>
   
  );
}

export default Footer;