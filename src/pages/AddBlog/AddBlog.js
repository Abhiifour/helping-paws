import React, { useState } from "react";
import "./AddBlog.scss";
import { IoIosImage } from "react-icons/io";
import { supabase } from "../../auth/supabase";
import { useNavigate } from "react-router-dom";

function AddBlog() {
  const [url, setUrl] = useState();
  const [file, setFile] = useState();
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const navigate = useNavigate();

  const handleImage = (e) => {
    setFile(e.target.files[0]);
    setUrl(URL.createObjectURL(e.target.files[0]));
  };

  const uploadImg = async () => {
    const { data, error } = await supabase.storage
      .from("blogimage")
      .upload(`${title}`, file, {
        cacheControl: "3600",
        upsert: false,
      });
    return data.id;
  };

  const addBlogs = async () => {
    try {
      const id = await uploadImg();
      const { error } = await supabase.from("blogs").insert({
       title:title,
       desc:desc,
       image:id
      });
    } catch (e) {
      console.log(e);
    }
  navigate("/")
  };

  return (
    <div className="main">
      <div className="title">Write A Blog</div>
      <div className="main-content">
        <div className="right">
          <label>
            <div className="icons-flex">
              <IoIosImage className="icon" />
              <p>Select Image</p>
            </div>
            <input
              type="file"
              className="image-input "
              onChange={handleImage}
            />
          </label>
          <img src={url} alt="" />
        </div>

        <div className="bottom">
          <div className="box">
            <label htmlFor="title">Add a title</label>
            <input
              type="text"
              id="title"
              className=""
              placeholder="Enter a title"
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="box">
            <label htmlFor="title">Description</label>
            <textarea
              name="title"
              id="title"
              cols="30"
              rows="10"
              onChange={(e) => setDesc(e.target.value)}
            ></textarea>
          </div>
        </div>
        <div className="btn" onClick={addBlogs}>
            Continue
          </div>
      </div>
    </div>
  );
}

export default AddBlog;
