import React, { useState } from "react";
import "./AddDog.scss";
import { supabase } from "../../auth/supabase";
import { IoIosImage } from "react-icons/io";
import { useNavigate } from "react-router-dom";

function AddDog() {
  const [name, setName] = useState("");
  const [type, setType] = useState("Dog");
  const [breed, setBreed] = useState("");
  const [age, setAge] = useState("Puppyhood");
  const [gender, setGender] = useState("Male");
  const [location, setLocation] = useState("");
  const [injured, setInjured] = useState("No");
  const [url, setUrl] = useState();
  const [file, setFile] = useState();
  const navigate = useNavigate();

  const addDogs = async () => {
    try {
      const id = await uploadImg();
      const { error } = await supabase.from("dogs").insert({
        name: name,
        type: type,
        breed: breed,
        age: age,
        gender: gender,
        location: location,
        injured: injured,
        imageid: id,
      });
    } catch (e) {
      console.log(e);
    }
    navigate("/");
  };

  const handleImage = (e) => {
    setFile(e.target.files[0]);
    setUrl(URL.createObjectURL(e.target.files[0]));
  };

  const uploadImg = async () => {
    const { data, error } = await supabase.storage
      .from("dogimage")
      .upload(`${name}`, file, {
        cacheControl: "3600",
        upsert: false,
      });
    return data.id;
  };

  return (
    <div className="main">
      <div className="title">Rehome a Pet</div>
      <div className="content">
        <div className="main-box">
          <div className="box">
          <label htmlFor="fname">Pet's Name</label>
          <input
            type="text"
            id="fname"
            name="fname"
            placeholder="Please enter your pet's name"
            onChange={(e) => setName(e.target.value)}
          />

          </div>
         
          <div className="flex-box">
            <div className="box">
              <label htmlFor="type">Pet Type</label>
              <select
                name="type"
                id="type"
                onChange={(e) => setType(e.target.value)}
              >
                <option value="Dog">Dog</option>
                <option value="Cat">Cat</option>
              </select>
            </div>
            <div className="box">
              <label htmlFor="breed">Pet's Breed</label>
              <input
                type="text"
                id="breed"
                name="breed"
                placeholder="Please enter your pet's breed"
                onChange={(e) => setBreed(e.target.value)}
              />
            </div>
          </div>

          <div className="flex-box">
            <div className="box">
              <label htmlFor="age">Age of Pet</label>
              <select
                name="age"
                id="age"
                onChange={(e) => setAge(e.target.value)}
              >
                <option value="Puppyhood">Puppyhood</option>
                <option value="Adolescence">Adolescence</option>
                <option value="Adulthood">Adulthood</option>
                <option value="Senior">Senior</option>
              </select>
            </div>

            <div className="box">
              <label htmlFor="gender">Pet Gender</label>
              <select
                name="gender"
                id="gender"
                onChange={(e) => setGender(e.target.value)}
              >
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>
          </div>

          <div className="flex-box">
            <div className="box">
              <label htmlFor="location">Pet's Location</label>
              <input
                type="text"
                id="location"
                name="location"
                placeholder="Please enter location"
                onChange={(e) => setLocation(e.target.value)}
              />
            </div>
            <div className="box">
              <label htmlFor="injured">Injured</label>
              <select
                name="injured"
                id="injured"
                onChange={(e) => setInjured(e.target.value)}
              >
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </div>
          </div>

          <div className="btn" onClick={addDogs}>
            Continue
          </div>
        </div>
        <div className="right">
          <label>
            <div className="icons-flex">
              <IoIosImage className="icon" />
              <p>Select Image</p>
            </div>
            <input
              type="file"
              className="image-input"
              onChange={handleImage}
            />
          </label>
          {url && <img src={url} alt="Pet Preview" />}
        </div>
      </div>
    </div>
  );
}

export default AddDog;
