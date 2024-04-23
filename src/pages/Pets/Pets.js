import React, { useEffect, useState } from "react";
import "./Pets.scss";
import dog from "../../assests/dog1.jpg";
import { useRecoilValue } from "recoil";
import { petState } from "../../Atom";
import { toast } from "react-hot-toast";

function Pets() {
  const petData = useRecoilValue(petState);
  const [numState, setNumState] = useState(false);

  const handleNum = () =>{
    setNumState(false)
    toast("We will shortly get in touch with you! Thank you")
  }

  useEffect(() => {
    console.log(petData);
  }, []);
  return (
    <div className="main">
      <div className="title">Adopt</div>
      <div className="content">
        <div className="img-wrapper ">
          <img src={petData?.image.publicUrl} alt="" />
        </div>
        <div className="data">
          <div className="name">Heya !!! My name is {petData.name}</div>

          <div className="age">
            Age - <span>{petData?.age}</span>
          </div>
          <div className="gender">
            Gender - <span>{petData?.gender}</span>
          </div>
          <div className="breed">
            Breed - <span>{petData?.breed}</span>
          </div>

          <div className="injury">
            Injury - <span>{petData?.injury}</span>
          </div>
          <div className="location">
            Location - <span>{petData?.location}</span>
          </div>
        </div>
        <div className="btn" onClick={() => setNumState(true)}>
          Adopt
        </div>

        {
          numState? <div className="popup">
        <div className="inner">
        Where can we reach you?
        <input type="text" />
        <div className="btn btn2" onClick={handleNum}>
         Submit
        </div>
        </div>
        </div>:<div></div>
        }
      </div>
    </div>
  );
}

export default Pets;
