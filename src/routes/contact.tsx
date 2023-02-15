import { Form } from "react-router-dom";
import { Routes, Route, useParams } from 'react-router-dom';




const Contact = (props: object) => {
  let { contactId } = useParams();
  console.log({
    contactId
  })
  return (
    <iframe width="100%" height="100%" frameBorder="0" src={`https://docs.google.com/document/d/e/${contactId}/pub?embedded=true`}></iframe>
  );
}

export default Contact