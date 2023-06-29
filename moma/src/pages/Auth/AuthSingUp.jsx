import React, { useState, useEffect } from "react";
import {
    SignupHeader,
    SignupBody,
    SignupInputHints,
    SignupInputHint,
    SignupInputText,
    SignupInputTitle,
    SignupTitle,
    SignupWrapper,
    SingupInputList,
    SingupInputWrap,
    SignupSubmitButton,
} from "./style";

export default function AuthSingUp() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [lenPassword, setLenPassword] = useState(false);
    const [effPassword, setEffPassword] = useState(false);
    const [eqPassword, setEqPassword] = useState(false);

    const handleNameChange = (e) => {
        setName(e.target.value);
    };
    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };
    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
        checkLenPassword(e.target.value);
        checkEffPassword(e.target.value);
        checkEqPassword(e.target.value, confirmPassword);
    };
    const handleConfirmPasswordChange = (e) => {
        setConfirmPassword(e.target.value);
        checkEqPassword(password, e.target.value);
    };

    function checkLenPassword(pw) {
        if (pw.length < 8) {
            setLenPassword(false);
        } else {
            setLenPassword(true);
        }
    }
    function checkEffPassword(pw) {
        let num = pw.search(/[0-9]/g);
        let eng = pw.search(/[a-z]/gi);
        let spe = pw.search(/[`~!@@#$%^&*|₩₩₩'₩";:₩/?]/gi);
        if (pw.search(/\s/) != -1) {
            setEffPassword(false);
        } else if (
            (num < 0 && eng < 0) ||
            (eng < 0 && spe < 0) ||
            (spe < 0 && num < 0)
        ) {
            setEffPassword(false);
        } else {
            setEffPassword(true);
        }
    }

    function checkEqPassword(pw, cpw) {
        if (pw != "" && cpw != "" && pw == cpw) {
            setEqPassword(true);
        } else {
            setEqPassword(false);
        }
    }

    return (
        <SignupWrapper>
            <SignupHeader>
                <SignupTitle>회원가입</SignupTitle>
            </SignupHeader>
            <SignupBody>
                <SingupInputList>
                    <SingupInputWrap>
                        <SignupInputTitle>이름</SignupInputTitle>
                        <SignupInputText
                            placeholder="이름을 입력해주세요."
                            onChange={handleNameChange}
                            required
                        ></SignupInputText>
                    </SingupInputWrap>
                    <SingupInputWrap>
                        <SignupInputTitle>메일</SignupInputTitle>
                        <SignupInputText
                            type="email"
                            placeholder="메일을 입력해주세요."
                            onChange={handleEmailChange}
                            required
                        ></SignupInputText>
                    </SingupInputWrap>
                    <SingupInputWrap>
                        <SignupInputTitle>비밀번호</SignupInputTitle>
                        <SignupInputText
                            type="password"
                            placeholder="비밀번호를 입력해주세요."
                            onChange={handlePasswordChange}
                            required
                        ></SignupInputText>
                        <SignupInputHints>
                            {lenPassword ? (
                                <SignupInputHint style={{ color: "#1E4154" }}>
                                    ︎✓ 8자 이상 입력
                                </SignupInputHint>
                            ) : (
                                <SignupInputHint>
                                    x 8자 이상 입력
                                </SignupInputHint>
                            )}
                            {effPassword ? (
                                <SignupInputHint style={{ color: "#1E4154" }}>
                                    ︎✓ 숫자, 영문, 특수문자 포함하여, 2개 이상
                                    조합
                                </SignupInputHint>
                            ) : (
                                <SignupInputHint>
                                    x 숫자, 영문, 특수문자 포함하여, 2개 이상
                                    조합
                                </SignupInputHint>
                            )}
                        </SignupInputHints>
                    </SingupInputWrap>
                    <SingupInputWrap>
                        <SignupInputTitle>비밀번호 확인</SignupInputTitle>
                        <SignupInputText
                            type="password"
                            placeholder="비밀번호를 한번 더 입력해주세요."
                            onChange={handleConfirmPasswordChange}
                            required
                        ></SignupInputText>
                        <SignupInputHints>
                            {eqPassword ? (
                                <SignupInputHint style={{ color: "#1E4154" }}>
                                    동일한 비밀번호입니다 :)
                                </SignupInputHint>
                            ) : (
                                <SignupInputHint>
                                    동일하지 않은 비밀번호입니다 :(
                                </SignupInputHint>
                            )}
                        </SignupInputHints>
                    </SingupInputWrap>
                </SingupInputList>
                <SignupSubmitButton>회원가입</SignupSubmitButton>
            </SignupBody>
        </SignupWrapper>
    );
}
