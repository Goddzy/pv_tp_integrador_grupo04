import { Box, Container, Paper, Typography, TextField, Grid, Button } from "@mui/material";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from './contexts/AuthContext';

const IniciarSesion = () => {
  const { login } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // VALIDACIÓN BÁSICA
    const newErr = {};
    const emailTrim = email.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailTrim) {
      newErr.email = "El correo es obligatorio";
    } else if (!emailRegex.test(emailTrim)) {
      newErr.email = "Formato de correo inválido";
    }
    if (!password) {
      newErr.password = "La contraseña es obligatoria";
    }
    if (Object.keys(newErr).length) {
      setErrors(newErr);
      // Alert con todos los mensajes de error
      alert(Object.values(newErr).join("\n"));
      return;
    }

    // CHEQUEO DE CREDENCIALES
    const cuentaUsuarios = JSON.parse(localStorage.getItem("users")) || [];
    const usuarioExistente = cuentaUsuarios.find(
      (u) => u.email === emailTrim && u.password === password
    );
    if (!usuarioExistente) {
      setErrors({ general: "Credenciales inválidas" });
      alert("Credenciales inválidas");
      return;
    }

    const usuarioLogeado = {
      administrador: usuarioExistente.administrador,
      email: usuarioExistente.email,
      favoritos: usuarioExistente.favoritos,
      nombre: usuarioExistente.nombre,
    };

    localStorage.setItem("sessionUser", JSON.stringify(usuarioLogeado));
    login(usuarioLogeado);
    alert("Bienvenido " + usuarioLogeado.nombre);
    navigate("/");
  };

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
              {errors.general && (
                <Grid item>
                  <Typography color="error" align="center">
                    {errors.general}
                  </Typography>
                </Grid>
              )}

              <Grid item>
                <TextField
                  label="Correo electrónico"
                  fullWidth
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    setErrors({ ...errors, email: null, general: null });
                  }}
                  error={Boolean(errors.email)}
                  helperText={errors.email}
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
                  onChange={(e) => {
                    setPassword(e.target.value);
                    setErrors({ ...errors, password: null, general: null });
                  }}
                  error={Boolean(errors.password)}
                  helperText={errors.password}
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
