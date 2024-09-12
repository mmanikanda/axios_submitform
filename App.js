import React from 'react'
import Form from './Form'
import Formget from './Formget'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Formupdate from './Formupdate'


function App() {
  return (
    <>
      <BrowserRouter>
    <Routes>
      <Route path='/' element={<Form/>} />
      <Route path='/get' element={<Formget/>} />
      <Route path='/update/:id' element={<Formupdate/>}/>

    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
