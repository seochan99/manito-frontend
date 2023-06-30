import React from "react";
import * as S from "./style";
import {
    LoginTotalManitoCounter,
    LoginTotalManitoCounterTitle,
    LoginTotalManitoCounterWrap,
} from "../../pages/Auth/style";
import Moma from "../../assets/images/Moma.png";
// done페이지
export default function Step4({ peoples, userCnt, setStep }) {
    console.log(userCnt);

    return (
        <>
            <S.DonePageWrapper>
                <S.DonePageObjectWrapper></S.DonePageObjectWrapper>
                <img
                    src={Moma}
                    style={{
                        width: "270px",
                        height: "270px",
                        objectFit: "cover",
                    }}
                ></img>
                <S.ProgressingPointContent style={{ textAlign: "center" }}>
                    <strong
                        style={{
                            color: "#C02E21",
                            fontSize: "60px",
                            fontWeight: "700",
                        }}
                    >
                        {peoples.length}명
                    </strong>
                    의
                    <br /> 새로운 마니또가
                    <br /> 매칭되었습니다!
                </S.ProgressingPointContent>

                <LoginTotalManitoCounterWrap style={{ marginBottom: "20px" }}>
                    <LoginTotalManitoCounterTitle>
                        현재까지 탄생한 마니또
                    </LoginTotalManitoCounterTitle>
                    <LoginTotalManitoCounter>
                        {userCnt} 명
                    </LoginTotalManitoCounter>
                </LoginTotalManitoCounterWrap>

                <S.GoHome
                    onClick={() => {
                        window.location.href = "/";
                    }}
                >
                    홈으로
                </S.GoHome>
            </S.DonePageWrapper>
        </>
    );
}
