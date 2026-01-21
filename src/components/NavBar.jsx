import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router';
import { NavLink } from "react-router-dom";
import { useDispatch } from 'react-redux';
import {changeColor} from "../store/themSlice"
const colors = ["red", "green", "blue", "black"];
export const NavBar = () => {
  const dispatch=useDispatch();
  return (
    <Navbar expand="lg"  bg="primary" variant="dark">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav ">
          <Nav className="me-auto -translate-x-20">
            <Nav.Link as={NavLink} to="" className='fw-bold' style={({ isActive }) => ({
      color: isActive ? "#e7feff " : "#8cbed6 ",
    })}>Home</Nav.Link>
            <Nav.Link as={NavLink} to="profile" className='fw-bold'style={({ isActive }) => ({
      color: isActive ? "#e7feff " : "#8cbed6 ",
    })} >Profile</Nav.Link>
            <Nav.Link as={NavLink} to="setting" className='fw-bold'style={({ isActive }) => ({
      color: isActive ? "#e7feff " : "#8cbed6 ",
    })}>Setting</Nav.Link>
           </Nav>
              <Nav className="ms-auto d-flex gap-2">
            {colors.map((color) => (
              <Button
                key={color}
               onClick={() => dispatch(changeColor(color))}
                style={{
                  backgroundColor: color,
                  border: "none",
                  width: "24px",
                  height: "24px",
                  borderRadius: "50%",
                }}
              />
            ))}
          

         
          
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
export default NavBar;