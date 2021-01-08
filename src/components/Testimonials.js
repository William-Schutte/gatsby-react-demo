import React, { useEffect } from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'
import { IoMdCheckmarkCircleOutline } from 'react-icons/io'
import { FaRegLightbulb } from 'react-icons/fa'
import { useStaticQuery, graphql } from 'gatsby'
import Aos from 'aos'
import 'aos/dist/aos.css'

const Testimonials = () => {
  useEffect(() => {
    Aos.init({})
  }, []);


  const data = useStaticQuery(graphql`
    query {
      allFile(filter: {ext: {regex: "/(jpg)|(png)/"}, name: {regex: "/(portrait)/"}}) {
        edges {
          node {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `);

  return (
    <TestimonialsContainer>
      <TestimonialsTitle
        data-aos="fade-right"
        data-aos-delay="50"
        data-aos-duration="1000"
      >Testimonials</TestimonialsTitle>
      <TestimonialsSubtitle
        data-aos="fade-right"
        data-aos-delay="50"
        data-aos-duration="1000"
      >Hear from recent Advent(ur)ers</TestimonialsSubtitle>
      <TestimonialsWrapper>
        <LeftCol>
          <Testimonial
            data-aos="fade-right"
            data-aos-delay="150"
            data-aos-duration="1200"
          >
            <IoMdCheckmarkCircleOutline css={`color: #39311d; font-size: 2rem; margin-bottom: 1rem;`} />
            <h3>Brandon Brandonton</h3>
            <p>"Never been so far from home and I absolutely loved it! Had tons of fun with everyone on the trip and saw some amazing wonders of the world."</p>
          </Testimonial>
          <Testimonial
            data-aos="fade-right"
            data-aos-delay="250"
            data-aos-duration="1200"
          >
            <FaRegLightbulb css={`color: #39311d; font-size: 2rem; margin-bottom: 1rem;`} />
            <h3>Shel Mitchelson</h3>
            <p>"I didn't think giant adventures like this could be so accessible and safe. I also made some lifelong friends along the way. Thanks Advent(ur)!"</p>
          </Testimonial>
        </LeftCol>
        <RightCol
          data-aos="fade-down"
          data-aos-delay="200"
          data-aos-duration="1200">
          {data.allFile.edges.map((image, index) => (
            <div
              data-aos="fade-down"
              data-aos-delay={`${400 - index * 200}`}
              data-aos-duration="1400"
              key={index}
            >
              <Image fluid={image.node.childImageSharp.fluid} alt="User image" />
            </div>

          ))}
        </RightCol>
      </TestimonialsWrapper>
    </TestimonialsContainer>
  )
}

export default Testimonials

const TestimonialsContainer = styled.div`
  width: 100%;
  background: #DEC6A9;
  color: #000;
  padding: 5rem calc((100vw - 1300px) / 2);
  height: 100%;

  @media screen and (max-width: 768px) {
    padding-top: 2rem;
    padding-bottom: 2rem; 
  }
`

const TestimonialsTitle = styled.p`
  color: #000;
  font-size: 1rem;
  padding-left: 2rem;
  margin-bottom: .75rem;
`

const TestimonialsSubtitle = styled.p`
  text-align: start;
  padding-left: 2rem;
  margin-bottom: 4rem;
  font-size: clamp(1.5rem, 5vw, 2rem);
  font-weight: bold;
  @media screen and (max-width: 768px) {
    margin-bottom: 1.5rem;
  }
`

const TestimonialsWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 0 2rem;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`
const LeftCol = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr;

`
const RightCol = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-top: 2rem;
  gap: 10px;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`
const Testimonial = styled.div`
  padding-top: 1rem;
  padding-right: 2rem;

  h3 {
    margin-bottom: 1rem;
    font-size: 1.5rem;
    font-style: italic;
    color: #39311d;
  }

  p {
    color: #3b3b3b;
    font-size: 1.25rem;
    line-height: 1.5rem;

    @media screen and (max-width: 768px) {
      font-size: 1rem;
    }
  }
`

const Image = styled(Img)`
  border-radius: 10px;
  height: 100%;
`