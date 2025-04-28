import React, { useEffect, useState } from "react";
import { supabase } from "../../auth/supabase";
import { petState } from "../../Atom";
import { useRecoilState } from "recoil";
import { useNavigate } from "react-router-dom";
import "./Card.scss";

function Card({ name, breed, gender, age, image, injured, location, type }) {
  const [imageUrl, setImageUrl] = useState();
  const [petData, setPetData] = useRecoilState(petState);
  const navigate = useNavigate();

  const getImage = async () => {
    await supabase.storage.from("dogimage").download(`${name}`);

    const { data, error } = supabase.storage
      .from("dogimage")
      .getPublicUrl(`${name}`);

    setImageUrl(data);
  };

  const setDogState = () => {
    setPetData({
      name: name,
      age: age,
      image: imageUrl,
      type: type,
      gender: gender,
      breed: breed,
      location: location,
      injured: injured,
    });

    navigate("/pet");
  };

  useEffect(() => {
    getImage();
  }, []);

  return (
    <div className="Card" onClick={setDogState}>
      <div className="card-container">
        <div className="img-box">
          <img src={imageUrl?.publicUrl || image} alt={name} />
        </div>
        <div className="data">
          <h2 className="name">{name}</h2>
          <h4 className="breed">{breed}</h4>
          <div className="details">
          <p className="gender">{gender}</p>
          <p className="age">{age}</p>
          <p className="location">{location}</p>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default Card;
