import { Container, Navbar, Nav } from "react-bootstrap";
// "About Me", "Skills", "Contact Me"
const pages = [
  { 
    id: 1,
    section: "About Me",
    ref: "#aboutMe",
  },
  { 
    id: 2,
    section: "Skills",
    ref: "#skills" 
  },
  {
    id: 3,
    section: "Contact Me",
    ref: "#contactMe"
  }
];

const MyNavbar = () => {

  return (
    <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
  );
};
export default MyNavbar;
