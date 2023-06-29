import React from "react";
// import { ReactComponent as Logo2 } from "../../assets/icons/mainlogo.svg";
import Logo from "../../assets/images/LogoImg.png";
import { styled } from "styled-components";

const Container = styled.nav`
    height: 56px;
    font-size: 24px;
    font-weight: 700;
    display: flex;
    align-items: center;
    position: relative;
    justify-content: space-between;
    padding: 16px;
`;

const NavImg = styled.img`
    width: 100px;
    height: 68px;
    object-fit: cover;
`;

export default function NavBar() {
    return (
        <Container
            onClick={() => {
                window.location.href = "/";
            }}
        >
            <NavImg src={Logo} alt="logo" />
        </Container>
    );
}
