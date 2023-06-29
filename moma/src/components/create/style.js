import { styled } from "styled-components";
import 'react-datepicker/dist/react-datepicker.css';
import DatePicker from 'react-datepicker';

export const ProgressingHeaderWrapper = styled.div`
    display: flex;
    width: 80%;
    text-align: left;
    flex-direction: column;
`
export const ProgressingHeader = styled.h1`
    display: flex;
    color: #000;
    font-size: 42px;
    font-family: Pretendard;
    font-weight: 700;
    letter-spacing: -2.1px;
    line-height: 1.2;


`
export const ProgressingPointWord  = styled.h1`
    display: flex;
    color: var(--color-2, #C02E21);
    font-size: 48px;
    font-family: Pretendard;
    font-weight: 700;
    letter-spacing: -2.4px;
    margin-bottom: 10px;
    `

export const WhatTypeOfManitoWrapper = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 30px;
    justify-content: space-betweens;
    `
export const WhatTypeOfManito = styled.div`

    font-weight: 700;
    letter-spacing: -0.9px;
    display: flex;
    width: 100%;
    padding: 20px 4px;
    justify-content: center;
    align-items: center;
    color: ${props => (props.type ? "#fff" : "var(--color-2, #C02E21)")};
    background-color: ${props => (props.type ? "var(--color-2, #C02E21)" : "#fff")};
    border: ${props => (props.type ? "2px solid #fff" : "2px solid #C02E21")};
    cursor: pointer;
    &:hover {
        border: ${props => (props.type ? "2px solid #C02E21" : "2px solid #fff")};
        color: ${props => (props.type ? "#C02E21" : "#fff")};
        background-color: ${props => (props.type ? "#fff" : "#C02E21")};
    }

    border-radius: 100px;
    
    
`
/*------------------ 스탭 2 ------------------ */

export const WarningContent = styled.p`
color: #000;
font-size: 15px;
font-family: Pretendard;
letter-spacing: -0.75px;
margin-bottom:9px;
`

export const WarningContent2 = styled.p`
color: #676060;
font-size: 15px;
font-family: Pretendard;
letter-spacing: -0.75px;
margin-bottom:9px;
margin-top: 18px;
`



export const TypeBox  = styled.div`
margin: 38px 0px 20px 0px;
width: 40%;

display: flex;


padding: 4px 10px;
flex-direction: column;
align-items: center;
shape-rendering: auto;
border-radius: 6px;
border: 1px solid var(--color-2, #C02E21);
background: var(--color-2, #C02E21);
color: var(--white, #FFF);
font-size: 15px;
font-family: Pretendard;
font-weight: 500;
letter-spacing: -0.75px;
`


export const InputWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 30px;
    
    
    
    
`

export const InputTitle = styled.p`
color: var(--gray-5, #676060);
font-size: 17px;
font-weight: 700;
margin-bottom: 7px;



`
export const InputBox = styled.input`
width: 100%;
height: 50px;
padding-left: 10px;
border : none;
display: inline-flex;
border-radius: 12px;
background: var(--gray-2, #F3EEEF);

align-items: flex-start;
gap: 10px;
margin-bottom: 14px;
`

export const InputBox2 = styled.div`
width: 100%;
height: 30px;
padding-left: 10px;
border : none;
display: flex;
justify-content: start;
align-items: center;
align-content: center;
border-radius: 12px;
padding-top: 10px;
color : #676060;
background: var(--gray-2, #F3EEEF);

align-items: flex-start;
gap: 10px;
margin-bottom: 14px;

`

export const TextAreaBox = styled.textarea`
width: 100%;
padding-top:10px;
appearance: none;
  border: none;
  resize: none;
  outline: none;
  font-family: inherit;
  font-size: inherit;

height: 100px;
padding-left: 10px;
border : none;
display: inline-flex;
border-radius: 12px;
background: var(--gray-2, #F3EEEF);

align-items: flex-start;
gap: 10px;
margin-bottom: 14px;

`



export const StyledDatePicker = styled(DatePicker)`
  width: 100%;
  height: 50px;
  padding-left: 10px;
  border: none;
  display: inline-flex;
  border-radius: 12px;
  background: var(--gray-2, #F3EEEF);
  align-items: flex-start;
  gap: 10px;
  margin-bottom: 14px;
`;


export const ResultTableContainer = styled.div`
    display: grid;
    padding : 14px 20px;
    grid-template-columns: 1fr 3.5fr;
    
    border-radius: 6px;
    /* border: 1px solid var(--gray-3, #E5DEDF); */
    
`
/*------------------ 스탭3 ------------------ */
export const ResultTableContainer2 = styled.div`
    margin-top: 30px;
    padding : 10px 10px;
    color : #332828;
    border-radius: 6px;
    border: 1px solid var(--gray-3, #E5DEDF);
    background-color: #F3EEEF;
    
`
export const ResultTableTitle = styled.h2`
    display: flex;
    justify-content: center;
    ;
    text-align: center;
`