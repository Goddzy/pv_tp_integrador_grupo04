import { Box, Container, Paper, Typography, TextField, Grid, Button } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Registro = () => {
  const [cuentas, setCuentas] = useState( JSON.parse(localStorage.getItem("users")) || [] );
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmar, setConfirmar] = useState("");
  const [nombre, setNombre] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) =>{
    e.preventDefault();
    
    //validar los campos, validar que el mail no esté repetido al crear otro usuario

    const cuentaNueva = {
        email: email,
        nombre: nombre,
        password: password,
        confirmar: confirmar,
        administrador: false,
    }

    const cuentasActualizadas = [...cuentas, cuentaNueva];
    setCuentas(cuentasActualizadas);
    localStorage.setItem("users", JSON.stringify(cuentasActualizadas));

    alert('Se ha creado su cuenta exitosamente');
    navigate('/iniciarSesion')
  }


  return (
    <Box
      sx={{
        backgroundColor: "#12121a",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        p: 2,
      }}
    >
      <Container maxWidth="sm">
        <Paper
          elevation={3}
          sx={{
            p: 4,
            borderRadius: "15px",
            border: "2px solid #00e0c0",
            backgroundColor: "#1e1e2a",
          }}
        >
          <Typography variant="h5" sx={{ color: "#00e0c0", textAlign: "center", mb: 3 }}>
            Crear Cuenta
          </Typography>

          <form onSubmit={handleSubmit}>
            <Grid container direction="column" spacing={2}>
              <Grid item>
                <TextField
                  label="Nombre completo"
                  fullWidth
                  value={nombre}
                  onChange={(e) => setNombre(e.target.value)}
                  InputProps={{ sx: { backgroundColor: "#12121a", color: "#ffffff" } }}
                  InputLabelProps={{ sx: { color: "#cccccc" } }}
                />
              </Grid>
              <Grid item>
                <TextField
                  label="Correo electrónico"
                  fullWidth
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  InputProps={{ sx: { backgroundColor: "#12121a", color: "#ffffff" } }}
                  InputLabelProps={{ sx: { color: "#cccccc" } }}
                />
              </Grid>
              <Grid item>
                <TextField
                  label="Contraseña"
                  type="password"
                  fullWidth
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  InputProps={{ sx: { backgroundColor: "#12121a", color: "#ffffff" } }}
                  InputLabelProps={{ sx: { color: "#cccccc" } }}
                />
              </Grid>
              <Grid item>
                <TextField
                  label="Confirmar contraseña"
                  type="password"
                  fullWidth
                  value={confirmar}
                  onChange={(e) => setConfirmar(e.target.value)}
                  InputProps={{ sx: { backgroundColor: "#12121a", color: "#ffffff" } }}
                  InputLabelProps={{ sx: { color: "#cccccc" } }}
                />
              </Grid>
              <Grid item sx={{ textAlign: "center", mt: 2 }}>
                <Button
                  variant="contained"
                  type="submit"
                  sx={{
                    borderColor: "#00e0c0",
                    color: "#00e0c0",
                    backgroundColor: "transparent",
                    border: "1px solid #00e0c0",
                    width: "60%",
                    "&:hover": {
                      backgroundColor: "#00e0c0",
                      color: "#12121a",
                    },
                  }}
                >
                  Registrarse
                </Button>
              </Grid>
            </Grid>
          </form>
        </Paper>
      </Container>
    </Box>
  );
};

export default Registro;
