import { styled } from "styled-components";

export const StepWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

`

export const CreateProgressBarWrapper = styled.div`
`


export const CreateProgressBar = styled.hr`
  width: 282px;
  
  
  background: var(--gray-4, #B9AEAF);
  background: linear-gradient(
    to right,
    #C02E21 0%,
    ${props => {
      if (props.step === 1) return '#E5E5E5';
      if (props.step === 2) return '#C02E21';
      if (props.step === 3) return '#C02E21';
      if (props.step === 4) return '#C02E21';
      return '#E5E5E5'; // Default color
    }} 0%,
    ${props => {
      if (props.step >= 1) return '#E5E5E5'; // Default color
      
    }} 25%,
    ${props => {
      if (props.step >= 2) return '#C02E21';
      return '#E5E5E5'; // Default color
    }} 50%,
    ${props => {
      if (props.step >= 3) return '#C02E21';
      return '#E5E5E5'; // Default color
    }} 75%,
    ${props => {
      if (props.step >= 4) return '#C02E21';
      return '#E5E5E5'; // Default color
    }} 100%
  );
`;

export const ProgressTextWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 282px;
  margin-bottom: 8px;
`;

export const ProgressText = styled.span`

  font-size: 14px;
  font-weight: 700;
  color: var(--color-2, #C02E21);
  text-align: center;
  font-size: 12px;
  font-family: Pretendard;
  font-weight: 700;
  letter-spacing: -0.6px;
  
  color: ${props => {
    if (props.isStep) return 'var(--color-2, #C02E21)';
    return 'var(--gray-4, #B9AEAF)'; // Default color
  }};
`;