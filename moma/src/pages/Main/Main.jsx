import React, { useEffect, useState } from 'react'

import MainLightImg from "../../assets/images/MainLight.png"
import { MainLightImgBox, MainWrapper,MainTitle } from './style'


export default function Main() {
  const [userData, setUserData] = useState("");

  useEffect(() => {
    setUserData("서희찬");
    
    
  }, []);

  return (
    <MainWrapper>
      <MainLightImgBox src={MainLightImg} alt="MainLightImg" />
      <MainTitle>
        {userData}님, <br />
      
      
      </MainTitle>

    
    </MainWrapper>
  )
}
