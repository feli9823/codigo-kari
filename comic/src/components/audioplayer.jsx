import React, { useRef, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import '../App.css';
import { FaPlay, FaPause } from 'react-icons/fa';

const AudioPlayer = ({ src, autoPlay }) => {
  const audioRef = useRef(null);
  const [pausado, setPausado] = useState(true);

  useEffect(() => {
    console.log(src)
    if (autoPlay && audioRef.current) {
      audioRef.current.currentTime = 0;  // Reinicia el audio
      audioRef.current.play();
      setPausado(false);
    }
  }, [autoPlay, src]);

  const handlePlayPause = () => {
    if (pausado) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
    setPausado(!pausado);
  };

  return (
    <div>
      <audio ref={audioRef} src={src} />
      <div className='botones'>
        <button onClick={handlePlayPause}>
          {pausado ? <FaPlay /> : <FaPause />}
        </button>
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
