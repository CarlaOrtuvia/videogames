import React from "react";
import Card from 'react-bootstrap/Card';

function Conclusiones() {
  return (
    <Card bg="dark" text="white" style={{width:"60rem", margin:"240px"}}>
      <Card.Header>NUESTRAS CONCLUSIONES</Card.Header>
      <Card.Body bg="Danger" text="Ligth">
      <blockquote className="blockquote mb-2">
          <p>
            {' '}De acuerdo con las tablas y gráficos presentados en el Dashboard, se puede concluir que el total de videojuegos vendidos en el mundo alcanzó los 6,87 millones. De esta cifra, América del Norte lidera como la región con mayor compra, representando el 47,71% del total, seguida por Europa con el 26,35%, Japón con el 17,44% y otras regiones con el 8,5%.
Al analizar las plataformas más vendidas desde 1980 hasta 2020, se observa que la PS2 fue la más vendida, con 1,1 millones de unidades. En segundo lugar, se encuentra la plataforma Wii, con 0,8 millones de unidades vendidas. En 2009 se registró el máximo total de ventas de videojuegos a nivel mundial, con 483,26 millones de unidades, siendo América del Norte la región destacada con 241,96 millones de ventas durante ese año.
Finalmente, se puede concluir que en el top 10 de los juegos más vendidos, Wii Sports sobresale en América y Europa, mientras que en Japón, Pokémon Red ocupa el primer lugar. En cuanto a los géneros más populares entre los compradores de videojuegos, los juegos de Acción lideran con un 16,68% a nivel mundial.

           {' '}
          </p>
      </blockquote>    
       
      </Card.Body>
    </Card>
  );
}

export default Conclusiones;