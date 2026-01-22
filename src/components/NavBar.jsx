import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';

import { NavLink } from "react-router-dom";
import { useDispatch } from 'react-redux';
import {changeColor} from "../store/themSlice"
const colors = ["red", "green", "blue", "black"];
export const NavBar = () => {
  const dispatch=useDispatch();
  return (
    <Navbar expand="lg" variant="dark" className='bg-[#19283f]'>
      <Container fluid>
        <Navbar.Toggle aria-controls="basic-navbar-nav" style={{borderColor:"white", fontSize:"25px"}} onFocus={(e) => {
    e.target.style.boxShadow = "none";
  }} />
        <Navbar.Collapse id="basic-navbar-nav ">
          <Nav className="me-auto ">
            <Nav.Link as={NavLink} to="/" className='fw-bold  ' style={({ isActive }) => ({
      color: isActive ?"#33d1cc" : "white",
    }) 
  
    }>Home</Nav.Link>
            <Nav.Link as={NavLink} to="/profile" className='fw-bold'style={({ isActive }) => ({
      color: isActive ? "#33d1cc" : "white",
    })} >Profile</Nav.Link>
            <Nav.Link as={NavLink} to="/setting" className='fw-bold'style={({ isActive }) => ({
      color: isActive ? "#33d1cc" : "white",
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