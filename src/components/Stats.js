import React from 'react'
import styled from 'styled-components'

const Stats = () => {
  return (
    <StatsContainer>
      <StatsHeading>What to expect</StatsHeading>
      <StatsWrapper></StatsWrapper>
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
const StatsHeading= styled.div``
const StatsWrapper = styled.div``