import React, { useState } from 'react';
import { ReactComponent as Heart } from "../../assets/icons/heartIcon.svg";
import Step1 from '../../components/create/Step1';
import ProgressStatus from '../../components/create/ProgressStatus';
import * as S from "./style";
import Step2 from '../../components/create/Step2';
import Step3 from '../../components/create/Step3';
import Step4 from '../../components/create/Step4';

export default function CreateManito() {
  const [step, setStep] = useState(1);
  const [type, setType] = useState("");

  const handleStepChange = (newStep) => {
    setStep(newStep);
  };

  const renderStepComponent = () => {
    switch (step) {
      case 1:
        return <Step1 setStep={setStep} setType={setType} />;
      case 2:
        return <Step2 setStep={setStep} type={type}/>;
      case 3:
        return <Step3 setStep={setStep}/>;
      case 4:
        return <Step4 setStep={setStep}/>;
      default:
        return null;
    }
  };

  return (
    <S.StepWrapper>

      <S.ProgressTextWrapper>
          <S.ProgressText color={step === 1 ? "#C02E21" : "#B9AEAF"}>STEP1</S.ProgressText>
          <S.ProgressText color={step === 2 ? "#C02E21" : "#B9AEAF"}>STEP2</S.ProgressText>
          <S.ProgressText color={step === 3 ? "#C02E21" : "#B9AEAF"}>STEP3</S.ProgressText>
          <S.ProgressText color={step === 4 ? "#C02E21" : "#B9AEAF"}>STEP4</S.ProgressText>
      </S.ProgressTextWrapper>
      <S.ProgressCircleWrapper>
          <S.ProgressCircle color={step === 1 ? "#C02E21" : "#B9AEAF"}></S.ProgressCircle>
          <S.ProgressCircle color={step === 2 ? "#C02E21" : "#B9AEAF"}></S.ProgressCircle>
          <S.ProgressCircle color={step === 3 ? "#C02E21" : "#B9AEAF"}></S.ProgressCircle>
          <S.ProgressCircle color={step === 4 ? "#C02E21" : "#B9AEAF"}></S.ProgressCircle>
      </S.ProgressCircleWrapper>
      <S.CreateProgressBar/>

      {/* 스탭별 컴포넌트 */}
      {renderStepComponent()}
    </S.StepWrapper>
  );
}
