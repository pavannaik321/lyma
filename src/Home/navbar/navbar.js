import "./navbar.css"
import React, { useEffect } from "react";
import {NavbarBrand,NavbarToggler,Collapse,Nav,NavItem,NavLink,UncontrolledDropdown,DropdownToggle,DropdownMenu,DropdownItem,NavbarText} from "reactstrap"

export default function Navbar(){
/*   useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
  
    return () => {
        window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  const handleScroll = () => {
    const position = window.pageYOffset;
    // setScrollPosition(position);
    const nav=document.getElementById("nav");
    const a=document.querySelectorAll("a");
    if (position > 100) {
      nav.style.backgroundColor = "white";
    } else {
      nav.style.backgroundColor = "transparent";
    } 
        
  }; */
    return(
        <>
        <div>
      <header className="white-font">
        <div id="nav" className="content">
          <div className="menu-box mobile-menu">
            <div className="menu-scroll-wrap">
              <div className="main-menu">
                <ul className="menu">
                  <li className="has-sub-menu">
                    <a className="a" href="/suplement">SUPPLEMENT</a>
                  </li>
                  <li className="has-sub-menu">
                    <a className="a" href="#">LASER</a>
                  </li>
                  <li>
                    <a className="a" href="/reviews/">REVIEWS</a>
                  </li>
                  <li>
                    <a className="a" href="/journal/">JOURNAL</a>
                  </li>
                  <li>
                    <a className="a" href="/about/">ABOUT</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="logo-box">
{/*             <a className="logo" href="/">
              <img className="black-logo" src="" alt="LYMA" />
            </a> */}
            <h2 className="logo"><a href="/">MARCO</a></h2>
          </div>
          <div className="menu-box extra-menu desktop-menu">
            <ul className="menu1">
              <li><a className="a" href="/help">HELP &amp; SUPPORT</a></li>
              <li><a className="a" href="/activate/">ACTIVATE</a></li>
              <li><a className="a" href="/login">ACCOUNT</a></li>
              <button className="buy-link">BUY</button>
            </ul>
          </div>
        </div>
      </header>
        </div>
        {/* <div>
  <Navbar
    color="light"
    expand="md"
    fixed="top"
    light
  >
    <NavbarBrand href="/">
      reactstrap
    </NavbarBrand>
    <NavbarToggler  />
    <Collapse navbar>
      <Nav
        className="me-auto"
        navbar
      >
        <NavItem>
          <NavLink href="/components/">
            Components
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">
            GitHub
          </NavLink>
        </NavItem>
        <UncontrolledDropdown
          inNavbar
          nav
        >
          <DropdownToggle
            caret
            nav
          >
            Options
          </DropdownToggle>
          <DropdownMenu right>
            <DropdownItem>
              Option 1
            </DropdownItem>
            <DropdownItem>
              Option 2
            </DropdownItem>
            <DropdownItem divider />
            <DropdownItem>
              Reset
            </DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>
      </Nav>
      <NavbarText>
        Simple Text
      </NavbarText>
    </Collapse>
  </Navbar>
</div> */}
        </>
    )
    
}

