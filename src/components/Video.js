import React from 'react'
import video from'../assests/video.mp4';
const Video = () => {
  return (
    <div>
      <video width='100%'autoPlay muted loop>
        <source src={video} type='video/mp4' alt="."/>
      </video>
    </div>
  )
}

export default Video
