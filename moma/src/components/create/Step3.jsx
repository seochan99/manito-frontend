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

        
        


        
        <S.ResultTableContainer2>
          <S.ResultTableContainer style={{borderBottom:"1px solid var(--gray-3, #E5DEDF) "}}>
            
              <S.ResultTableTitle>
                이름
              </S.ResultTableTitle>
              <S.ResultTableTitle>
                이메일
              </S.ResultTableTitle>
          </S.ResultTableContainer>
          {peoples.map((person, index) => (
            <S.ResultTableContainer
                key={index}
                style={{ background: index % 2 === 1 ? '#E5DEDF' : 'transparent' }}>
                <div>{person}</div>
                <div>{mails[index]}</div>
              </S.ResultTableContainer>
          ))}
          </S.ResultTableContainer2>

        






        </S.ProgressingHeaderWrapper>
    </>
  )
}
