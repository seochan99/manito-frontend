import React from 'react'
import { ReactComponent as Logo2 } from "../../assets/icons/mainlogo.svg";
import { styled } from "styled-components"



const Container = styled.nav`
    height: 56px;
    font-size: 24px;
    font-weight: 700;
    display: flex;
    align-items: center;
    position: relative;
    justify-content: space-between;
    padding: 16px;

`


export default function NavBar() {
  
  return (
    <Container onClick={()=>{
    }}>
      {/* <Logo2/> */}
      모마

    
    </Container>
    
  )
}
