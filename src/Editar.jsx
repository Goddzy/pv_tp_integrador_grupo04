import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { Box, Container, Paper, Typography, Grid, TextField, Button } from "@mui/material";

const Editar = ({ listaProductos, setListaProductos }) => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Busca el producto a editar
  const producto = listaProductos.find((p) => p.id === Number(id));

 
  const [imagen, setImagen] = useState("");
  const [nombre, setNombre] = useState("");
  const [precio, setPrecio] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [categoria, setCategoria] = useState("");
  const [stock, setStock] = useState("");

  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (producto) {
      setImagen(producto.image || "");
      setNombre(producto.title || "");
      setPrecio(producto.price || "");
      setDescripcion(producto.description || "");
      setCategoria(producto.category || "");
      setStock(producto.rating ? producto.rating.count : "");
    }
  }, [producto]);

 
  const validateFields = () => {
    const newErrors = {};
    if (!imagen) newErrors.imagen = "La URL es requerida";
    if (!nombre) newErrors.nombre = "El nombre es requerido";
    if (!precio || isNaN(precio) || Number(precio) <= 0)
      newErrors.precio = "Ingrese un precio válido mayor a 0";
    if (!descripcion) newErrors.descripcion = "La descripción es requerida";
    if (!categoria) newErrors.categoria = "La categoría es requerida";
    if (stock === "" || isNaN(stock) || Number(stock) < 0)
      newErrors.stock = "Ingrese un stock válido (0 o más)";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const fieldErrors = validateFields();
    if (Object.keys(fieldErrors).length > 0) {
      setErrors(fieldErrors);
      return;
    }
    setErrors({});

    const productoEditado = {
      id: Number(id),
      image: imagen,
      title: nombre,
      price: precio,
      description: descripcion,
      category: categoria,
      rating: {
        rate: 0,
        count: stock,
      },
    };

    // Actualiza el producto en la lista
    const nuevoArray = listaProductos.map((p) =>
      p.id === Number(id) ? productoEditado : p
    );
    setListaProductos(nuevoArray);
    navigate("/");
  };

  return (
    <Box
      sx={{
        backgroundColor: "#12121a",
        minHeight: "100vh",
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        p: 2,
      }}
    >
      <Container maxWidth="md">
        <Paper
          elevation={3}
          sx={{
            p: 4,
            borderRadius: "15px",
            border: "2px solid #00e0c0",
            backgroundColor: "#1e1e2a",
            width: "100%",
          }}
        >
          <Typography variant="h5" sx={{ color: "#00e0c0", textAlign: "center", mb: 3 }}>
            Editar Producto
          </Typography>
          <form onSubmit={handleSubmit}>
            <Grid container spacing={2}>
             
              <Grid item xs={6}>
                <Typography variant="subtitle1" sx={{ color: "#00e0c0", textAlign: "center", mb: 1 }}>
                  ID
                </Typography>
                <TextField
                  variant="outlined"
                  fullWidth
                  value={id}
                  disabled
                  InputProps={{
                    sx: {
                      backgroundColor: "#000000",
                      color: "#ffffff",
                      "& .MuiInputBase-input.Mui-disabled": {
                        WebkitTextFillColor: "#ffffff",
                      },
                    },
                  }}
                />
              </Grid>

             
              <Grid item xs={6}>
                <Grid container spacing={1}>
                  <Grid item xs={12}>
                    <TextField
                      label="Imagen (URL)"
                      variant="outlined"
                      fullWidth
                      margin="dense"
                      value={imagen}
                      onChange={(e) => setImagen(e.target.value)}
                      error={Boolean(errors.imagen)}
                      helperText={errors.imagen}
                      InputProps={{ sx: { backgroundColor: "#12121a", color: "#ffffff" } }}
                      InputLabelProps={{ sx: { color: "#cccccc" } }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      label="Nombre"
                      variant="outlined"
                      fullWidth
                      margin="dense"
                      value={nombre}
                      onChange={(e) => setNombre(e.target.value)}
                      error={Boolean(errors.nombre)}
                      helperText={errors.nombre}
                      InputProps={{ sx: { backgroundColor: "#12121a", color: "#ffffff" } }}
                      InputLabelProps={{ sx: { color: "#cccccc" } }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      label="Precio"
                      variant="outlined"
                      fullWidth
                      margin="dense"
                      type="number"
                      value={precio}
                      onChange={(e) => setPrecio(e.target.value)}
                      error={Boolean(errors.precio)}
                      helperText={errors.precio}
                      InputProps={{ sx: { backgroundColor: "#12121a", color: "#ffffff" } }}
                      InputLabelProps={{ sx: { color: "#cccccc" } }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      label="Descripción"
                      variant="outlined"
                      fullWidth
                      margin="dense"
                      multiline
                      rows={2}
                      value={descripcion}
                      onChange={(e) => setDescripcion(e.target.value)}
                      error={Boolean(errors.descripcion)}
                      helperText={errors.descripcion}
                      InputProps={{ sx: { backgroundColor: "#12121a", color: "#ffffff" } }}
                      InputLabelProps={{ sx: { color: "#cccccc" } }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      label="Categoría"
                      variant="outlined"
                      fullWidth
                      margin="dense"
                      value={categoria}
                      onChange={(e) => setCategoria(e.target.value)}
                      error={Boolean(errors.categoria)}
                      helperText={errors.categoria}
                      InputProps={{ sx: { backgroundColor: "#12121a", color: "#ffffff" } }}
                      InputLabelProps={{ sx: { color: "#cccccc" } }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      label="Stock"
                      variant="outlined"
                      fullWidth
                      margin="dense"
                      type="number"
                      value={stock}
                      onChange={(e) => setStock(e.target.value)}
                      error={Boolean(errors.stock)}
                      helperText={errors.stock}
                      InputProps={{ sx: { backgroundColor: "#12121a", color: "#ffffff" } }}
                      InputLabelProps={{ sx: { color: "#cccccc" } }}
                    />
                  </Grid>
                  <Grid item xs={12} sx={{ textAlign: "center", mt: 1 }}>
                    <Button
                      type="submit"
                      variant="contained"
                      sx={{
                        borderColor: "#00e0c0",
                        color: "#00e0c0",
                        backgroundColor: "transparent",
                        border: "1px solid #00e0c0",
                        width: "50%",
                        "&:hover": {
                          backgroundColor: "#00e0c0",
                          color: "#12121a",
                        },
                      }}
                    >
                      Guardar Cambios
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </form>
        </Paper>
      </Container>
    </Box>
  );
};

export default Editar;

