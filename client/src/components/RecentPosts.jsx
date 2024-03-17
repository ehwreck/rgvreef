import React, { useEffect, useState } from "react";
import Post from "./Post";

const RecentPosts = (props) => {
  const { count } = props;
  const [posts, setPosts] = useState(
    [
      {
        title: "Title",
        text: "This is some dummy text.",
        imageURL:
          "https://images.unsplash.com/photo-1582032511796-a2aadc689117?q=80&w=2791&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        title: "Title",
        text: "This is some dummy text.",
        imageURL:
          "https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?q=80&w=2812&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        title: "Title",
        text: "This is some dummy text.",
        imageURL:
          "https://images.unsplash.com/photo-1596519398082-726c1594c985?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        title: "Title",
        text: "This is some dummy text.",
        imageURL:
          "https://images.unsplash.com/photo-1582032511796-a2aadc689117?q=80&w=2791&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        title: "Title",
        text: "This is some dummy text.",
        imageURL:
          "https://images.unsplash.com/photo-1582032511796-a2aadc689117?q=80&w=2791&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
    ].slice(0, count)
  );

  // useEffect(() => {
  //   fetch("/posts?count=5").then((data) => {
  //     setPosts(data.posts);
  //   });
  // }, []);

  const GetPosts = () => {
    if (!posts) return null;
    if (count === 1) {
      return <Post post={posts[0]} orientation="landscape" />;
    } else {
      return posts.map((post, index) => {
        console.log(post);
        return (
          <Post
            post={post}
            key={`recent_posts_${index}`}
            color={index % 2 === 0 ? "red" : "blue"}
          />
        );
      });
    }
  };

  return (
    <div className="w_80 recent_posts_container">
      <GetPosts />
    </div>
  );
};

export default RecentPosts;
