import styled from 'styled-components'
import { useState } from 'react';

const NumberSelectorContainer=styled.div`
display: flex;
flex-direction: column;
align-items: end;
    .flex{
        display: flex;
        gap: 24px;
    }
    p{
        font-size: 24px;
        font-weight: bold;
    }
`;
const Box = styled.div`
width: 72px;
height: 72px;
border: 1px solid black;
display: grid;
place-items: center;
font-size: 24px;
font-weight: bold;
background-color: ${(props)=>props.isSelected?"black":"white"};
color: ${(props)=>props.isSelected?"white":"black"};
`;
const NumberSelector = () => {
    const [selectedNumber, setselectedNumber] = useState()
    const arrNumber = [1, 2, 3, 4, 5, 6];
    return (
        <NumberSelectorContainer>
        <div className='flex'>
            {arrNumber.map((value, i) => (
                <Box isSelected={value==selectedNumber} onClick={()=>setselectedNumber(value)} key={i}>{value}</Box>
            ))}
        </div>
        <p>Select Number</p>
        </NumberSelectorContainer>
    );
};

export default NumberSelector
