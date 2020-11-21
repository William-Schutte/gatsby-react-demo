import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

const Footer = () => {
  return (
    <FooterContainer>
      <FooterLinksWrapper>
        <FooterHeader>
          <h1>ADVENT(ur)</h1>
          <p>Explore new worlds, Experience new cultures, Live new life.</p>
        </FooterHeader>
        <FooterLinkItems>
          <FooterLinkTitle>About</FooterLinkTitle>
          <FooterLink to="/">How ADVENT(ur) works</FooterLink>
          <FooterLink to="/">Latest news</FooterLink>
          <FooterLink to="/">Safety Guarantee</FooterLink>
          <FooterLink to="/">Accessibility</FooterLink>
        </FooterLinkItems>
      </FooterLinksWrapper>
      <FooterLinksWrapper>
        <FooterLinkItems>
          <FooterLinkTitle>Details</FooterLinkTitle>
          <FooterLink to="/">Privacy</FooterLink>
          <FooterLink to="/">Terms</FooterLink>
          <FooterLink to="/">Feedback</FooterLink>
          <FooterLink to="/">Legal</FooterLink>
        </FooterLinkItems>
        <FooterLinkItems>
          <FooterLinkTitle>Contact</FooterLinkTitle>
          <FooterLink to="/">Headquarters</FooterLink>
          <FooterLink to="/">Help Center</FooterLink>
          <FooterLink to="/">Careers</FooterLink>
          <FooterLink to="/">Sponsor</FooterLink>
        </FooterLinkItems>
      </FooterLinksWrapper>
    </FooterContainer>
  )
}

export default Footer

const FooterContainer = styled.div`
  padding: 5rem calc((100vw - 1100px) / 2);
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  color: #39311d;
  background: #fff;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

const FooterLinksWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  @media screen and (max-width: 450px) {
    grid-template-columns: 1fr;
  }
`

const FooterHeader = styled.div`
  padding: 0 2rem;
  
  h1 {
    margin-bottom: 2rem;
    color: #39311d;

    @media screen and (max-width: 400px) {
      padding: 1rem;
    }
  }
`

const FooterLinkItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 1rem 2rem;
  
  @media screen and (max-width: 400px) {
    padding: 1rem;
  }
`

const FooterLinkTitle = styled.h2`
  font-size: 14px;
  margin-bottom: 16px;
  color: #39311d;
`

const FooterLink = styled(Link)`
  text-decoration: none;
  margin-bottom: 0.5rem;
  font-size: 14px;
  color: #7e7474;
  transition: 0.3s ease-out;

  &:hover {
    color: #39311d;
  }
`