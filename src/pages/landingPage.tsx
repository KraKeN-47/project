import React from "react";
import { Box, Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";

import { paths } from "../router/paths";

const LandingPage: React.FC = () => {
  const history = useHistory();
  const handleLogin = () => {
    history.push(paths.login);
  };
  const handleRegister = () => {
    history.push(paths.register);
  };
  return (
    <Box
      width="30%"
      style={{ background: "cyan" }}
      borderRadius="20px"
      padding="20px"
      margin="auto"
      marginTop="20%"
      textAlign="center"
    >
      <h1>Sveiki atvykę į Naminių gyvūnų viešbutį</h1>
      <div style={{ paddingBottom: "10px" }}>
        <Button variant="outlined" color="primary" onClick={handleLogin}>
          Prisijungti
        </Button>
      </div>
      <Button variant="outlined" color="secondary" onClick={handleRegister}>
        Registruotis
      </Button>
    </Box>
  );
};

export default LandingPage;
