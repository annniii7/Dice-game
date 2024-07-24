import React from 'react'
import styled from 'styled-components'

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
const Button = styled.button`
background-color: black;
color: white;
min-width: 220px;
padding: 10px 18px;
height: 44px;
border-radius: 4px;
position: absolute;
right: 150px;
font-size: 16px;

&:hover {
   background-color: white;
   color:black;
   transform: 0.5s background-color ease-in;
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
