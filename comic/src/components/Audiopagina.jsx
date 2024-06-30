// src/components/AudioPagina.jsx
import React from 'react';
import PropTypes from 'prop-types';
import audios from './audios';
import AudioPlayer from './audioplayer';

const AudioPagina = ({ pagina, autoPlay,tipoAudio}) => {
  const audioData = audios.find(audio => audio.pagina === pagina);
  console.log(audioData)

  if (!audioData) {
    return <p>No audio found for this page</p>;
  }

  return <AudioPlayer src={audioData[tipoAudio]} autoPlay={autoPlay} />;
};

AudioPagina.propTypes = {
  pagina: PropTypes.number.isRequired,
  autoPlay: PropTypes.bool
};

AudioPagina.defaultProps = {
  autoPlay: false
};

export default AudioPagina;
