import React from 'react';
import './Donate.scss';
import happyhappy from'../../assests/happy.png';
import {showToastMessage} from "../../toast";
import { ToastContainer, toast } from 'react-toastify';
function Donate() {
  return (
    <div className='Donate center'>
        <div className="box center">
            <h1 className="title">Donate to the HelpingPaws and Help Animals</h1>
             <div className="img-box">
                <img src={happyhappy} alt="" />
             </div>
            <button className="btn-primary" onClick={showToastMessage}>Donate</button>

            <div className="footer">If you prefer to give by phone please call +91 9191919191.</div>      
        
           
        </div>
       
        <ToastContainer/>
    </div>
  )
}

export default Donate