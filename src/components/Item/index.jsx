import React from "react";
import { Link } from "react-router-dom";
import Card from 'react-bootstrap/Card';

function Item({ info }) {
  return (
      <div className="d-flex justify-content-around">
         <Link to={`/detalle/${info.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src= {info.image}className= "100px180" />
        <Card.Body>
        <Card.Text>{info.title}</Card.Text>
         
        </Card.Body>
      </Card>
      </Link>
     
    </div>
  );
      

}

export default Item;

