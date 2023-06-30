import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../../api/axios";
import Lottie from "react-lottie";
import animationData from "../../assets/lottie/giftbox.json";
import ManitoButtonImg from "../../assets/images/createManito.png";

import {
    Modal,
    MainBody,
    MainCreateManito,
    MainCreateManitoTitle,
    MainHeader,
    MainHeaderText,
    MainLogo,
    MainMyManito,
    MainMyManitoItem,
    MainMyManitoItemPeriod,
    MainMyManitoItemTag,
    MainMyManitoItemTags,
    MainMyManitoItemTitle,
    MainMyManitoList,
    MainMyManitoTitle,
    MainWrapper,
} from "./style";

export default function Main() {
    const [userData, setUserData] = useState("");
    const [manitoData, setManitoData] = useState([]);
    const [visiModal, setVisiModal] = useState({ display: "none" });
    const navigate = useNavigate();

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice",
        },
    };

    function createManito() {
        setVisiModal({ display: "flex" });
        navigate("/create");
    }

    // async function getManitoData(id) {
    //     try {
    //         const response = await axios.get(`manito/${id}/partner/`);
    //         const resData = response.data;
    //         console.log(resData);
    //     } catch (error) {
    //         console.error("Error", error);
    //     }
    // }

    useEffect(() => {
        setUserData("서희찬");
        setManitoData([
            {
                type: "함께 확인해요.",
                title: "영업팀 마니또",
                sdate: "2023.06.28",
                edate: "2023.06.29",
            },
            {
                type: "메일로 받아봐요.",
                title: "영업팀 마니또",
                sdate: "2023.06.27",
                edate: "2023.06.29",
            },
        ]);
    }, []);

    return (
        <MainWrapper>
            <Modal style={visiModal}>
                <Lottie options={defaultOptions} height={240} width={240} />
            </Modal>
            <MainHeader>
                <MainHeaderText>
                    {userData} 마니또님, 환영합니다!
                </MainHeaderText>
            </MainHeader>
            <MainBody>
                <MainCreateManito onClick={createManito}>
                    <img
                        src={ManitoButtonImg}
                        style={{ height: "188px", width: "336px" }}
                    ></img>
                    <MainCreateManitoTitle>
                        마니또{" "}
                        <strong style={{ fontWeight: "bold" }}>매칭하기</strong>
                    </MainCreateManitoTitle>
                </MainCreateManito>
                <MainMyManito>
                    <MainMyManitoTitle>나의 마니또</MainMyManitoTitle>
                    <MainMyManitoList>
                        {manitoData.reverse().map((item, index) => {
                            return (
                                // eslint-disable-next-line react/jsx-key
                                <MainMyManitoItem>
                                    <MainMyManitoItemTags>
                                        <MainMyManitoItemTag>
                                            #{manitoData.length - index}
                                        </MainMyManitoItemTag>
                                        <MainMyManitoItemTag>
                                            {item.type}
                                        </MainMyManitoItemTag>
                                    </MainMyManitoItemTags>
                                    <MainMyManitoItemTitle href="/detail/1">
                                        {item.title}
                                    </MainMyManitoItemTitle>
                                    <MainMyManitoItemPeriod>
                                        {item.sdate} ~ {item.edate}
                                    </MainMyManitoItemPeriod>
                                </MainMyManitoItem>
                            );
                        })}
                    </MainMyManitoList>
                </MainMyManito>
            </MainBody>
        </MainWrapper>
    );
}
