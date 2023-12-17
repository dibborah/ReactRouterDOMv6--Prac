import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const url = "https://jsonplaceholder.typicode.com/posts";

const PostDetail = () => {
  const [post, setPost] = useState({});
  const { id } = useParams();
  const fetchPost = async () => {
    const response = await fetch(`${url}/${id}`);
    const data = await response.json();
    setPost(data);
    console.log(data);
  };
  useEffect(() => {
    fetchPost();
  }, []);
  // console.log(params);
  return (
    <div>
      {post && (
        <>
          <h2> title : {post.title} </h2>
          <p> body: {post.body} </p>
        </>
      )}
    </div>
  );
};

export default PostDetail;
