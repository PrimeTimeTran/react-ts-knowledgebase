import { Form } from "react-router-dom";
import { Routes, Route, useParams } from 'react-router-dom';

const Contact = () => {
  let { postId } = useParams();
  return (
    <iframe width="100%" height="100%" frameBorder="1" src={`https://docs.google.com/document/d/e/${postId}/pub?embedded=true`}></iframe>
  );
}

export default Contact