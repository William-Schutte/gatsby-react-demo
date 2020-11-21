import styled from 'styled-components';
import { Link } from 'gatsby';

export const Button = styled(Link)`
  background: ${({ primary }) => (primary ? '#2a3d66' : '#fff')};
  white-space: nowrap;
  color: ${({ primary }) => (primary ? '#fff' : '#39311d')};
  padding: ${({ big }) => (big ? '16px 40px' : '10px 32px')};
  font-size: ${({ big }) => (big ? '20px' : '16px')};
  outline: none;
  border: none;
  min-width: 100px;
  cursor: pointer;
  text-decoration: none;
  transition: 0.3s !important;
  border-radius: 50px;

  &:hover {
    background: ${({ primary }) => (primary ? '#c4b6b6' : '#7e7474')};
    color: ${({ primary }) => (primary ? '#000' : '#fff')}
  }
`

// This is a globally used styled button component. Variable properties take destructured parameters
// into the functions and return the style string based on its presence. 