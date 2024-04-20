import React from 'react'
import Navbar from './components/Navbar'
import {BrowserRouter, Route, Routes,  } from 'react-router-dom'
import Footer from './components/Footer'
import EnterYourName from './components/EnterYourName'
import VideoPage from './components/VideoPage'


const App = () => {
  return (
   
    <BrowserRouter>

    <Navbar/>
    <Routes>
   
    <Route path='/' element={<EnterYourName/>}></Route>
    <Route path='/room/:id' element={<VideoPage/>}></Route>
    
    </Routes>
    <Footer/>
    </BrowserRouter>
    
    
  )
}

export default App