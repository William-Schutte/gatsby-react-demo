import React from 'react'
import styled from 'styled-components'
import statsData from '../data/StatsData'


const Stats = () => {
  return (
    <StatsContainer>
      <StatsHeading>What to expect</StatsHeading>
      <StatsWrapper>
        {statsData.map((item, index) => (
          <StatsBox key={index}>
            <StatIcon>{item.icon}</StatIcon>
            <StatTitle>{item.title}</StatTitle>
            <StatDescription>{item.desc}</StatDescription>
          </StatsBox>
        ))}
      </StatsWrapper>
    </StatsContainer>
  )
}

export default Stats

const StatsContainer = styled.div`
  width: 100%;
  background-color: #fff;
  color: #000;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 4rem calc((100vw - 1300px) / 2);
`
const StatsHeading = styled.div`
  text-align: start;
  font-size: clamp(1.5rem, 5vw, 2rem);
  margin-bottom: 3rem;
  padding: 0 2rem;
  @media screen and (max-width: 768px) {
    margin-bottom: 1.5rem;
  }
`
const StatsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
  @media screen and (max-width: 400px) {
    grid-template-columns: 1fr;
  }
`

const StatsBox = styled.div`
  height: 100%;
  width: 100%;
  padding: 2rem;
`
const StatIcon = styled.div`
  font-size: 3rem;
  margin-bottom: 1rem;
`
const StatTitle = styled.p`
  font-size: clamp(1rem, 2.5vw, 1.5rem);
  margin-bottom: 0.5rem;
`
const StatDescription = styled.p`
  font-size: 1rem;
`