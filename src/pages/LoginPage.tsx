import React, { useState } from "react";
import { FormControl, TextField, Box } from "@material-ui/core";

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <Box>
      <FormControl>
        <TextField
          id="outlined-basic"
          label="El paštas"
          name="email"
          onChange={(event) => setEmail(event.target.value)}
        />
        <TextField
          id="outlined-basic"
          label="Slaptažodis"
          name="password"
          type="password"
          onChange={(event) => setPassword(event.target.value)}
        />
      </FormControl>
    </Box>
  );
};
export default Login;
