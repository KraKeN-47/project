import { Box, Button, TextField, Select, MenuItem } from "@material-ui/core";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import jwt from "jwt-decode";

import { api } from "../global/variables";
import { paths } from "../router/paths";
import { setUserType } from "../modules/userType/userData.slice";

const RegisterPage = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPass, setRepeatPass] = useState("");
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await api
      .post("/Users", {
        name,
        email,
        password,
        question,
        answer,
      })
      .then((resp: any) => {
        const data: any = jwt(resp.data.authToken);
        alert("Vartotojas užregistruotas");
        localStorage.setItem("token", resp.data.authToken);
        dispatch(
          setUserType({
            level: data.level,
            name: data.name,
            id: data.id,
          })
        );
        history.push(paths.availableTimes);
      })
      .catch((x) => alert(x.response.data));
  };
  return (
    <Box
      width="30%"
      style={{ background: "tan" }}
      borderRadius="20px"
      padding="20px"
      margin="auto"
      marginTop="10%"
      textAlign="center"
    >
      <form style={{ display: "grid" }} onSubmit={handleSubmit}>
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
        <label>Slaptas klausimas</label>
        <Select
          name="question"
          onChange={(event: any) => setQuestion(event.target.value)}
        >
          <MenuItem value="What's my surename?">What's my surename?</MenuItem>
          <MenuItem value="What's my favourite pet's name?">
            What's my favourite pet's name?
          </MenuItem>
          <MenuItem value="What is my Mother's name?">
            What is my Mother's name?
          </MenuItem>
          <MenuItem value="What is my Father's name?">
            What is my Father's name?
          </MenuItem>
        </Select>
        <TextField
          style={{ paddingBottom: "20px" }}
          color="primary"
          id="outlined-basic"
          label="Klausimo atsakymas"
          name="answer"
          type="text"
          onChange={(event) => setAnswer(event.target.value)}
          required
        />
        <Button color="primary" variant="contained" type="submit">
          Registruotis
        </Button>
      </form>
    </Box>
  );
};
export default RegisterPage;
