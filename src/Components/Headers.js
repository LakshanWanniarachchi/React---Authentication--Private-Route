import React from "react";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { useContext } from "react";
import AuthContext from "../context/AuthContext";

const Headers = () => {
  const { user, logout } = useContext(AuthContext);
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Welcome {user ? user.username : "Guest"}
        </Typography>

        {user ? (
          <Button color="inherit" href="/logout" onClick={logout}>
            Logout
          </Button>
        ) : (
          <Button color="inherit" href="/login">
            Login
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Headers;
