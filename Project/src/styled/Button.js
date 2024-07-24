import styled from "styled-components";
export const Button = styled.button`
background-color: black;
color: white;
min-width: 220px;
padding: 10px 18px;
height: 44px;
border-radius: 4px;
font-size: 16px;

&:hover {
   background-color: white;
   color:black;
   transform: 0.5s background-color ease-in;
  }
`;
export const OutlineButton = styled(Button)`
background-color: white;
color: black;
min-width: 220px;
padding: 10px 18px;
height: 44px;
border-radius: 4px;
font-size: 16px;

&:hover {
   background-color: black;
   color:white;
   transform: 0.5s background-color ease-in;
  }
`;

