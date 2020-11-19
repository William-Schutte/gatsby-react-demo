import styled from 'styled-components';
import { Link } from 'gatsby';

export const Button = styled(Link)`
  background: ${({ primary }) => (primary ? '#2a3d66' : '#5d54a4')};
  white-space: nowrap;
  color: #fff;
  padding: ${({ big }) => (big ? '16px 40px' : '10px 32px')};
  font-size: ${({ big }) => (big ? '20px' : '16px')};
  outline: none;
  border: none;
  min-width: 100px;
  cursor: pointer;
  text-decoration: none;
  transition: 0.3s !important;
  border-radius: ${({ round }) => (round ? '50px' : 'none')};

  &:hover {
    background: ${({ primary }) => (primary ? '#5d54a4' : '#2a3d66')};
  }
`

// This is a globally used styled button component. Variable properties take destructured parameters
// into the functions and return the style string based on its presence. 