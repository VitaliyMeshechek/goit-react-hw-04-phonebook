import styled from 'styled-components';

export const Form = styled.form
`display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 10px;
width: 600px;
border-radius: 5px;
box-shadow: 3px 1px 3px 3px rgba(0, 0, 0, 0.2),
0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
margin-bottom: 16px;
margin-left: 5px;
`;







export const Label = styled.label
`display: flex;
flex-direction: column;
font-weight: 500;
font-size: 22px;
line-height: 1.18;
margin-bottom: 16px;
cursor: pointer;
`;

export const Input = styled.input
`color: rgb(23, 23, 24);
font-weight: 500;
font-size: 22px;
line-height: 1.18;
padding: 5px;
border-radius: 4px;
border: 1px solid rgb(189, 189, 189);
width: 500px;
outline: 0;
&:focus {
  border: 1px solid rgb(43, 50, 178);
}
`;

export const Button = styled.button
`display: flex;
align-items: center;
justify-content: center;
color: #fff;
background-color: rgb(48, 213, 200);
font-weight: 500;
font-size: 22px;
line-height: 1.18;
border: 0;
outline: 0;
padding: 8px 24px;
border-radius: 4px;
cursor: pointer;
box-shadow: 1px 2px 1px 1px rgba(0, 0, 0, 0.05);
text-transform: uppercase;
user-select: none;
transition: background-color 400ms ease-in-out, box-shadow 400ms ease-in-out;
&:hover {
  box-shadow: 0px 2px 1px 1px rgba(0, 0, 0, 0.15);
  background-color: rgb(48, 63, 159);
}
`;
