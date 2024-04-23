import React from "react";
import './Footer.scss';
import newDog from '../../assests/pet-house.png';
import {AiFillFacebook ,AiOutlineInstagram ,AiFillTwitterCircle,AiFillYoutube} from 'react-icons/ai'
import gif from '../../assests/beagle.gif'
import { useNavigate } from "react-router-dom";
import {showToastMessage} from "../../toast";
import { ToastContainer, toast } from 'react-toastify';
import { BsFillHeartFill } from "react-icons/bs";

function Footer() {
  const navigate = useNavigate();
  return (
    <div className="Footer">
        <div className="subFooter">
      <div className="content center">
        <div className="left-section ">
          <h3 className="title">TheHelpingPaws</h3>
          <ul className="center">
            <li onClick={()=>navigate('/Blogs')}>Blog</li>
            <li  onClick={()=> navigate('/about')}>About Us</li>
            <li  onClick={showToastMessage}>Support</li>
            <li  onClick={showToastMessage}>Reviews</li>
            <li onClick={()=>navigate('/Rescue')}>Report Animal Abuse</li>
            <li onClick={()=> navigate('/Donate')}>Join Us</li>
          </ul>
        </div>
        <div className="middle-section ">
          <h3 className="title">Services</h3>
          <ul className="center">
            <li onClick={()=>navigate('/Disease')}>Dog Health</li>
            <li onClick={()=>navigate('/consult')}>Consult a vet</li>
            <li  onClick={showToastMessage}>Pet Relocation</li>
          </ul>
          <h3 className="title">Shelter/Rescue</h3>
          <ul className="center">
            <li onClick={()=>navigate('/signup')}>Signup</li>
            <li onClick={()=>navigate('/login')}>Login</li>
          </ul>
        </div>
        <div className="right-section ">
          <div className="newsletter-box">
           <div className="img-box">
           <img src={newDog} alt="dog" />
           </div>
            <h3 className="title">Signup For Our Newsletter</h3>
            <div className="input">
                <input type="email" placeholder="  Enter your email" />
                <button  onClick={showToastMessage}>send</button>
            </div>
          </div>
          <div className="social-media"  onClick={showToastMessage}>
            <AiFillFacebook className="icon"/>
            <AiOutlineInstagram className="icon"/>
            <AiFillYoutube className="icon"/>
            <AiFillTwitterCircle className="icon"/>
          </div>
        </div>
      </div>

      
    </div>
    <div className="banner ">
        
        <h1 className="adopt" onClick={()=>navigate('/Adopt')}>Crafted with <span><BsFillHeartFill/></span> by Saumya.</h1>

      </div>
      <ToastContainer/>
    </div>
  );
}

export default Footer;
