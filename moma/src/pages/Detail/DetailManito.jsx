import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Img1 from "../../assets/images/detail1.png";
import Img2 from "../../assets/images/detail2.png";
import Img3 from "../../assets/images/detail3.png";

export default function DetailManito() {
    let { id } = useParams();
    const ArrImg = [Img1, Img2, Img3];
    return (
        <>
            <img
                src={ArrImg[id - 1]}
                style={{
                    position: "relative",
                    left: "0",
                    top: "-88px",
                    width: "390px",
                    height: "900px",
                }}
            />
        </>
    );
}
