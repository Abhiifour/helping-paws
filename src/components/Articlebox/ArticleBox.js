import React, { useEffect, useState } from "react";
import puppy from "../../assests/puppy.jpg";
import "./ArticleBox.scss";
import { showToastMessage } from "../../toast";
import { ToastContainer, toast } from "react-toastify";
import { supabase } from "../../auth/supabase";

function ArticleBox({ title, desc, image }) {
  const [imageUrl, setImageUrl] = useState();

  const getImage = () => {
    const { data } = supabase.storage
      .from("blogimage")
      .getPublicUrl(`${title}`);
    setImageUrl(data.publicUrl)  
  };

  useEffect(() => {
    getImage()
  
  }, []);

  
  return (
    <div className="AtricleBox" onClick={showToastMessage}>
      <div className="img-box">
        <img src={imageUrl} alt="dog" />
      </div>
      <div className="title">{title}</div>
      <p className="data">{desc}</p>
      <ToastContainer />
    </div>
  );
}

export default ArticleBox;
