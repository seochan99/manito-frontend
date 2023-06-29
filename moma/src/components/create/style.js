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
    `
export const WhatTypeOfManito = styled.div`

    font-weight: 700;
    letter-spacing: -0.9px;
    display: flex;
    width: 100%;
    padding: 20px 2px;
    justify-content: center;
    align-items: center;
    color: ${props => (props.type ? "#fff" : "var(--color-2, #C02E21)")};
    background-color: ${props => (props.type ? "var(--color-2, #C02E21)" : "#fff")};
    border-radius: 100px;
    
    border: ${props => (props.type ? "2px solid #fff" : "2px solid #C02E21")};
`

export const WarningContent = styled.p`
color: #000;
font-size: 15px;
font-family: Pretendard;
letter-spacing: -0.75px;
margin-bottom:9px;

`