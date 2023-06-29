import React from 'react'
import * as S from './style';

export default function Step3({setStep, type, peoples, mails}) {
  return (
    <>
        <S.ProgressingHeaderWrapper>
            {/* type에 따라서 */}
            {type === 'A' ? (
          <S.TypeBox>메일로 받아볼래요!</S.TypeBox>
        ) : (
          <S.TypeBox>함께 알아가볼래요!</S.TypeBox>
        )}

        <S.ProgressingHeader>
          아래 정보가
          <br />
          맞을까요?
        </S.ProgressingHeader>
        <S.ResultTableContainer>
            이름
            이메일

        </S.ResultTableContainer>

        </S.ProgressingHeaderWrapper>
    </>
  )
}
