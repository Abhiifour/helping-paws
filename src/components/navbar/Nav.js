import React, { useEffect, useState } from "react";
import "./Nav.scss";
import dogImg from "../../assests/dog-seating.png";
import { BsFillHeartFill } from "react-icons/bs";
import { IoIosArrowDown } from "react-icons/io";
import Dropdown from "../DropDown/Dropdown";
import { RiArrowUpSLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import { showToastMessage } from "../../toast";
import { ToastContainer } from "react-toastify";
import { GiHamburgerMenu } from "react-icons/gi";
import { SiDatadog } from "react-icons/si";
import { RxCross1 } from "react-icons/rx";
import { useRecoilValue } from "recoil";
import { userState } from "../../Atom";
import { toast } from "react-hot-toast";

function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const [isAuth, setIsAuth] = useState(false);
  const navigate = useNavigate();
  const [side, setSide] = useState(false);
  const user = useRecoilValue(userState);

  const rehome = () => {
    if (user) {
      navigate("/add");
    } else {
      toast("Please Login To Continue", {});
    }
  };

  const createBlogs = () => {
    if (user) {
      navigate("/createblog");
    } else {
      toast("Please Login To Continue", {});
    }
  };

  return (
    <div className="Nav-Bar">
      <div className="Nav container center">
        <div className="left-part center ">
          <div className="logo center" onClick={() => navigate("/")}>
            <div className="img-box">
              <img src={dogImg} alt="logo" />
            </div>
            <h1 className="name">Helping Paws</h1>
          </div>
          <div className="dropdown center" onClick={() => setIsOpen(!isOpen)}>
            <h3>ALL ABOUT PETS</h3>
            {!isOpen && <IoIosArrowDown className="arrow" />}
            {isOpen && <RiArrowUpSLine className="arrow" />}
          </div>
        </div>
        <div className="right-part" onClick={() => setIsAuth(!isAuth)}>
          <BsFillHeartFill className="icon" />
        </div>
      </div>
      {isOpen && (
        <div className="second-nav ">
          <div className="container center" onClick={() => setIsOpen(false)}>
            <Dropdown />
          </div>
        </div>
      )}
      {isAuth && (
        <div className="auth center">
          {user ? (
            <div></div>
          ) : (
            <div className="flex-box">
              <h2 className="login" onClick={() => navigate("/login")}>
                Login
              </h2>
            </div>
          )}
          <h2 className="donate" onClick={rehome}>
            Rehome
          </h2>
          <h2 className="donate" onClick={createBlogs}>
            Write Blog
          </h2>
          <h2 className="donate" onClick={() => navigate("/donate")}>
            Donate
          </h2>
        </div>
      )}
      <div className="ham-icon" onClick={() => setSide(!side)}>
        {!side && <GiHamburgerMenu className="svg" />}
        {side && <RxCross1 className="svg2" />}
      </div>
      {side && (
        <div className="sidebar center">
          <ul>
            <li
              onClick={() => {
                navigate("/Adopt");
                setSide(false);
              }}
            >
              Adopt
            </li>
            <li
              onClick={() => {
                navigate("/Rescue");
                setSide(false);
              }}
            >
              Rescue
            </li>
            <li
              onClick={() => {
                navigate("/Disease");
                setSide(false);
              }}
            >
              Disease
            </li>
            <li
              onClick={() => {
                navigate("/Blogs");
                setSide(false);
              }}
            >
              Blogs
            </li>
            <li
              onClick={() => {
                navigate("/donate");
                setSide(false);
              }}
            >
              Donate
            </li>
            <li
              onClick={() => {
                navigate("/signup");
                setSide(false);
              }}
            >
              Signup
            </li>
            <li
              onClick={() => {
                navigate("/login");
                setSide(false);
              }}
            >
              Login
            </li>
          </ul>
          <SiDatadog className="siData" />
        </div>
      )}
      <ToastContainer />
    </div>
  );
}

export default Nav;
