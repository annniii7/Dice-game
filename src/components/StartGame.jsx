import React from 'react'
import styled from 'styled-components'
import { Button } from '../styled/Button';

const Container = styled.div`
max-width: 1182px;
height: 100vh;
margin:0 auto;
display: flex;
align-items: center;

.content{
    h1{
        font-size: 96px;
        white-space: nowrap;
        font-family: "Poppins", sans-serif;
        font-weight: 700;
        font-style: normal;
        /* position: relative; */
       
    }
}
`;


const StartGame = ({toggle}) => {
    return (
        <Container>
            <div>
                <img src="images/dices.png" alt="" />
            </div>
            <div className='content'>
                <h1>DICE GAME</h1>
                <Button onClick={toggle}>Play Now</Button>
                </div>
        </Container>
    )
}

export default StartGame
