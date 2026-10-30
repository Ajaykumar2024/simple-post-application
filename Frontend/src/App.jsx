 import React from 'react'
 import {Routes,Route, BrowserRouter} from 'react-router-dom'
import CreatePost from './pages/CreatePost'
import Feed from './pages/Feed'
 
 const App = () => {
   return (
      <Routes>
        <Route path='/' element={<CreatePost/>} />
        <Route path='/posts' element={<Feed/>} />

      </Routes>
      
   )
 }
 
 export default App
 