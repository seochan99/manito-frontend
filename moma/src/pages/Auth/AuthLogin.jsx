import React, { useEffect, useState } from "react";
import {
    LoginAccountFuncSignup,
    LoginAccountFuncReset,
    LoginAccountFuncWrap,
    LoginHeader,
    LoginHeaderMainWording,
    LoginHeaderSubWording,
    LoginImgBox,
    LoginInputList,
    LoginInputText,
    LoginInputTitle,
    LoginInputWrap,
    LoginSubmitButton,
    LoginWrapper,
    LoginBody,
    LoginTotalManitoCounterWrap,
    LoginTotalManitoCounterTitle,
    LoginTotalManitoCounter,
} from "./style";
import { useNavigate } from "react-router-dom";

export default function AuthLogin() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [totalManito, setTotalManito] = useState(0);

    const navigate = useNavigate();
    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };
    useEffect(() => {
        setTotalManito(1000);
    }, []);

    return (
        <LoginWrapper>
            <LoginHeader>
                <LoginHeaderSubWording>
                    한번의 가입, 모두의 즐거움!
                </LoginHeaderSubWording>
                <LoginHeaderMainWording>
                    모두의 마니또, 모마!
                </LoginHeaderMainWording>
            </LoginHeader>
            <LoginBody>
                <LoginImgBox />
                <LoginInputList>
                    <LoginInputWrap>
                        <LoginInputTitle>메일</LoginInputTitle>
                        <LoginInputText
                            placeholder="메일을 입력해주세요."
                            onChange={handleEmailChange}
                            value={email}
                        />
                    </LoginInputWrap>
                    <LoginInputWrap>
                        <LoginInputTitle>비밀번호</LoginInputTitle>
                        <LoginInputText
                            placeholder="비밀번호를 입력해주세요."
                            onChange={handlePasswordChange}
                            value={password}
                        />
                    </LoginInputWrap>
                </LoginInputList>
                <LoginSubmitButton>로그인</LoginSubmitButton>
                <LoginAccountFuncWrap>
                    <LoginAccountFuncSignup>회원가입</LoginAccountFuncSignup>
                    <LoginAccountFuncReset>
                        비밀번호 초기화
                    </LoginAccountFuncReset>
                </LoginAccountFuncWrap>
                <LoginTotalManitoCounterWrap>
                    <LoginTotalManitoCounterTitle>
                        현재까지 탄생한 마니또
                    </LoginTotalManitoCounterTitle>
                    <LoginTotalManitoCounter>
                        {totalManito} 명
                    </LoginTotalManitoCounter>
                </LoginTotalManitoCounterWrap>
            </LoginBody>
        </LoginWrapper>
    );
}
