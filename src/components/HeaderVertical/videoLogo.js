/* eslint-disable jsx-a11y/media-has-caption */
import React, { useRef, useEffect } from 'react';

import Video from '../../assets/teste_1.mp4';

function VideoLogo() {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;

    const handleEnded = () => {
      video.currentTime = 0;
      video.play();
    };

    const handleClick = () => {
      video.play();
    };

    video.addEventListener('ended', handleEnded);

    document.addEventListener('click', handleClick);

    return () => {
      video.removeEventListener('ended', handleEnded);
      document.removeEventListener('click', handleClick);
    };
  }, []);

  return (
    <video
      ref={videoRef}
      style={{
        height: '60%',
        width: '80%',
        objectFit: 'cover'
      }}
      controls={false}
      autoPlay
    >
      <source src={Video} type="video/mp4" />
    </video>
  );
}

export default VideoLogo;
