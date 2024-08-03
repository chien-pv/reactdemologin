import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  let [email, setEmail] = useState();
  let [password, setPassword] = useState();

  async function handleLogin() {
    try {
      let res = await axios.post("http://localhost:8000/auth/login", {
        email,
        password,
      });
      localStorage.setItem("access_token", res.data.access_token);
      navigate("/");
      console.log("Login", res);
    } catch (error) {
      console.log(error.message);
    }
  }
  return (
    <div className="form-login">
      <h1>Login form</h1>
      <form>
        <TextField
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          required
          id="outlined-required"
          label="Email"
        />
        <TextField
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          type="password"
          required
          id="outlined-required"
          label="Password"
        />
        <Button onClick={handleLogin} variant="outlined">
          Submit
        </Button>
      </form>
    </div>
  );
}
