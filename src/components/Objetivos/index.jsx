import React from "react";
import Card from 'react-bootstrap/Card';
import Title from "../Title";


function Objetivos() {
  return (
    <>
    <Title greeting={"Objetivos e Hipótesis"}/>
    <div className="d-flex justify-content-center">
    <Card bg="dark" text="white"className="mt-5 w-75">
      <Card.Header>OBJETIVOS DE ANÁLISIS</Card.Header>
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p>
            {' '}
            Determinar qué géneros y plataformas son más populares y cómo estas preferencias han evolucionado con el tiempo.

            Proporcionar insights que puedan guiar a los desarrolladores en la creación de nuevos títulos, eligiendo géneros y plataformas con alto potencial de ventas.
           {' '}
          </p>
        </blockquote>
      </Card.Body>
    </Card>
    </div>
    <div className="d-flex justify-content-center">
     <Card bg="dark" text="white" className="mt-5 mb-5 w-75 ">
     <Card.Header>HIPÓTESIS</Card.Header>
     <Card.Body>
       <blockquote className="blockquote mb-0">
         <p>
           {' '}
           Se propone que el estado de las ventas de videojuegos está directamente relacionado con el género y la compañía desarrolladora.
Se plantea que existe una relación entre las ventas de videojuegos y las zonas geográficas, con el año de lanzamiento de dichos videojuegos, lo que sugiere que las ventas varían dependiendo de la región y que el impacto del año de lanzamiento influye en la demanda de estos productos en distintas áreas geográficas. 
Otros planteamientos que se tienen en cuenta son:

a-Las ventas de videojuegos varían significativamente entre diferentes zonas geográficas debido a diferencias culturales, económicas y demográficas. 

b-La popularidad de ciertos videojuegos cambia entre diferentes regiones debido a preferencias culturales, marketing específico o adaptaciones locales.  

c-La disponibilidad de plataformas de juego afecta significativamente las ventas de videojuegos, con ciertas plataformas siendo más populares en ciertas regiones.

d-El crecimiento de otras formas de entretenimiento compite con las ventas de videojuegos, especialmente entre ciertos grupos demográficos o en determinadas regiones.

          {' '}
         </p>
       </blockquote>
     </Card.Body>
   </Card>
   </div>
   </>
   
  );
}

export default Objetivos;