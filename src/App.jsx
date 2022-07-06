import { BrowserRouter, Routes, Route } from 'react-router-dom'

/** @jsxImportSource @emotion/react */
import { Global } from '@emotion/react'

import Home from './pages/Home'
import Kost from './pages/Kost'
import Admin from './pages/Admin'

import Error404 from './pages/error/Error404'
import * as style from './App.style'

function App() {
  return (
    <BrowserRouter>
      <Global styles={style.global} />
      <Routes>
        <Route path="*" element={<Error404 />} />
        <Route path="/" element={<Home />} />
        <Route path="/kost/:id" element={<Kost />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
