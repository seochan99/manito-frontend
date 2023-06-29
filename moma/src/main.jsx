import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import "./assets/fonts/Font.css"
import { BrowserRouter } from 'react-router-dom'
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from 'recoil';



ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter basename='/'>
     <RecoilRoot>
      <App />
     </RecoilRoot>
  </BrowserRouter>,
)
