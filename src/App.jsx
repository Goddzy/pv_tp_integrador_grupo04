import { BrowserRouter, Routes, Route } from "react-router-dom"
import { useEffect, useState } from "react"
import Header from "./Header"
import Footer from "./Footer"
import Home from "./Home"
import Error404 from "./Error404"
import CrearProducto from "./CrearProducto"
import Contacto from "./contacto";
import DetalleProducto from './DetalleProducto';

function App() {

  const [listaProductos, setListaProductos] = useState([]);

  useEffect(()=>{
    fetch('https://fakestoreapi.com/products')
    .then(res => res.json())
    .then(res => setListaProductos(res))
    .catch(err => console.log('Error al cargar los productos: ', err));
  },[])

  return (
    <BrowserRouter>
      <Header/>
        <Routes>
            <Route exact path="/" element={<Home listaProductos={listaProductos}/>}></Route>
            <Route exact path="/*" element={<Error404/>}></Route>
            <Route exact path="/crearProducto" element={<CrearProducto/>}></Route>
            <Route path="/aboutUs" element={<Contacto />} ></Route>
            <Route path="/producto/:id" element={<DetalleProducto listaProductos={listaProductos} />} />
        </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
