import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";

import Input from "../InputFields/Input";
import "./MakePost.css";
import { createPost } from "../../redux/postSlice";

const MakePost = ({ setIsOpenPost }) => {
  const [title, setTitle] = useState("Add a title");
  const [desc, setDesc] = useState("Add some descriptions");
  const tags = ["None", "NSFW", "Mood", "Quotes", "Shitpost"];
  const [selectedIndex, setSelectedIndex] = useState();
  const dispatch = useDispatch();
  const handlePost = () => {
    setIsOpenPost(false);
    const newPost = {
      title: title,
      description: desc,
      tag: tags[selectedIndex],
    };
    dispatch(createPost(newPost));
  };
  return (
    <section className="makepost-container">
      <div className="makepost-navigation">
        <p className="makepost-save" onClick={handlePost}>
          Post
        </p>
      </div>
      <Input data={title} inputType="textarea" setData={setTitle} label="Title" classStyle="makepost-title" />
      <Input data={desc} inputType="textarea" setData={setDesc} label="Descriptions" classStyle="makepost-desc" />
      <label htmlFor="">Tags</label>
      <div className="makepost-tags">
        {tags.map((tag, index) => (
          <button
            key={index}
            className={selectedIndex === index ? `makepost-tags-selected` : `makepost-tags-${tag}`}
            onClick={() => setSelectedIndex(index)}>
            {tag}
          </button>
        ))}
      </div>
    </section>
  );
};

export default MakePost;
