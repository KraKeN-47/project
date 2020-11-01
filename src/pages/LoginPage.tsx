import React, { useState } from "react";
import { TextField, Box, Button } from "@material-ui/core";

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(email);
    console.log(password);
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
      <form onSubmit={handleSubmit} style={{ display: "grid" }}>
        <TextField
          id="outlined-basic"
          label="El paštas"
          name="email"
          onChange={(event) => setEmail(event.target.value)}
          style={{ paddingBottom: "20px" }}
        />
        <TextField
          id="outlined-basic"
          label="Slaptažodis"
          name="password"
          type="password"
          onChange={(event) => setPassword(event.target.value)}
          style={{ paddingBottom: "20px" }}
        />
        <Button variant="outlined" type="submit">
          Prisijungti
        </Button>
      </form>
    </Box>
  );
};
export default Login;
