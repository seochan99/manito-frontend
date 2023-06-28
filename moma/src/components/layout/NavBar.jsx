import React from 'react'

import { styled } from "styled-components"



const Container = styled.nav`
    height: 56px;
    display: flex;
    align-items: center;
    position: relative;
    justify-content: space-between;
    padding: 16px;
    border-bottom: 1px solid #E5E5E5;

`

const Title = styled.div`
    font-size: 24px;
`

export default function NavBar() {
  return (
    <Container>
        <Title>
          
            모두의 마니또, 모마
        </Title>
    
    </Container>
    
  )
}
