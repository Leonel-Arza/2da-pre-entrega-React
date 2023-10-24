import { useState } from 'react'
import './App.css'
import NavBar from './components/Navbar/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './components/ItemListContaner/ItemListContainer';


function App() {  

  const enlaces = [
    "Home",
    "Motos",
    "Scooters",
    "Bicicletas",
    "Autos",
    "Accesorios",
    "Contacto"
  ]

  const welcome = "Bienvenidos/as a mi sitio E-Commerce"

  return (
    <>
    <NavBar links={enlaces}/>
    <ItemListContainer welcome={welcome}/>
    </>
  )
}

export default App
