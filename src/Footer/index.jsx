import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
function Footer() {
    return (
      <>
       
        <Navbar bg="dark" className="bg-body-dark">
          <Container bg="dark">
            <Navbar.Brand href="/">
              <img
                src="../assets/images/1.jpg"
                width="80"
                height="80"
                className="d-inline-block align-top"
                alt="React Bootstrap logo"
              />
            </Navbar.Brand>
          </Container>
        </Navbar>
        <br />
        
      </>
    );
  }
  
  export default Footer;