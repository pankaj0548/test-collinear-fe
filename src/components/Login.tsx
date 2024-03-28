import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "./Header";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const handleSubmit = async () => {
    try {
      console.log("called");
      const response = await axios.post(
        "http://localhost:3000/api/auth/login",
        { username, password }
      );
      const token = response.data.token;
      // Store token in local storage
      localStorage.setItem("token", token);
      // Redirect user to dashboard or another page
      navigate("/");
    } catch (error) {
      setError("Invalid username or password");
    }
  };
  return (
    <>
      <Header />
      <div className="card">
        <h1 className="align-center">Log In</h1>

        <div className="align-center inputDiv">
          <label className="fs-14">Email address</label>
          <input
            autoComplete="username"
            autoCorrect="off"
            autoCapitalize="none"
            className="form-input"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Email address"
            required
            type="text"
          />
          <label className="fs-14">Password</label>
          <input
            autoComplete="current-password"
            className="form-input fs-14"
            name="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            type="password"
          />
        </div>
        <div>
          <p className="align-center fs-14">
            Don't have an account?&nbsp;
            <Link className="" to="/signup">
              Sign Up
            </Link>
          </p>{" "}
          {error && <p className="clr-r fs-14">*{error}</p>}
          <button
            className="authButton bg-2 clr-f submitBtn"
            type="submit"
            onClick={() => handleSubmit()}
          >
            Login{" "}
          </button>
        </div>
      </div>
    </>
  );
}
export default Login;
