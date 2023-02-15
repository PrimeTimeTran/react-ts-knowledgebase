import { useParams } from 'react-router-dom';

const Contact = () => {
  let { postId } = useParams();

  return (
    <iframe id="iframe" width="100%" height="100%" style={{ display: 'flex', justifyContent: 'center' }} frameBorder="1" src={`https://docs.google.com/document/d/e/${postId}/pub?embedded=true`}></iframe>
  );
}

export default Contact