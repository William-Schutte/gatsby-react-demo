import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import { Button } from './Button'
import { FaTimes } from 'react-icons/fa'
import { menuData } from '../data/MenuData'


const Dropdown = ({ isOpen, toggleOpen }) => {
  return (
    <DropdownContainer isOpen={isOpen} onClick={toggleOpen}>
      <Icon>
        <CloseIcon />
      </Icon>
      <DropdownWrapper>
        <DropdownMenu>
          {menuData.map((itm, index) => (
            <DropdownLink to={itm.link} key={index}>{itm.title}</DropdownLink>
          ))}
        </DropdownMenu>
        <BtnWrapper>
          <Button round="true" to="trips">Book a Trip</Button>
        </BtnWrapper>
      </DropdownWrapper>
    </DropdownContainer>
  )
}

export default Dropdown

const DropdownContainer = styled.aside`
  position: fixed;
  z-index: 10;
  width: 100%;
  height: 100%;
  background: #0d0d0d;
  display: grid;
  align-items: center;
  left: 0;
  top: 0;
  transition: 0.3s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? "1" : "0")};
  top: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
`

const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
`

const CloseIcon = styled(FaTimes)`
  color: #fff;
  `
const DropdownWrapper = styled.div`
  color: #fff;

`
const DropdownMenu = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(4, 80px);
  text-align: center;

  @media screen and (max-width: 480px) {
    grid-template-rows: repeat(4, 60px);
  }
`

const DropdownLink = styled(Link)`
  text-decoration: none;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  font-size: 1.5rem;
  list-style: none;
  cursor: pointer;
  align-self: center;
  transition: 0.2s ease-in-out;

  &:hover {
    color: #C76C1F;
  }
`

const BtnWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 4rem;
`