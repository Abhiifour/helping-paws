import React from 'react';
import './Corousel.scss';
import {useNavigate} from 'react-router-dom'

function Corousel() {
  const navigate = useNavigate();
  return (
    <div className='Corousel'>
     <div className="content-box center">
        <h1 className="title">Re-Home and Adopt a Pet </h1>
        <p className="text">Every Pet Deserves a Good Home. #LovePaws</p>
        <button className="btn-primary" onClick={()=>navigate('/Adopt')}>Adopt a pet</button>    
     </div>

    </div>
  )
}

export default Corousel