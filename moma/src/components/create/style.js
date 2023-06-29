import { styled } from "styled-components";


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

export const WarningContent = styled.p`
color: #000;
font-size: 15px;
font-family: Pretendard;
letter-spacing: -0.75px;
margin-bottom:9px;
`


export const TypeBox  = styled.div`
margin-top: 38px;
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