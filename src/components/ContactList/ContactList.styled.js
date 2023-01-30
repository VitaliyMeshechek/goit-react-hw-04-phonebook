import styled from 'styled-components';

export const List = styled.ul
`display: flex;
flex-direction: column;
list-style: none;
justify-content: start;
align-items: center;
width: 550px;
`;

export const Item = styled.li
`display: flex;
justify-content: center;
align-items: center;
width: 100%;
padding: 12px;
box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2),
  0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);
`;

export const Button = styled.button
`font-weight: 500;
font-size: 22px;
line-height: 1.18;
width: 100px;
border-radius: 5px;
padding: 3px 2px;
margin-left: 10px;
cursor: pointer;
background-color: rgb(48, 213, 200);
&:hover {
  box-shadow: 0px 2px 1px 1px rgba(0, 0, 0, 0.15);
  background-color: rgb(48, 63, 159);
  color: #fff;
}
`
export const Data = styled.p
`font-weight: 500;
font-size: 22px;
line-height: 1.18;
`;
