import React from 'react'
import styled from 'styled-components'
const Rules = () => {
  return (
    <RulesContainer>
        <div className='text'>
            <h2>How to play dice game</h2>
            <p>Select any number</p>
            <p>Click on dice image</p>
            <p>after click on  dice  if selected number is equal to dice number you will get same point as dice </p>
            <p>if you get wrong guess then  2 point will be dedcuted</p>
        </div>
      
    </RulesContainer>
  )
}

export default Rules

const RulesContainer=styled.div`
    background-color: bisque;
    padding: 20px;
    margin: 0 auto;
    max-width: 800px;
    margin-top: 20px;
    margin-bottom: 10px;
    position: fixed;
    top:300px ;
    left: 400px;
    h2{
        font-size: 24px;
    }
    .text{
    margin-top: 24px;
    }
`
