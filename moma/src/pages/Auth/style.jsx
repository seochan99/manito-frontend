import { styled } from "styled-components";

export const AuthLoginWrapper = styled.div`
    display: flex;
    flex-direction: column;
`;
export const AuthLoginInputWrapper = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const AuthLoginInputHeader = styled.h1`
    width: 324px;
    display: flex;
    justify-content: start;

    color: var(--white, #fff);
    font-size: 12px;
    letter-spacing: -0.3px;
    margin-bottom: 7px;
    margin-top: 10px;
`;

export const AuthLoginInputBody = styled.input`
    padding-left: 10px;
    width: 314px;
    height: 48px;
    flex-shrink: 0;
    border-radius: 6px;
    border: 1px solid #39768d;
    background: #fbfbfb;
    color: white;
`;

export const AuthLoginText = styled.p`
    color: #aeafb9;
    margin-bottom: 8px;
`;

export const AuthLoginTextLink = styled.p`
    color: #ffffff;
    // 밑줄
    text-decoration: underline;
    cursor: pointer;
    margin-bottom: 13px;
`;
export const AuthLoginTextWrapper = styled.div`
    margin-top: 24px;
    display: flex;
    flex-direction: column;

    align-items: center;
`;
export const TotalManitoWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 24px;
`;
export const TotalManitoLogo = styled.img`
    width: 60%;

    object-fit: contain;
    margin-top: 24px;
`;

export const TotalManitoContainer = styled.div`
    margin: 30px 0px;
    width: 342px;
    padding: 12px;
    border-radius: 6px;
    background: #fbfbfb;
    color: var(--white, #fff);
    text-align: right;
    font-size: 24px;
    /* font-family: Leferi Point Type; */
    display: flex;
    justify-content: end;
    align-items: center;
`;

export const SignUpHeaderImgBox = styled.img`
    width: 60%;

    position: absolute;
    top: 200px;
`;

export const SignupWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const AuthLoginBtn = styled.button`
    display: flex;
    width: 334px;
    padding: 12px;
    justify-content: center;
    align-items: center;
    border-radius: 12px;
    border: 1px solid #c02e21;
    background: #fbfbfb;
    margin-top: 20px;
    color: #fff;
    text-align: center;
    font-size: 18px;
`;
