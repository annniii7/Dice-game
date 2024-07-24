import React from 'react'
import styled from 'styled-components'
const ScoreContainer=styled.div`
max-width: 200px;
text-align: center;
h1{
    
    font-size: 100px;
    line-height: 100px;
    font-weight: 500;
    font-style: normal;
}
p{
    font-size: 24px;
}
    
`;
const TotalScore = () => {
  return (
    <ScoreContainer>
      <h1>0</h1>
      <p>Total Score</p>
    </ScoreContainer>
  )
}

export default TotalScore
