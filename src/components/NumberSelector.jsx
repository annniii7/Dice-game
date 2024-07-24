import styled from 'styled-components'
import { useState } from 'react';

const NumberSelector = ({error,seterror,selectedNumber,setselectedNumber}) => {
    const arrNumber = [1, 2, 3, 4, 5, 6];

    const Numberselectorhandler=(value)=>{
        setselectedNumber(value)
        seterror("")
    }
    return (
        <NumberSelectorContainer>
            <p className="error">{error}</p>
        <div className='flex'>
            {arrNumber.map((value, i) => (
                <Box isselected={value==selectedNumber} onClick={()=>Numberselectorhandler(value)} key={i}>{value}</Box>
            ))}
        </div>
        <p>Select Number</p>
        </NumberSelectorContainer>
    );
};

export default NumberSelector

const NumberSelectorContainer=styled.div`
display: flex;
flex-direction: column;
align-items: end;
    .flex{
        display: flex;
        gap: 24px;
        cursor:pointer;
    }
    p{
        font-size: 24px;
        font-weight: bold;
    }
    .error{
        color:red;
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
background-color: ${(props)=>props.isselected?"black":"white"};
color: ${(props)=>props.isselected?"white":"black"};
`;
