import React, { useRef } from "react";
import "./Dropdown.scss";
import { useNavigate } from "react-router-dom";
import { showToastMessage } from "../../toast";
import { ToastContainer, toast } from "react-toastify";

function Dropdown() {
  const ref = useRef(null);
  const navigate = useNavigate();
  const dataSet = [
    {
      name: "Adopt",
      list:[]
    },
    {
      name: "Rescue",
      list: [],
    },
    {
      name: "Disease",
      list: [
        "Parvovirus",
        "Canine distemper",
        "Lyme disease",
        "Rabies",
        "Heartworm disease",
        "Canine influenza",
      ],
    },
    {
      name: "Blogs",
      list: [],
    },
    {
      name: "Donate",
      list: ["By joining", "By Supporting", "By Rescuing"],
    },
  ];
  function handleRoute(e) {
    console.log(e);
    navigate(`/${e.target.innerText}`);
  }

  return (
    <div className="Dropdown center">
      {dataSet.map((data) => (
        <div className="dropdown center" key={data.name}>
          <div className="title" ref={ref} onClick={(e) => handleRoute(e)}>
            {data.name}
          </div>
          <div className="content">
            <ul onClick={showToastMessage}>
              {data.list.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
      <ToastContainer />
    </div>
  );
}

export default Dropdown;
