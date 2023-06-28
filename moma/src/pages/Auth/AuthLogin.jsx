import React, { useEffect, useState } from 'react';
import {
  AuthLoginInputWrapper,
  AuthLoginWrapper,
  AuthLoginInputHeader,
  AuthLoginInputBody,
  AuthLoginText,
  AuthLoginTextLink,
  AuthLoginTextWrapper,
  TotalManitoWrapper,
  TotalManitoLogo,
  TotalManitoContainer,
  AuthLoginBtn
} from './style';
import TotalManitoLogoImg from "../../assets/images/TotalManito.png"
import { useNavigate } from 'react-router-dom';

export default function AuthLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [totalManito, setTotalManito] = useState(0);


  const navigate = useNavigate();
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  useEffect(() => {
    setTotalManito(1000);
  },[])




  return (
    <AuthLoginWrapper>
      <AuthLoginInputWrapper method="post" >
        <AuthLoginInputHeader>E-mail</AuthLoginInputHeader>
        <AuthLoginInputBody
          value={email}
          onChange={handleEmailChange}
          type="email"
          required
        />
        <AuthLoginInputHeader>Password</AuthLoginInputHeader>
        <AuthLoginInputBody
          value={password}
          onChange={handlePasswordChange}
          type="password"
          required
        />
      <AuthLoginBtn >
          로그인
      {/* 로그인 버튼 */}
      </AuthLoginBtn>

      </AuthLoginInputWrapper>
      <AuthLoginTextWrapper>
        <AuthLoginText>
          아직 회원이 아니신가요?
        </AuthLoginText>
        <AuthLoginTextLink onClick={()=>{navigate('/signup')}}>
          회원가입
        </AuthLoginTextLink>
        <AuthLoginText>
        비밀번호를 잊으셨나요? 
        </AuthLoginText>
        <AuthLoginTextLink onClick={()=>{navigate('/signup')}}>
        비밀번호 재설정
        </AuthLoginTextLink>

      </AuthLoginTextWrapper>
      <TotalManitoWrapper>
        <TotalManitoLogo src={TotalManitoLogoImg} alt="TotalManitoLogo" />
        <TotalManitoContainer>
          {totalManito.toLocaleString()}&nbsp; <span style={{fontSize:"14px"}}>명</span>
        </TotalManitoContainer>

      </TotalManitoWrapper>




    </AuthLoginWrapper>

  );
}
