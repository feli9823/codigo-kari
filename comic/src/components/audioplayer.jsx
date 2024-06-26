// src/components/AudioPlayer.jsx
import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import '../App.css';

const AudioPlayer = ({ src, autoPlay }) => {
  const audioRef = useRef(null);

  useEffect(() => {
    if (autoPlay && audioRef.current) {
      audioRef.current.currentTime = 0;  // Reinicia el audio
      audioRef.current.play();
    }
  }, [autoPlay, src]);

  const handlePlay = () => {
    audioRef.current.play();
  };

  const handlePause = () => {
    audioRef.current.pause();
  };
  return (
    <div>
      <audio ref={audioRef} src={src}  />
    <div className='botones'>
    <button onClick={handlePlay}>Play</button>
    <button onClick={handlePause}>Pause</button>
    </div>
    </div>
  );
};

AudioPlayer.propTypes = {
  src: PropTypes.string.isRequired,
  autoPlay: PropTypes.bool,
};

AudioPlayer.defaultProps = {
  autoPlay: false,
};

export default AudioPlayer;
