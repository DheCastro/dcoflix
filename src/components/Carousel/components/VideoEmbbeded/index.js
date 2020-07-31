import React from 'react';
import ReactPlayer from "react-player";

function VideoEmbbeded() {
    return (
      <div className="VideoEmbbeded">
        <h3>Embed YouTube video - <a href="https://www.cluemediator.com">Clue Mediator</a></h3>
        <ReactPlayer
          url="https://www.youtube.com/watch?v=UVCP4bKy9Iw"
        />
      </div>
    );
  }
   
  export default VideoEmbbeded;