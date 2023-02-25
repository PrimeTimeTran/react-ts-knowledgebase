import { useParams } from "react-router-dom";

import { useAuth } from "../hooks/index";

const Post = () => {
  const { postId } = useParams();
  const { isAuthenticated } = useAuth();

  return (
    <iframe
      id="iframe"
      width="100%"
      height="100%"
      scrolling={isAuthenticated ? "yes" : "no"}
      style={{
        display: "flex",
        justifyContent: "center",
      }}
      frameBorder="1"
      src={`https://docs.google.com/document/d/e/${postId}/pub?embedded=true`}
    />
  );
};

export default Post;
