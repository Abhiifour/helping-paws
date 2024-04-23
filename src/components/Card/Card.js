import React, { useEffect, useState } from "react";
import dogImg from "../../assests/dog4.jpg";
import "./Card.scss";
import { supabase } from "../../auth/supabase";
import { petState } from "../../Atom";
import { useRecoilState } from "recoil";
import { useNavigate } from "react-router-dom";

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
          <img src={imageUrl?.publicUrl} />
        </div>
        <div className="data">
          <h2 className="name">{name}</h2>
          <h4 className="breed">{breed}</h4>
          <p className="gender">{gender}</p>
          <p className="location">{age}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
