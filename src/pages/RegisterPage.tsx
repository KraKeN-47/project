import { Box, Button, FormControl, TextField } from "@material-ui/core";
import React, { useState } from "react";

const RegisterPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPass, setRepeatPass] = useState("");
  return (
    <Box>
      <FormControl>
        <TextField
          style={{ paddingBottom: "20px" }}
          color="primary"
          id="outlined-basic"
          label="Vardas"
          name="name"
          onChange={(event) => setName(event.target.value)}
          required
        />
        <TextField
          style={{ paddingBottom: "20px" }}
          color="primary"
          id="outlined-basic"
          label="Įveskite el. paštą"
          name="email"
          onChange={(event) => setEmail(event.target.value)}
          required
        />
        <TextField
          style={{ paddingBottom: "20px" }}
          color="primary"
          id="outlined-basic"
          label="Įveskite slaptažodį"
          name="password"
          type="password"
          onChange={(event) => setPassword(event.target.value)}
          required
        />
        <TextField
          style={{ paddingBottom: "20px" }}
          color="primary"
          id="outlined-basic"
          label="Pakartokite slaptažodį"
          name="repeatPassword"
          type="password"
          onChange={(event) => setRepeatPass(event.target.value)}
          required
        />
        <Button color="primary" variant="outlined" type="submit">
          Užsiregistruoti
        </Button>
      </FormControl>
    </Box>
  );
};
export default RegisterPage;
