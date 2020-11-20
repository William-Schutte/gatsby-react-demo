import React from 'react'
import styled from 'styled-components'
import emailBg from '../media/images/afghanistan.jpg'
import { Button } from './Button'

const Email = () => {
  return (
    <EmailContainer>
      <EmailContent>
        <h1>Get Access to Offers</h1>
        <p>Sign up for our newsletter below to get $100 off your first trip!</p>
        <form action="#">
          <FormWrapper>
            <label htmlFor="email">
              <input type="email" placeholder="Email" id="email" />
            </label>
            <Button to="/">Sign Up</Button>
          </FormWrapper>
        </form>
      </EmailContent>
    </EmailContainer>
  )
}

export default Email

const EmailContainer = styled.div`
  display: flex;
  background: linear-gradient(180deg, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.5) 35%, rgba(0,0,0,0.1) 100%), url(${emailBg}) no-repeat center;

  height: 450px;
  width: 100%;
  padding: 5rem calc((100vw - 1300px) / 2);
  color: #fff;
  justify-content: center;
  align-items: center;
`
const EmailContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    text-align: center;
    margin-bottom: 1rem;
    font-size: clamp(1rem, 5vw, 3rem);
    padding: 0 1rem;

  }
  p {
    text-align: center;
    font-size: clamp(1rem, 2.5vw, 1.5rem);
    padding: 0 1rem;
    margin-bottom: 2rem;
  }

  form {
    z-index: 5;
  }
`
const FormWrapper = styled.div`
  padding: 1rem 1.5rem;
  outline: none;
  width: 350px;
  height: 48px;
  border-radius: 50px;
  border: none;
  margin-right: 1rem;
  
  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    padding: 0 1rem;

    input {
      margin-bottom: 1rem;
      width: 100%;
      margin-right: 0;
    }
  }
`
