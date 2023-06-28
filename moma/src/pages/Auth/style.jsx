import { styled } from "styled-components";

export const AuthLoginWrapper = styled.div`
    display: flex;
    flex-direction: column;
    

`
export const AuthLoginInputWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

`
export const AuthLoginInputHeader = styled.h1`
    width: 324px;
    display: flex;
    justify-content: start;
    

    
    color: var(--white, #FFF);
    font-size: 12px;
    letter-spacing: -0.3px;
    margin-bottom: 7px;
    margin-top: 10px;


`


export const AuthLoginInputBody = styled.input`
    
    width: 324px;
    height: 48px;
    flex-shrink: 0;
    border-radius: 6px;
    border: 1px solid #39768D;
    background: #1E4154;
    color : white;
    


`