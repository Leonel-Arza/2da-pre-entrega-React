import { useState, useEffect} from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './components/ItemListContaner/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import{BrowserRouter, Routes, Route} from "react-router-dom"
import Contacto from './components/Contacto/Contacto';
import Footer from './components/Footer/Footer'
import Error from './components/Error/Error'

function App() {  

  
  return (
    
    <>
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path='/' element={<ItemListContainer/>}/>
        <Route path='/:categoryId' element={<ItemListContainer/>}/>
        <Route path='/item/:idProduct' element={<ItemDetailContainer/>}/>
        <Route path='/Contacto' element={<Contacto/>}/>
        <Route path='*' element={<Error/>}/>
      </Routes>
    <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App
