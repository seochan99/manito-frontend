import React, { useEffect, useState } from "react";

import {
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

    useEffect(() => {
        setUserData("서희찬");
        setManitoData([
            {
                type: "함께 확인해요.",
                title: "영업팀 마니또",
                sdate: "2023.01.01",
                edate: "2023.01.02",
            },
            {
                type: "메일로 받아봐요.",
                title: "영업팀 마니또",
                sdate: "2023.01.01",
                edate: "2023.01.02",
            },
        ]);
    }, []);

    return (
        <MainWrapper>
            <MainHeader>
                <MainLogo>모마</MainLogo>
                <MainHeaderText>
                    {userData} 마니또님, 환영합니다!
                </MainHeaderText>
            </MainHeader>
            <MainBody>
                <MainCreateManito>
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
                                    <MainMyManitoItemTitle>
                                        {item.title}
                                    </MainMyManitoItemTitle>
                                    <MainMyManitoItemPeriod>
                                        {item.sdate} ~ {item.edate}
                                    </MainMyManitoItemPeriod>
                                </MainMyManitoItem>
                            );
                        })}
                        {/* <MainMyManitoItem>
                            <MainMyManitoItemTags>
                                <MainMyManitoItemTag>#2</MainMyManitoItemTag>
                                <MainMyManitoItemTag>
                                    메일로 받아요.
                                </MainMyManitoItemTag>
                            </MainMyManitoItemTags>
                            <MainMyManitoItemTitle>
                                영업팀 마니또
                            </MainMyManitoItemTitle>
                            <MainMyManitoItemPeriod>
                                2023.01.01 ~ 2023.01.02
                            </MainMyManitoItemPeriod>
                        </MainMyManitoItem>
                        <MainMyManitoItem>
                            <MainMyManitoItemTags>
                                <MainMyManitoItemTag>#1</MainMyManitoItemTag>
                                <MainMyManitoItemTag>
                                    함께 확인해요.
                                </MainMyManitoItemTag>
                            </MainMyManitoItemTags>
                            <MainMyManitoItemTitle>
                                영업팀 마니또
                            </MainMyManitoItemTitle>
                            <MainMyManitoItemPeriod>
                                2023.01.01 ~ 2023.01.02
                            </MainMyManitoItemPeriod>
                        </MainMyManitoItem> */}
                    </MainMyManitoList>
                </MainMyManito>
            </MainBody>
        </MainWrapper>
    );
}
