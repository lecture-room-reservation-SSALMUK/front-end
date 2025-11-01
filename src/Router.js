import React from 'react'
import { Route, Routes } from 'react-router'
import { Home } from './pages/home/Home.js'
import { Login } from './pages/login/Login.js'
import { Register } from './pages/register/Register.js'
import { Detail } from './pages/detail/Detail.js'
import { MyPage } from './pages/mypage/MyPage.js'

export const Router = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />
      <Route path='/detail/:classid' element={<Detail />} />
      <Route path='/myPage' element={<MyPage />} />
    </Routes>
  )
}
