import React from "react";
import { Container, Paper, Typography, TextField, Button } from "@mui/material";
import { useContext } from "react";
import AuthContext from "../context/AuthContext";
import { useState } from "react";

const LoginPage = () => {
  const { login } = useContext(AuthContext);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Call login with username and password
    login(username, password);
  };

  return (
    <div>
      <Container maxWidth="sm">
        <Paper elevation={3} style={{ padding: "2rem" }}>
          <Typography variant="h4" align="center" gutterBottom>
            Login
          </Typography>
          <form onSubmit={handleSubmit}>
            <TextField
              label="Username"
              variant="outlined"
              fullWidth
              margin="normal"
              onChange={(e) => setUsername(e.target.value)}
              value={username}
            />
            <TextField
              label="Password"
              variant="outlined"
              type="password"
              fullWidth
              margin="normal"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              size="large"
              style={{ marginTop: "1rem" }}
            >
              Sign In
            </Button>
          </form>
        </Paper>
      </Container>
    </div>
  );
};

export default LoginPage;
