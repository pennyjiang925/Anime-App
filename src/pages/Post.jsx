import React from 'react';
import { posts } from '../data';
import { useLocation } from 'react-router-dom';

const Post = () => {
  const location = useLocation();
  const path = location.pathname.split('/')[2];

  const post = posts.find((p) => p.id.toString() === path);
  return (
    <div className="post">
      <img src={post.img} alt="" className="postImg" />
      <p className="postTitle">{post.title}</p>
      <p className="postDesc">{post.desc}</p>
      <p className="postLongDesc">{post.longDesc}</p>
    </div>
  );
};

export default Post;
