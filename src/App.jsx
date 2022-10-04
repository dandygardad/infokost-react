import { BrowserRouter, Routes, Route } from 'react-router-dom'

/** @jsxImportSource @emotion/react */
import { Global } from '@emotion/react'

import Home from './pages/Home'
import Kost from './pages/Kost'
import Admin from './pages/Admin'

import DataKost from './components/admin/parts/DataKost'
import InputKost from './components/admin/parts/InputKost'
import ChangePassword from './components/admin/parts/Password'
import DeleteKost from './components/admin/parts/DeleteKost'
import SearchKost from './components/home/SearchKost'

import Error404 from './pages/error/Error404'
import * as style from './App.style'

function App() {
  return (
    <>
    <Global styles={style.global} />
    <Routes>
      <Route path="*" element={<Error404 />} />
      <Route path="/" element={<Home />} />
      <Route path="/kost/:id" element={<Kost />} />
      <Route path="/search/:input" element={<SearchKost />} />
      <Route path="/admin" element={<Admin />}>
        <Route index element={<DataKost/>} />
        <Route path="kost" element={<DataKost/>} />
        <Route path="input" element={<InputKost/>} />
        {/* <Route path="edit/:id" element={<InputKost/>} /> */}
        <Route path="delete/:slug" element={<DeleteKost />} />
        <Route path="change-password" element={<ChangePassword/>} />
      </Route>
    </Routes>
    </>
  );
}

export default App;
