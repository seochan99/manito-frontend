import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../../api/axios";
import Momabox from "../../assets/images/Momabox.png";
import Lottie from "react-lottie";
import animationData from "../../assets/lottie/giftbox.json";
import {
    Modal,
    LoginAccountFuncSignup,
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

export default function AuthLogin({ setUserData }) {
    const [errMsg, setErrMsg] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [totalManito, setTotalManito] = useState(0);
    const [visiModal, setVisiModal] = useState({ display: "none" });

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice",
        },
    };

    const navigate = useNavigate();
    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    useEffect(() => {
        fetchManitoCnt();
    }, []);

    const fetchManitoCnt = () => {
        axios
            .get("/manito/count")
            .then((response) => {
                const { total_count } = response.data;
                setTotalManito(total_count);
            })
            .catch((error) => {
                // Handle error if the request fails
                console.log(error);
            });
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    function nullCheck(value) {
        if (
            value == "" ||
            value == null ||
            value == undefined ||
            (value != null &&
                typeof value == "object" &&
                !Object.keys(value).length)
        ) {
            return false;
        } else {
            return true;
        }
    }

    async function postUserSignIn() {
        if (nullCheck(email) && nullCheck(password)) {
            setVisiModal({ display: "flex" });
            const formData = {
                email: email,
                password: password,
            };
            axios
                .post("user/signin/", formData)
                .then((response) => {
                    console.log("Response", response);
                    if (response.data.message == "로그인 성공") {
                        setUserData(response.data);
                        alert(
                            `${response.data.user.name} 마니또님 반갑습니다!`
                        );
                        navigate("/");
                    }
                })
                .catch((error) => {
                    setVisiModal({ display: "none" });
                    console.log("Error", error);
                    alert("존재하지 않는 계정입니다.");
                    setErrMsg("존재하지 않는 계정입니다.");
                });
        } else {
            alert("로그인에 실패했습니다. 나중에 다시 시도해주세요.");
            console.log("Fail");
        }
    }

    return (
        <LoginWrapper>
            <Modal style={visiModal}>
                <Lottie options={defaultOptions} height={240} width={240} />
            </Modal>

            <LoginHeader>
                <LoginHeaderSubWording>
                    한번의 가입, 모두의 즐거움!
                </LoginHeaderSubWording>
                <LoginHeaderMainWording>
                    모두의 마니또, 모마!
                </LoginHeaderMainWording>
            </LoginHeader>
            <LoginBody>
                <LoginImgBox src={Momabox} />
                <LoginInputList>
                    <LoginInputWrap>
                        <LoginInputTitle>메일</LoginInputTitle>
                        <LoginInputText
                            placeholder="메일을 입력해주세요."
                            onChange={handleEmailChange}
                            value={email}
                            required
                        />
                    </LoginInputWrap>
                    <LoginInputWrap>
                        <LoginInputTitle>비밀번호</LoginInputTitle>
                        <LoginInputText
                            placeholder="비밀번호를 입력해주세요."
                            onChange={handlePasswordChange}
                            value={password}
                            type="password"
                            required
                        />
                    </LoginInputWrap>
                </LoginInputList>
                <LoginSubmitButton onClick={postUserSignIn}>
                    로그인
                </LoginSubmitButton>
                <LoginAccountFuncWrap>
                    <LoginAccountFuncSignup href="signup">
                        회원가입
                    </LoginAccountFuncSignup>
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
