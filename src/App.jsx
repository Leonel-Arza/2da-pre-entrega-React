import { useState, useEffect} from 'react'
import './App.css'
import NavBar from './components/Navbar/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './components/ItemListContaner/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import{BrowserRouter, Routes, Route} from "react-router-dom"
import Footer from './components/Footer/Footer'
import Error from './components/Error/Error'

function App() {  

  
  return (
    
    <>
  <NavBar/>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<ItemListContainer/>}/>
        <Route path='/:categoryId' element={<ItemListContainer/>}/>
        <Route path='/item/:idProduct' element={<ItemDetailContainer/>}/>
        <Route path='*' element={<Error/>}/>
      </Routes>
    </BrowserRouter>
    <Footer/>
    </>
  )
}

export default App
