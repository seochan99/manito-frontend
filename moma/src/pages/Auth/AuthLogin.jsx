import React, { useState } from 'react';
import {
  AuthLoginInputWrapper,
  AuthLoginWrapper,
  AuthLoginInputHeader,
  AuthLoginInputBody
} from './style';

export default function AuthLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  return (
    <AuthLoginWrapper>
      <AuthLoginInputWrapper>
        <AuthLoginInputHeader>E-mail</AuthLoginInputHeader>
        <AuthLoginInputBody
          value={email}
          onChange={handleEmailChange}
          type="email"
        />

        <AuthLoginInputHeader>Password</AuthLoginInputHeader>
        <AuthLoginInputBody
          value={password}
          onChange={handlePasswordChange}
          type="password"
        />





        
      </AuthLoginInputWrapper>





    </AuthLoginWrapper>

  );
}
