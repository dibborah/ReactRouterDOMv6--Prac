import { useState, useEffect } from "react";
import Post from "../components/post";


const url = "https://jsonplaceholder.typicode.com/posts";

// mount --> data fetch

const Posts = () => {
  const [posts, setPosts] = useState(null);

  const fetchPosts = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setPosts(data);
    console.log(data);
  };
  useEffect(() => {
    fetchPosts();
  }, []);

  return <>{posts && posts.map((post) =><Post key={post.id} {...post}/>)}</>;

};

export default Posts;
