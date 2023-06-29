import React from 'react'
import * as S from './style';
// done페이지
export default function Step4({peoples}) {
  
  return (
    <>
      <S.DonePageWrapper>
        
        <S.DonePageObjectWrapper>

        </S.DonePageObjectWrapper>
        
        <S.ProgressingPointContent>
        <strong style={{color:"#C02E21",fontSize:"60px",fontWeight:"700" }}>{peoples.length}명</strong>의
        <br/> 새로운 마니또가 
        <br/> 매칭되었습니다!
        </S.ProgressingPointContent>
        
        <S.GoHome onClick={()=>{
          window.location.href="/";
        }}>
          홈으로
        </S.GoHome>

      </S.DonePageWrapper>
      
    </>
  )
}
