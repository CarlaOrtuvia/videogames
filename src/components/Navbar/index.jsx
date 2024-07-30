import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';


//import { NavLink } from 'react-router-dom';

function NavbarExample() {
  return (
    <>
      {[false, ].map((expand) => (
        <Navbar key={expand} expand={expand} className="bg-dark mb-3 "  >
          <Container fluid >
            <Navbar.Brand href="/"><img src="../assets/images/game-controller_8147377.png" width="50" height="50" className="imagen"alt="Logo" /></Navbar.Brand >
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Venta de VideoGame
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="/">Nuestro Proyecto</Nav.Link>
                  <Nav.Link href="/objetivo">Objetivos e Hipótesis</Nav.Link>
                  <Nav.Link href="/usuarios">Usuarios</Nav.Link>
                  <Nav.Link href="/diagrama">DER y Carga SQL</Nav.Link>
                  <NavDropdown
                    title="Categorías"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  > 
                  <NavDropdown.Item href="/categoria/videogame">Videogames</NavDropdown.Item>
                    <NavDropdown.Item href="/categoria/editorial">Editorial</NavDropdown.Item>
                    <NavDropdown.Item href="/categoria/genero">Género</NavDropdown.Item>                  
                    <NavDropdown.Item href="/categoria/plataforma">Plataforma</NavDropdown.Item>
                  </NavDropdown>
                  <Nav.Link href="/conclusiones">Conclusiones</Nav.Link>
                  <Nav.Link href="/objetivo">Sobre Nosotras</Nav.Link>
                </Nav>
               
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default NavbarExample;