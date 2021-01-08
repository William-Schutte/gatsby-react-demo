import React, { useEffect } from 'react'
import styled from 'styled-components'
import emailBg from '../media/images/river.jpg'
import { Button } from './Button'
import Aos from 'aos'
import 'aos/dist/aos.css'

const Email = () => {
  useEffect(() => {
    Aos.init({})
  }, []);

  return (
    <EmailContainer>
      <EmailContent>
        <h1
          data-aos="fade-down"
          data-aos-delay="0"
          data-aos-duration="1000"
        >Get Access to Offers</h1>
        <p
          data-aos="fade-down"
          data-aos-delay="0"
          data-aos-duration="800"
        >Sign up for our newsletter below to get $100 off your first trip!</p>
        <form action="#">
          <FormWrapper
            data-aos="fade-up"
            data-aos-delay="100"
            data-aos-duration="800"
          >
            <label htmlFor="email">
              <input type="email" placeholder="Email" id="email" />
            </label>
            <Button as="button" type="submit" css={`
              height: 48px; 
              @media screen and (max-width: 768px) {
                width: 100%;
                min-width: 350px;
              }
              @media screen and (max-width: 400px) {
                width: 100%;
                min-width: 250px;
              }
              `}>Sign Up</Button>
          </FormWrapper>
        </form>
      </EmailContent>
    </EmailContainer>
  )
}

export default Email

const EmailContainer = styled.div`
  display: flex;
  background: linear-gradient(180deg, rgba(0,0,0,.4) 0%, rgba(0,0,0,0.65) 35%, rgba(0,0,0,0.65) 65%, rgba(0,0,0,0) 100%), url(${emailBg}) no-repeat center;
  background-size: cover;
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
  input {
    padding: 1rem 1.5rem;
    outline: none;
    width: 350px;
    height: 48px;
    border-radius: 50px;
    border: none;
    margin-right: 1rem;
  }
  
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
