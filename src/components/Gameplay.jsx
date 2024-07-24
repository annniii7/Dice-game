import React from 'react'
import TotalScore from './TotalScore'
import NumberSelector from './NumberSelector'
import styled from 'styled-components'
import RollDice from './RollDice'
import { useState } from 'react'
import { Button, OutlineButton } from '../styled/Button'
import Rules from './Rules'

const Gameplay = () => {
    const [showrules, setshowrules] = useState(false)
    const [score, setscore] = useState(0)
    const [selectedNumber, setselectedNumber] = useState()
    const [currentdice, setcurrentdice] = useState(1)
    const [error, seterror] = useState()
    const generateRandomNumber=(min,max)=>{
        return Math.floor(Math.random()*(max-min)+min) ;
    }

    const rolldice=()=>{
        if(!selectedNumber){
            seterror("You have not selected any number")
            return
        } ;
        const random=generateRandomNumber(1,7);
        setcurrentdice((prev)=>random)
        if(selectedNumber===random){
            setscore((prev)=>prev+random)
        }
        else{
            setscore((prev)=>prev-2)
        }

        setselectedNumber(undefined)
    }

  return (
    <MainContainer>
        <div className='top_section'>
      <TotalScore score={score}/>
      <NumberSelector error={error} seterror={seterror} selectedNumber={selectedNumber} setselectedNumber={setselectedNumber} />
      </div>
      <RollDice currentdice={currentdice} rolldice={rolldice}  />
      <div className="btns">
        <OutlineButton onClick={()=>setscore(0)}>Reset</OutlineButton>
        <Button  onClick={()=>setshowrules(prev=>!prev)}>{showrules?"Hide":"Show"} Rules</Button>
        </div>
        {showrules && <Rules/>}
    </MainContainer>
  )
}

export default Gameplay

const MainContainer=styled.main`
padding-top: 70px;
.top_section{
    display:flex ;
    justify-content: space-around;
    align-items: end;
}
.btns{
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap:5px
}
 
`;