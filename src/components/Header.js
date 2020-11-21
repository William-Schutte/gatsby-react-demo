import React, { useState, useEffect } from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { GiHamburgerMenu } from 'react-icons/gi'
import { menuData } from '../data/MenuData'
import { Button } from "./Button"

const Header = ({ toggleOpen }) => {
  const [navColor, setNavColor] = useState(false);
  
  useEffect(() => {
    if (window.location.pathname) {
      setNavColor(window.location.pathname);
    }
  }, [])
  
  return (
    <Nav navColor={navColor}>
      <NavLink to="/">ADVENT(ur)</NavLink>
      <Bars onClick={toggleOpen} />
      <NavMenu>
        {menuData.map((itm, index) => (
          <NavLink to={itm.link} key={index}>{itm.title}</NavLink>
        ))}
      </NavMenu>
      <NavBtn>
        <Button primary={(navColor === "/" ? true : false)} to="/trips">Book a Flight</Button>
      </NavBtn>
    </Nav>
  )
};

export default Header

const Nav = styled.nav`
  background: ${({navColor}) => (navColor !== "/") ? "#39311d" : "transparent"};
  height: 80px;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem calc((100vw - 1300px) / 2);
  z-index: 5;
  position: relative;
`

const NavLink = styled(Link)`
  color: #fff;
  font-weight: bold;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
`

const Bars = styled(GiHamburgerMenu)`
  display: none;
  color: #fff;
  
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`

const NavMenu = styled.div`
  display: flex;
  align-items: center;

  @media screen and (max-width: 758px) {
    display: none;
  }
`

const NavBtn = styled.div`
  display: flex;
  align-self: center;
  margin-right: 24px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`
