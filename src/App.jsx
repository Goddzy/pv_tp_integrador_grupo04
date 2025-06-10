import { BrowserRouter, Routes, Route } from "react-router-dom"
import Header from "./Header"
import Footer from "./Footer"
import Home from "./Home"
import Error404 from "./Error404"
import CrearProducto from "./CrearProducto"
import Contacto from "./contacto";
import DetalleProducto from './DetalleProducto';

function App() {

  return (
    <BrowserRouter>
      <Header/>
        <Routes>
            <Route exact path="/" element={<Home/>}></Route>
            <Route exact path="/*" element={<Error404/>}></Route>
            <Route exact path="/crearProducto" element={<CrearProducto/>}></Route>
            <Route path="/aboutUs" element={<Contacto />} ></Route>
            <Route path="/producto/:id" element={<DetalleProducto />} />
        </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
