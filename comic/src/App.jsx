import React, { useState } from 'react';
import './App.css'; // Asegúrate de que la ruta sea correcta
import AudioPagina from './components/Audiopagina';
import audios from './components/audios';
import  'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [pagina, setPagina] = useState(0);
  const [autoPlay, setAutoPlay] = useState(false  );

  const handlePlayAudio = (audio) => {
    if (audio && audio.pagina >= 0 && audio.pagina < audios.length) {
      console.log(audio)
      setPagina(audio.pagina);
      setAutoPlay(false);  // Reset autoPlay to trigger the effect again
      setTimeout(() => {
        setAutoPlay(true);
      }, 0);  // Ensure the state change is detected
    }
  };
   const handleNext = () => {
    setPagina((prevPagina) => (prevPagina + 1) % audios.length);
     
  };

  const handlePrev = () => {
    setPagina((prevPagina) => (prevPagina - 1 + audios.length) % audios.length);
    
  };

  return (
    <div className='App'>
      <div className="titulo">
        <h1>Episodio 1: La amenaza de Superman!</h1>
      
        <div className='imagenes'>
           {audios[pagina] && <img src={audios[pagina].imagen}  alt="Superman" />}
        </div>

        <div className="botones">
          <button type="button" className="btn btn-light" onClick={handlePrev} style={{ fontSize: '40px',fontWeight:'bold' }}>&lt;</button>
          <button type="button" className="btn btn-light" onClick={handleNext}  style={{ fontSize: '40px', fontWeight:'bold'}}>&gt;</button>
          <button type="button" className="btn btn-success" onClick={() => handlePlayAudio(audios[pagina])} style={{ fontSize: '20px',fontWeight:'bold',width:'20%' }}>lire du son</button>
        
          
        </div>
        
        <AudioPagina pagina={pagina} autoPlay={autoPlay} />
      </div>
    </div>
  );
}

export default App;
