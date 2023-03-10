import { useParams } from "react-router-dom";

import { useAuth } from "../hooks/index";

const Post = () => {
  const { postId } = useParams();
  const { isAuthenticated } = useAuth();

  return (
    <div className="vh-100">
      <iframe
        id="iframe"
        width="100%"
        height="100%"
        scrolling={isAuthenticated ? "yes" : "no"}
        className={isAuthenticated ? "" : "blurry-gradient"}
        src={`https://docs.google.com/document/d/e/${postId}/pub?embedded=true`}
      />
    </div>
  );
};

export default Post;
