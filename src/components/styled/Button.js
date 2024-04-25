import styled from "styled-components";

export const Button = styled.button`
color: white;
padding: 10px 18px;
background: black;
border-radius: 5px;
min-width: 220px;
border: 1px solid transparent;
font-size: 16px;
cursor: pointer;
transition: 0.3s background ease-in;

&:hover{
    background-color: white;
    border: 1px solid black;
    color: black;

    transition: 0.3s background ease-in;

}
`;

export const OutlineButton = styled(Button)`
border: 1px solid black;
background-color: white;
color: black;

&:hover {
    background-color: black;
    border: 1px solid transparent;
    color: white;

    

}`;