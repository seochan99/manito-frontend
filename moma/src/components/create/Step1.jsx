import React from 'react'
import { ReactComponent as Heart } from "../../assets/icons/heartIcon.svg";
import * as S from "./style";

export default function Step1() {
  return (
    <S.StepWrapper>
        <S.CreateProgressBarWrapper>
        <S.ProgressTextWrapper>
            <S.ProgressText isStep={true}>STEP1</S.ProgressText>
            <S.ProgressText>STEP2</S.ProgressText>
            <S.ProgressText>STEP3</S.ProgressText>
            <S.ProgressText>STEP4</S.ProgressText>
        </S.ProgressTextWrapper>
        

        <S.CreateProgressBar step={1}/>

        </S.CreateProgressBarWrapper>


        <Heart/>

    </S.StepWrapper>
  )
}
