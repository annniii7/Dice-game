import React from 'react'
import styled from 'styled-components'
import { useState } from 'react'
const RollDice = ({currentdice,rolldice}) => {
    
  return (
    <DiceContainer>
    <div className='dice' onClick={rolldice}>
      <img src={`images/dices/dice_${currentdice}.png`} alt="" />
    </div>
    <p>Click on Dice to roll</p>
    </DiceContainer>
  )
}

export default RollDice

const DiceContainer=styled.div`
margin-top: 48px;
display: flex;
flex-direction: column;
align-items: center;
p{
    font-size: 24px;
}
.dice{
    cursor: pointer;
}
`;
