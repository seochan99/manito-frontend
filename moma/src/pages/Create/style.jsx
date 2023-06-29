import { styled } from "styled-components";

export const StepWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

`

export const ProgressTextWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 310px;
  margin-bottom: 8px;
`;

export const ProgressText = styled.span`
  font-size: 14px;
  font-weight: 700;
  color: ${props => (props.color ? props.color : "var(--color-2, #C02E21)")};
  text-align: center;
  font-family: Pretendard;
  letter-spacing: -0.6px;
`;

export const CreateProgressBar = styled.hr`
  width: 282px;
  
  
  background: var(--gray-4, #B9AEAF);
  
`;

export const ProgressCircle = styled.div`
    width: 12px;
    height: 12px;
    border-radius: 50%;

    background-color: ${props => (props.color ? props.color : "var(--color-2, #C02E21)")};

    
`


export const ProgressCircleWrapper = styled.div`
position: sticky;
    

    width: 290px;

    display: flex;
    justify-content: space-between;
`
export const CreateProgressWrapper = styled.div`

`