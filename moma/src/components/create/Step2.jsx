import React from 'react'
import * as S from "./style";

export default function Step2({setStep,type}) {
  console.log(type);

  return (
    <>
    <S.ProgressingHeaderWrapper>
      {
      type ==="A" ? 
        <S.TypeBox>
        메일로 받아볼래요!
      </S.TypeBox>
      : 
      <S.TypeBox>
        함께 알아가볼래요!
      </S.TypeBox>


      }

        {/* 매칭  */}
      <S.WhatTypeOfManitoWrapper>
      <S.WhatTypeOfManito type={0} onClick={()=>{
        setStep(1);
      }}>
        이전으로
      </S.WhatTypeOfManito>
      <S.WhatTypeOfManito type={1} onClick={()=>{
        setStep(3);
      }}
      >
        다음으로
      </S.WhatTypeOfManito>


      </S.WhatTypeOfManitoWrapper>
      </S.ProgressingHeaderWrapper>
    </>
  )
}
