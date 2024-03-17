import React, { useState } from "react";

const Post = (props) => {
  const { post, color, orientation = "portrait" } = props;
  const { title, text, imageURL } = post;
  const [hovered, setHovered] = useState(false);

  return (
    <div
      style={{
        background: `url(${imageURL})`,
        backgroundSize: "cover",
        backgroundPosition: `center`,
      }}
      onMouseEnter={() => {
        setHovered(true);
      }}
      onMouseLeave={() => {
        setHovered(false);
      }}
      className={`recent_post ${hovered ? "hovered__post" : ""}`}
    >
      <h3 className={`s__size thin__weight ${hovered ? "visible" : "hidden"}`}>
        {title}
      </h3>
      <p className={`xs__size thin__weight ${hovered ? "visible" : "hidden"}`}>
        {text}
      </p>
    </div>
  );
};

export default Post;
