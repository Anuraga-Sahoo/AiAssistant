import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Signup from './pages/Signup'
import Signin from './pages/Signin'
import Customize from './pages/Customize'
import { useContext } from 'react'
import userDataContext from './context/context'
import Home from './pages/Home'
import Customize2 from './pages/Customize2'

const App = () => {
  const {userData, setUserData } = useContext(userDataContext)
  return (
    <Routes>
      <Route path='/' element={
        (userData?.assistantImage && userData?.assistantName) ? <Home/> : <Navigate to={"/customize"} /> 
      }/>
      <Route path='/signup' element={!userData ? <Signup/> :<Navigate to={"/"}/> } />
      <Route path='/signin' element={!userData ? <Signin/> :<Navigate to={"/"}/> }/>
      <Route path='/customize' element={userData ? <Customize/> : <Navigate to={"/signin"}/>}/>
      <Route path='/customize2' element={userData ? <Customize2/> : <Navigate to={"/signin"}/>}/>

    </Routes>
  )
}

export default App
