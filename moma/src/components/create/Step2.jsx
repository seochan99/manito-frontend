import React from 'react'
import * as S from "./style";

export default function Step2({setStep,type}) {
  console.log(type);

  return (
    <>
    <S.ProgressingHeaderWrapper>

      {/* type에 따라서 */}
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

          <S.ProgressingHeader>
            마니또
            <br/>
            매칭결과를?
          </S.ProgressingHeader>

          <S.WarningContent2>
          참가자의 메일과 이름 순서를 동일하게 입력해 주세요!
          </S.WarningContent2>
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
