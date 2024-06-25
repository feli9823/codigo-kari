// src/components/AudioPlayer.jsx
import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';

const AudioPlayer = ({ src, autoPlay }) => {
  const audioRef = useRef(null);

  useEffect(() => {
    if (autoPlay && audioRef.current) {
      audioRef.current.currentTime = 0;  // Reinicia el audio
      audioRef.current.play();
    }
  }, [autoPlay, src]);

  return (
    <div>
      <audio ref={audioRef} src={src}  />
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
