import React from 'react'

import { styled } from "styled-components"
import LogoImg from "../../assets/images/Logo.png"



const Container = styled.nav`
    height: 56px;
    display: flex;
    align-items: center;
    position: relative;
    justify-content: space-between;
    padding: 16px;
    /* border-bottom: 1px solid #E5E5E5; */

`
const Logo = styled.img`
    width: 65%;
`


export default function NavBar() {
  return (
    <Container>
        <Logo src={LogoImg} alt="Logo" />
    
    </Container>
    
  )
}
