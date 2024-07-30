import React from "react";
import { Link } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import "./item.css"
//import Row from 'react-bootstrap/Row';

function Item({ info }) {
  return (
    <>
    <div className="d-flex justify-content-around mb-5">
    <Link to={`/detalle/${info.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
    <Card bg="dark" text="succes" className=" w-100 m-5 card-hover">
    <Card.Img src={info.image} alt="Card image"className="img-fluid" style={{ height: '12rem', objectFit: 'cover'}} />
    <Card.ImgOverlay>
      <Card.Title text="white">Dashboard</Card.Title>
     
      
    </Card.ImgOverlay>
  </Card>
  </Link>
  </div>
  </>
);
}
   
   
      /*<div className="d-flex justify-content-around">
         <Link to={`/detalle/${info.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src= {info.image}className= "w-75" />
        <Card.Body>
        <Card.Text>{info.title}</Card.Text>
         
        </Card.Body>
      </Card>
      </Link>



     
    </div>*/
  
  


export default Item;

