import React, { useEffect, useState } from "react";
import "./Pets.scss";
import { useRecoilValue } from "recoil";
import { petState } from "../../Atom";
import { toast } from "react-hot-toast";
import { supabase } from "../../auth/supabase";

function Pets() {
  const petData = useRecoilValue(petState);
  const [numState, setNumState] = useState(false);
  const [name,setName] = useState("");
  const [phone,setPhone] = useState("");

  const handleNum = async () => {
    setNumState(false);

     try {
          const { error } = await supabase.from("interested").insert({
            name: name,
            dog: petData.name,
            phone: phone
          });
        } catch (e) {
          console.log(e);
        }
    toast("We will shortly get in touch with you! Thank you.");

  };

  useEffect(() => {
    console.log(petData);
  }, [petData]);

  return (
    <div className="pets-container">
      <div className="pets-title">Adopt Your New Best Friend</div>
      <div className="pets-content">
        <div className="image-container">
          <img src={petData?.image.publicUrl} alt={petData?.name} />
        </div>
        <div className="info-container">
          <div className="pet-name">{petData?.name}</div>
          <div className="pet-details">
            <div className="detail">
              <strong>Age:</strong> {petData?.age}
            </div>
            <div className="detail">
              <strong>Gender:</strong> {petData?.gender}
            </div>
            <div className="detail">
              <strong>Breed:</strong> {petData?.breed}
            </div>
            <div className="detail">
              <strong>Injury:</strong> {petData?.injured ? "Yes" : "No"}
            </div>
            <div className="detail">
              <strong>Location:</strong> {petData?.location}
            </div>
          </div>
          <div className="adopt-btn" onClick={() => setNumState(true)}>
            Adopt {petData?.name}
          </div>

          {numState && (
            <div className="contact-popup">
              <div className="popup-inner">
                <h2>Where can we reach you?</h2>
                <input type="text" placeholder="Enter your name " onChange={(e) => setName(e.target.value)} />
                <input type="text" placeholder="Enter your contact info" onChange={(e) => setPhone(e.target.value)} />
                {/* <input type="text" placeholder="Enter your contact info" /> */}
                <button className="popup-submit" onClick={handleNum}>
                  Submit
                </button>
                <button className="popup-close" onClick={() => setNumState(false)}>
                  Close
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Pets;
