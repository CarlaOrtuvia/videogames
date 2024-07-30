import React from "react";
import Card from 'react-bootstrap/Card';

function Usuarios() {
  return (
    <div className="d-flex justify-content-center">
    <Card bg="dark" text="white"className=" w-75 mt-5 ">
      <Card.Header>Nuestros Usuarios</Card.Header>
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p>
            {' '}Gerentes de Producto: Para comprender qué tipos de juegos tienen un mejor rendimiento en el mercado y tomar decisiones sobre qué juegos desarrollar o publicar en el futuro.
Analistas de Negocios: Para examinar el desempeño financiero de los videojuegos y proporcionar información sobre cómo optimizar las operaciones comerciales y aumentar los ingresos.
Especialistas en Distribución y Logística: Para optimizar la distribución de los juegos en función de las tendencias de ventas y la demanda del mercado.

           {' '}
          </p>
         
        </blockquote>
      </Card.Body>
    </Card>
    </div>
  );
}

export default Usuarios;