import { Box, Container, Paper, Typography, TextField, Grid, Button } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const IniciarSesion = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const handleSubmit = (e) =>{
    e.preventDefault();

    //validar los campos

    const cuentaUsuarios = JSON.parse(localStorage.getItem("users")) || [];
    if(cuentaUsuarios.length > 0){
        const usuarioExistente = cuentaUsuarios.find(e => e.email == email && e.password == password);
        
        if(!usuarioExistente){
          alert('Credenciales inválidas')
          return;
        }
    
     const usuarioLogeado = {
        administrador: usuarioExistente.administrador,
        email: usuarioExistente.email,
        favoritos: usuarioExistente.favoritos,
        nombre: usuarioExistente.nombre
     }


     localStorage.setItem("sessionUser", JSON.stringify(usuarioLogeado));
     alert('Se inició sesión correctamente')
     navigate('/');
    }


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
            Iniciar Sesión
          </Typography>

          <form onSubmit={handleSubmit}>
            <Grid container direction="column" spacing={2}>
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
                  Iniciar Sesión
                </Button>
              </Grid>
            </Grid>
          </form>
        </Paper>
      </Container>
    </Box>
  );
};

export default IniciarSesion;
