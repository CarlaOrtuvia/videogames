import React from "react";
import Card from 'react-bootstrap/Card';

function Proyecto() {
  return (
    <>
    <div className="d-flex justify-content-center">
    <Card bg="dark" text="white"className="mt-5 mr-5 w-75">
      <Card.Header>Venta de Videogames- Data Analitycs</Card.Header>
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p>
  {' '}Nuestro proyecto comienza eligiendo los datos con los cuales vamos a trabajar. Así, nos encontramos con el Excel que contenía los datos de ventas de VideoGame.

Una vez abierto el documento de Excel, pudimos explorar y ver las filas y las columnas, inferir objetivos y determinar una hipótesis que serán la base para comenzar a trabajar.

Realizamos un análisis exploratorio más exhaustivo y procedimos a limpiar el dataset. Teniendo nuestros datos limpios, procedimos a realizar el diagrama DER, lo que nos permitió establecer relaciones entre las columnas y las diferentes tablas entre sí.

Nuestro siguiente paso fue cargar los datos en el SQL y realizar el diagrama.

Nuestro último paso consistió en cargar los datos del SQL al Power BI, establecer las relaciones y elegir qué gráficos mostrarían mejor nuestros datos y responderían a nuestros objetivos e hipótesis.
            {' '}
          </p>
                
        </blockquote>
      </Card.Body>
    </Card>
    </div>
    <br />
    <div className="d-flex justify-content-center">
    <Card bg="dark" text="white"className="mt-5 mr-5 mb-5 w-75">
      <Card.Header>Análisis a realizar</Card.Header>
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p>
  {' '}El análisis descriptivo en la venta de videojuegos es un proceso que se centra en describir y resumir las características principales de las ventas de videojuegos. Esto implica examinar datos como las ventas totales, las ventas por región geográfica, las ventas por plataforma (por ejemplo, PlayStation, Xbox, PC), las ventas por género de videojuego (acción, aventura, deportes, etc.), y otras variables relevantes.

            {' '}
          </p>
                
        </blockquote>
      </Card.Body>
    </Card>
    </div>

    </>
  );
}

export default Proyecto;