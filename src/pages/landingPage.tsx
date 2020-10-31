import React from "react";
import { Button } from "@material-ui/core";
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
    <div>
      <h1>Sveiki atvykę į Naminių gyvūnų viešbutį</h1>
      <Button variant="outlined" color="primary" onClick={handleLogin}>
        Prisijungti
      </Button>
      <Button variant="outlined" color="secondary" onClick={handleRegister}>
        Registruotis
      </Button>
    </div>
  );
};

export default LandingPage;
