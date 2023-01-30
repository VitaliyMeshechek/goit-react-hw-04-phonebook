import styled from 'styled-components';

export const Container = styled.div
`display: flex;
justify-content: start;
align-items: center;
`;

export const Label = styled.label
`display: flex;
font-weight: 500;
font-size: 22px;
line-height: 1.18;
padding-left: 15px;
margin-bottom: 16px;
cursor: pointer;
`;

export const Input = styled.input
`color: rgb(23, 23, 24);
font-weight: 500;
font-size: 22px;
line-height: 1.18;
padding: 5px;
margin-left: 5px;
border-radius: 4px;
border: 1px solid rgb(189, 189, 189);
width: 350px;
outline: 0;
&:focus {
  border: 1px solid rgb(43, 50, 178);
}
`;
