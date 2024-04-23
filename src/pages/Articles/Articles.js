import React, { useEffect, useState } from "react";
import ArticleBox from "../../components/Articlebox/ArticleBox";
import "./Article.scss";
import ArticleCorousel from "../../components/ArticleCorousel/ArticleCorousel";
import { supabase } from "../../auth/supabase";
function Articles() {
  const [blogs, setBlogs] = useState([]);

  const getBlogs = async () => {
    try {
      const { data, error } = await supabase.from("blogs").select();
      setBlogs(data.reverse());
    } catch (e) {}
  };
  useEffect(() => {
    getBlogs();
  }, []);

  return (
    <div className="Articles container">
      <h1 className="title-main">DOGS AND PUPPY BLOGS</h1>
      <div className="corousel">
        <ArticleCorousel />
      </div>

      <div className="article-box center container">
        {blogs.map((blog) => (
          <ArticleBox title={blog.title} image={blog.image} desc={blog.desc} />
        ))}
      </div>
    </div>
  );
}

export default Articles;
