import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "./Header";

function Signup() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const createUser = async () => {
    try {
      console.log("called");
      const response = await axios.post(
        "http://localhost:3000/api/auth/register",
        { username, password }
      );
      const message = response.data.message;
      // Store token in local storage
      console.log(message);
      navigate("/login");
      //   localStorage.setItem('token', token);
      // Redirect user to dashboard or another page
    } catch (err: any) {
      setError(err);
    }
  };
  return (
    <>
      <Header />
      <div className="card">
        <h1 className="align-center">Join us</h1>

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
            Already have an account?&nbsp;
            <Link className="" to="/login">
              Log In
            </Link>
          </p>
          <button
            className="authButton bg-2 clr-f submitBtn"
            type="submit"
            onClick={() => createUser()}
          >
            Register
          </button>

          <p className="clr-r">{error}</p>
        </div>
      </div>
    </>
  );
}
export default Signup;
