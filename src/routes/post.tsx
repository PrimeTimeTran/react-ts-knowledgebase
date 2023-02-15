import { useEffect } from 'react';

import { useParams } from 'react-router-dom';

const Post = () => {
  let { postId } = useParams();

  useEffect(() => {
    const item = document.getElementsByClassName('doc-content')[0]
    if (item) {
      document.getElementsByClassName('doc-content')[0].style.padding = '5px'
    }
  }, [])

  return (
    <iframe id="iframe" width="100%" height="100%" style={{ display: 'flex', justifyContent: 'center' }} frameBorder="1" src={`https://docs.google.com/document/d/e/${postId}/pub?embedded=true`}></iframe>
  );
}

export default Post