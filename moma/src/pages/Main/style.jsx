import { styled } from "styled-components";

export const MainWrapper = styled.div`
    width: 390px;
    max-width: 390px;
    background: #fbfbfb;
    padding: 30px 21px;
`;

export const MainHeader = styled.div`
    margin: 0px 9px;
    margin-bottom: 30px;
`;

export const MainLogo = styled.div`
    margin-bottom: 6px;
    font-size: 24px;
    font-weight: bold;
`;

export const MainHeaderText = styled.div`
    font-size: 18px;
`;

export const MainBody = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const MainCreateManito = styled.div`
    width: 100%;
    height: 188px;
    background: linear-gradient(45deg, #9d1525, #d57644);
    border-radius: 12px;
    box-shadow: 0px 2px 20px #ffbcbc;
    margin-bottom: 30px;
`;

export const MainCreateManitoTitle = styled.div`
    position: relative;
    left: 30px;
    top: 30px;
    color: #fbfbfb;
    font-size: 24px;
`;

export const MainMyManito = styled.div`
    margin: 0 9px;
    width: calc(100% - 18px);
`;

export const MainMyManitoTitle = styled.div`
    margin-bottom: 12px;
    font-size: 21px;
    font-weight: bold;
`;

export const MainMyManitoList = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`;

export const MainMyManitoItem = styled.div`
    width: 330px;
    max-width: 330px;
    padding: 15px;
    margin-bottom: 12px;
    background: #ffffff;
    border-radius: 12px;
    box-shadow: 0px 2px 12px rgba(102, 102, 86, 0.1);
`;

export const MainMyManitoItemTags = styled.div`
    display: flex;
    flex-direction: row;
    margin-bottom: 9px;
`;

export const MainMyManitoItemTag = styled.div`
    margin-right: 6px;
    padding: 3px 9px;
    background: #9d1525;
    border-radius: 6px;
    color: #fbfbfb;
    font-size: 15px;
`;

export const MainMyManitoItemTitle = styled.div`
    font-size: 24px;
    font-weight: bold;
`;

export const MainMyManitoItemPeriod = styled.div`
    font-size: 15px;
    color: #676060;
`;
