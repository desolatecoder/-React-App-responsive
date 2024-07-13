import './Header.css'
import { Link } from "react-router-dom";
import React, { useState } from 'react';
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBCollapse,
} from 'mdb-react-ui-kit';
import { FaBars } from 'react-icons/fa6';

export default function Home() {
  const [openBasic, setOpenBasic] = useState(false);
  return (<>


<MDBNavbar expand='lg' fixed='top' style={{backgroundColor:"black"}} >
      <MDBContainer fluid>
        <MDBNavbarBrand> <Link class="navbar-brand" to="/" style={{ marginLeft: 100, fontSize: 30, color: "#0066b8" }}>ProtoEdge</Link></MDBNavbarBrand>

        <MDBNavbarToggler
          
          width={"40px"}
          height={"40px"}
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
          onClick={() => setOpenBasic(!openBasic)} >
         <FaBars  style={{color:"white"}}fal />
        </MDBNavbarToggler>

        <MDBCollapse navbar open={openBasic}>
         <div className='navgroup'>
         <MDBNavbarNav>
            <MDBNavbarItem>
              <MDBNavbarLink active aria-current='page'>
                <Link class="nav-link" to="/team" style={{ fontSize:"20px",color: "white" }}>Team</Link>
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink>   <Link class="nav-link" to="/Service" style={{fontSize:"20px", color: "white" }} >Service</Link></MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink style={{ color: "white" }}> <Link class="nav-link" to="/Mentorship" style={{ fontSize:"20px",color: "white" }}>Mentorship</Link> </MDBNavbarLink>
            </MDBNavbarItem>
            
            <MDBNavbarItem>
              <MDBNavbarLink style={{ color: "white" }}><Link class="nav-link" to="/Blog" style={{fontSize:"20px", color: "white" }}>Blog</Link> </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink > <Link class="nav-link" to="/Contactus" style={{fontSize:"20px", color: "white" }}>Contact</Link></MDBNavbarLink>
            </MDBNavbarItem>

          </MDBNavbarNav>
         </div>


        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
    
    





          
  </>);
}