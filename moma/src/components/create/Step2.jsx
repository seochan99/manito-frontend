import React, { useState } from 'react';

import 'react-datepicker/dist/react-datepicker.css';
import * as S from './style';

export default function Step2({ setStep, type }) {
  const [groupName, setGroupName] = useState('');
  const [participantEmails, setParticipantEmails] = useState('');
  const [participantNames, setParticipantNames] = useState('');
  const [publicDate, setPublicDate] = useState(new Date());

  const [giftAmount, setGiftAmount] = useState();

  const handlePublicDateChange = (date) => {
    setPublicDate(date);
  };


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
          정보를
          <br />
          입력해주세요!
        </S.ProgressingHeader>

        <S.WarningContent2>참가자의 메일과 이름 순서를 컴마를 기준으로 동일하게 입력해 주세요!</S.WarningContent2>

        {/* 매칭 */}
        <S.InputWrapper>
          <S.InputTitle>모임명을 알려주세요.</S.InputTitle>
          <S.InputBox
            placeholder="예시) 모마 홍보팀 / 컴공 동기엠티"
            value={groupName}
            onChange={(e) => setGroupName(e.target.value)}
          />

          <S.InputTitle >참가자의 메일을 알려주세요.</S.InputTitle>
          <S.TextAreaBox
          
            placeholder="예시) aaa@aaa.com, bbb@bbb.com..."
            value={participantEmails}
            onChange={(e) => setParticipantEmails(e.target.value)}
          />

          <S.InputTitle>참가자의 이름을 알려주세요.</S.InputTitle>
          <S.TextAreaBox
            placeholder="예시) 김땡땡, 이빵빵, ..."
            value={participantNames}
            onChange={(e) => setParticipantNames(e.target.value)}
          />

          <S.InputTitle>공개원하시는 날을 알려주세요.</S.InputTitle>
          <S.StyledDatePicker
            onChange={handlePublicDateChange}
            showTimeSelect
            timeFormat="HH:mm"
            timeIntervals={15}
            dateFormat="yyyy.MM.dd HH:mm"
            placeholderText="예시) 2023.06.29 18:00"
          />

          <S.InputTitle>마니또 선물 금액을 알려주세요.</S.InputTitle>
          <S.InputBox
  number
  inputMode="numeric"
  placeholder="숫자만 입력. 예시) 5000"
  value={giftAmount}
  onChange={(e) => {
    const numericValue = e.target.value.replace(/[^0-9]/g, "");
    setGiftAmount(numericValue);
  }}
/>
        </S.InputWrapper>

        <S.WhatTypeOfManitoWrapper>
          <S.WhatTypeOfManito
            type={0}
            onClick={() => {
              setStep(1);
            }}
          >
            이전으로
          </S.WhatTypeOfManito>
          <S.WhatTypeOfManito
            type={1}
            onClick={() => {
              setStep(3);
            }}
          >
            다음으로
          </S.WhatTypeOfManito>
        </S.WhatTypeOfManitoWrapper>
      </S.ProgressingHeaderWrapper>
    </>
  );
}
