import React from 'react'
import { ReactComponent as Heart } from "../../assets/icons/heartIcon.svg";
import * as S from "./style";

export default function Step1({setStep, setType}) {
  return (
    <>
        
        <Heart/>
        
        
        <S.ProgressingHeaderWrapper>
          
          <S.ProgressingPointWord>
            두근 두근
          </S.ProgressingPointWord>
          <S.ProgressingHeader>
            마니또
            <br/>
            매칭결과를?
          </S.ProgressingHeader>

          {/* 매칭  */}
          <S.WhatTypeOfManitoWrapper>
            <S.WhatTypeOfManito type={0} style={{marginRight:"10px"}} onClick={()=>{
              setType("A");
              setStep(2);
            }}>
              메일로 받아 볼래요!
            </S.WhatTypeOfManito>
            <S.WhatTypeOfManito type={1} onClick={()=>{
              setType("B");
              setStep(2);
            }}
            >
              함께 알아가가볼래요!
            </S.WhatTypeOfManito>
          </S.WhatTypeOfManitoWrapper>
          
          <S.WarningContent style={{marginTop:"18px"}}>
          메일로 받아볼 시 지정한 공개일에 마니또와 마로의 관계가 메일로 발송됩니다.
          </S.WarningContent>

          <S.WarningContent>
          함께 알아가볼 시에는 오프라인으로 서로 알아갈 수 있습니다.
          </S.WarningContent>
          


        </S.ProgressingHeaderWrapper>
    </>
  )
}
