import React, {useState,useEffect} from 'react';
import Frase from './Components/Frase';
import styled from '@emotion/styled';

const Contenedor = styled.div`
  display:flex;
  align-items:center;
  padding-top: 5rem;
  flex-direction:column;
`;

const Boton = styled.button`
  background: -webkit-linear-gradient(top left, #007D35 0%, #007D35 40%, #0F574E 100%);
  background-size:300px;
  font-family: Arial, Helvetica, sans-serif;
  color:#FFF;
  margin-top:3rem;
  padding:1rem 3rem;
  font-size:2rem;
  border: 2px solid black;
  transition: background-size .8s ease;

  :hover{
    cursor:pointer;
    background-size:400px;
  }
`;

function App() {
  //State de frases
  const [frase, obtenerFrase] = useState({});

  //Consultando API

  const ConsultarApi = async () =>{
    const Api  = await fetch('https://breaking-bad-quotes.herokuapp.com/v1/quotes')
    const frase = await Api.json()
    obtenerFrase(frase[0]);
    
  }

  //cargar una frase
  useEffect(() =>{
      ConsultarApi()
  },[]);

  return (
    <Contenedor>

      <Frase
          frase={frase}
      />

      <Boton
        onClick={()=> ConsultarApi()}
      >
        Obtener Frase
      </Boton>
    </Contenedor>

  );
}

export default App;
