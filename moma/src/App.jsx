import './App.css'
import styled from 'styled-components';
import { Reset } from 'styled-reset';
import { Outlet, Route, Routes, useLocation } from 'react-router-dom';
import NavBar from './components/layout/NavBar';
import DetailManito from './pages/Detail/DetailManito';
import CreateManito from './pages/Create/CreateManito';

import MainHeaderImg from "../src/assets/images/MainHeaderImg.png"
import Logo from "../src/assets/images/Logo.png"
import AuthLogin from './pages/Auth/AuthLogin';
import AuthSingUp from './pages/Auth/AuthSingUp';
import CreateDoneManito from './pages/Create/CreateDoneManito';
import Footer from './components/layout/Footer';
import Main from './pages/Main/Main';




const BodyWrapper = styled.div`
  text-align: center;
  padding: 10px;
  
`;

export const MainHeaderIcon = styled.img`
  // 크기 작게
  width: 100%;
`;
const LayoutWrapper = styled.div`

  width: 100vw;
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: #F5F5F5;

  
`;


const ContentWrapper = styled.div`
    max-width: 430px;
    width: 100%;
    min-height: 100vh;
    background: linear-gradient(180deg, #0A2534 0%, #123D4D 100%);
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    
    
`

const MainHeaderWrapper = styled.div`
  padding : 0px 24px;
  padding-top: 14px;
`


// 메인 레이아웃
const Layout = () => {
return (
    <>
      <LayoutWrapper>
        <ContentWrapper>
                <NavBar />
                <BodyWrapper>
                  <Outlet />
                </BodyWrapper>
        </ContentWrapper>
      </LayoutWrapper>
    </>
);
};


// 로그인 및 회원가입 레이아웃
const AuthLayout = () => {
  return (
    <>
    <LayoutWrapper>
      <ContentWrapper>
        <MainHeaderWrapper>

          <MainHeaderIcon src={MainHeaderImg} alt="MainHeaderImg"/>
        </MainHeaderWrapper>
              
              
          <Outlet />
              
              
      </ContentWrapper>
    </LayoutWrapper>
  </>
);
  };

// 로그인 여부 파악하기
// 만약 로그인 유저시 아래 Routes보이게 하기
function App() {
  return (
    <>
   <Reset/>
   
          {/* 로그인 및 회원 가입 */}
          <Routes>
                <Route element={<AuthLayout />}>
                  <Route path="/login" element={<AuthLogin/>}/>
                  <Route path="/signup" element={<AuthSingUp/>}/>
                  <Route path="/reset" element={<AuthSingUp/>}/>
                </Route>
          
                {/* 로그인 후 메인 */}
                <Route element={<Layout />}>
                  {/* 메인 */}
                  <Route path="/" index element={<Main />} />
                  {/* 디테일 */}
                  <Route path="/detail/:id" element={<DetailManito />} />
                  {/* 마니또 생성 */}
                  <Route path="/create" element={<CreateManito />} />
                  {/* 완료 마니또 전달 */}
                  <Route path="/createDone" element={<CreateDoneManito/>}/>                  
                  {/* <Route path="*" element={<NotFound/>} /> */}
              </Route>
          </Routes>
          
    </>
  );
}

export default App
