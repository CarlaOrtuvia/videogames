import React from "react";
import Title from "../Title";



import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
 const imageUrls =[
  "../assets/images/sqluno.png",
  "../assets/images/sqldos.png",
  "../assets/images/sqltres.png",
  "../assets/images/sqlcuatro.png"
 ];
 const images =[
  "../assets/images/sqlcinco.png",
  "../assets/images/sqlseis.png",
  "../assets/images/siete.png",
  "../assets/images/sqlocho.png"
 ];
 const imagesSql =[
  "../assets/images/sqlnueve.png",
  "../assets/images/sqldiez.png",
  "../assets/images/sqlonce.png",
  "../assets/images/sqldoce.png"
 ];


function Diagrama() {
  return (
    
    <>
    <Title greeting={"Diagrama DER y Carga SQL"}/>
    <div className="d-flex justify-content-center">
 <Card className="w-50 mt-5 " >
        <Card.Img variant="top" src="../assets/images/diagrama.png" className="img-fluid" />
        <Card.Body>
          <Card.Text>
            DIAGRAMA ENTIDAD-RELACIÓN
          </Card.Text>
        </Card.Body>
      </Card>
      </div>
      <br />

        <Row xs={1} md={4} className="g-2 mt-5">
      {imageUrls.map((url, idx) => (
        <Col key={idx}>
          <Card className="w-75">
            <Card.Img variant="top" src={url} className="img-fluid"  style={{ objectFit: 'cover', height: '12rem' }}/>
            <Card.Body>
              <Card.Title>Carga SQL</Card.Title>
                           
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
    <br />
    <Row xs={1} md={4} className="g-2 mt-5">
      {images.map((url, idx) => (
        <Col key={idx}>
          <Card className="w-75">
            <Card.Img variant="top" src={url} className="img-fluid"  style={{ objectFit: 'cover', height: '12rem' }}/>
            <Card.Body>
              <Card.Title>Carga SQL</Card.Title>
                           
            </Card.Body>

          </Card>
        </Col>
      ))}
    </Row>
    <br />
    <Row xs={1} md={4} className="g-2 mt-5">
      {imagesSql.map((url, idx) => (
        <Col key={idx}>
          <Card className="w-75">
            <Card.Img variant="top" src={url} className="img-fluid"  style={{ objectFit: 'cover', height: '12rem' }}/>
            <Card.Body>
              <Card.Title>Carga SQL</Card.Title>
                           
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
    <div className="d-flex justify-content-center">
 <Card className="w-25 mt-5 mb-5" >
        <Card.Img variant="top" src="../assets/images/sqltrece.png" className="img-fluid" />
        <Card.Body>
          <Card.Text>
            DIAGRAMA SQL
          </Card.Text>
        </Card.Body>
      </Card>
      </div>

    
</>
  );
}

export default Diagrama;