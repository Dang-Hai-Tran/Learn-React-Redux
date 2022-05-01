import React from "react";
import { useSelector } from "react-redux";

const Post = () => {
  const posts = useSelector((state) => state.post.posts);
  return (
    <section className="post-container">
      {posts.map(
        (post, index) =>
          index >= 1 && (
            <div className="posts" key={index}>
              <p className="posts-title">{post.title}</p>
              <p className={`posts-tags-${post.tag} posts-tags`}>{post.tag}</p>
              <p className="posts-description">{post.description}</p>
            </div>
          )
      )}
    </section>
  );
};

export default Post;
