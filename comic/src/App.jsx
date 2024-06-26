import React, { useState, useEffect } from 'react';
import './App.css'; // Asegúrate de que la ruta sea correcta
import AudioPagina from './components/Audiopagina';
import audios from './components/audios';
import  'bootstrap/dist/css/bootstrap.min.css';
import Swal from 'sweetalert2';


function App() {
  const [pagina, setPagina] = useState(0);
  const [autoPlay, setAutoPlay] = useState(false  );
  const [Titulo, setTitulo] = useState("");
  const [Boton, setBoton] = useState("");
  const [Estado, setEstado] = useState({imagen:"imagen",audio:"pene"});

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
  
  useEffect(() => {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-primary",
        cancelButton: "btn btn-primary"
      }
    });

    swalWithBootstrapButtons.fire({
      title: "Selecciona el Idioma",
      text: "Sélectionnez la langue",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      confirmButtonText: "Francois",
      cancelButtonText: "Español",
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        setTitulo('Épisode 1 : la menace de Superman');
        setBoton('lire du son');
        setEstado({imagen: 'imagenf',audio:'audiof'});
      } else {
        setTitulo('Episodio 1: La amenaza de Superman');
        setBoton('Reproducir');
        setEstado({imagen:'imagen',audio:'audio'});
      }
    });
  }, []); // Empty dependency array to run this effect only once
  
  return (
    <div className='App'>
      <div className="titulo">
        <h1>{Titulo}</h1>
      
        <div className='imagenes'>
           {audios[pagina] && <img src={audios[pagina][Estado.imagen]}  alt="Superman" />}
        </div>

        <div className="botones">
          <button type="button" className="btn btn-light" onClick={handlePrev} style={{ fontSize: '40px',fontWeight:'bold' }}>&lt;</button>
          <button type="button" className="btn btn-light" onClick={handleNext}  style={{ fontSize: '40px', fontWeight:'bold'}}>&gt;</button>
          <button type="button" className="btn btn-success" onClick={() => handlePlayAudio(audios[pagina])} style={{ fontSize: '20px',fontWeight:'bold',width:'20%' }}>{Boton}</button>
        
          
        </div>
        
        <AudioPagina pagina={pagina} autoPlay={autoPlay} tipoAudio={[Estado.audio]}/>
      </div>
    </div>
  );
}

export default App;
