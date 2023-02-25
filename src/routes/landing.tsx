import React, { Component } from "react";

import Navbar from '../components/Navbar'

class ScreenShare extends Component {
  render() {
    return (
      <div className="vh-100">
        <Navbar />
        <iframe
          id="iframe"
          width="100%"
          height="100%"
          style={{
            display: 'flex',
            justifyContent: 'center',
          }}
          className="fadeddd"
          frameBorder="1"
          src={`https://comfy-beignet-efc3e6.netlify.app/`} />
      </div>
    );
  }
}
export default ScreenShare;