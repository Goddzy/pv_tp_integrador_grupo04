import { BrowserRouter, Routes, Route } from "react-router-dom"
import { useEffect, useState } from "react"
import Header from "./Header"
import Footer from "./Footer"
import Home from "./Home"
import Error404 from "./Error404"
import CrearProducto from "./CrearProducto"
import Contacto from "./contacto";
import DetalleProducto from './DetalleProducto';
import Editar from './Editar';
import Favoritos from './Favoritos'
import 'bootstrap-icons/font/bootstrap-icons.css';
import Registro from "./Registro"
import IniciarSesion from "./IniciarSesion"
import AdminRoute from "./routes/AdminRoutes"
import PrivateRoute from "./routes/PrivateRoutes"
import adminUsers from "./admin.json";

function App() {

  const [listaProductos, setListaProductos] = useState([]);
   const [idProducto, setIdProducto] = useState(21);


  useEffect(()=>{
    fetch('https://fakestoreapi.com/products')
    .then(res => res.json())
    .then(res => setListaProductos(res))
    .catch(err => console.log('Error al cargar los productos: ', err));
  },[])

  useEffect(() => {
    const usuariosExistentes = JSON.parse(localStorage.getItem("users")) || [];
    const yaExisteAdmin = usuariosExistentes.some(u => u.email === "admin@admin.com");

    if (!yaExisteAdmin) {
      const nuevosUsuarios = [...usuariosExistentes, ...adminUsers];
      localStorage.setItem("users", JSON.stringify(nuevosUsuarios));
    }
  }, []);

  return (
    <BrowserRouter>
      <Header/>
        <Routes>
            <Route exact path="/" element={<Home listaProductos={listaProductos}/>}></Route>
            <Route exact path="/crearProducto" element={
              <AdminRoute>
                <CrearProducto setListaProductos={setListaProductos} listaProductos={listaProductos} idProducto={idProducto} setIdProducto={setIdProducto}/>
              </AdminRoute>
              }></Route>
            <Route path="/aboutUs" element={<Contacto />} ></Route>
            <Route path="/producto/:id" element={<DetalleProducto listaProductos={listaProductos} />} />
            <Route path="/favoritos" element={
              <PrivateRoute>
                <Favoritos listaProductos={listaProductos}/>
              </PrivateRoute>
              }></Route>
            <Route path="/editar/:id" element={
              <AdminRoute>
                <Editar listaProductos={listaProductos} setListaProductos={setListaProductos}/>
              </AdminRoute>
              } />
            <Route exact path="/*" element={<Error404/>}></Route>
            <Route exact path="/crearUsuario" element={<Registro/>}></Route>
            <Route exact path="/iniciarSesion" element={<IniciarSesion/>}></Route>
        </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
