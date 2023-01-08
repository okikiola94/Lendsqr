import { useState } from "react";
import "./login.scss";
import Logo from "./images/lendsqr.png";
import Signin from "./images/signin.png";
import { useNavigate } from "react-router-dom";

type Loginprop = {
  preventDefault(): unknown;
  error: string;
};

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };
  //   const navigate = useNavigate();

  const handleFormSubmit = (e: Loginprop) => {
    e.preventDefault();

    setIsLoading(true);
    setErrors([]);

    if (!email || !password) {
      setIsLoading(false);
      setErrors([...errors]);
    }
  };
  // else {
  //     navigate("");
  //   }

  return (
    <div className="Login_Container">
      <div className="img_wrapper">
      <img src={Logo} alt="logo" className="logo_img"/>
        <div className="img_container">
        <img src={Signin} alt="signin" />
        </div>
        </div>


        <div className="signin_flex">
          <div className="signin_wrap">
          <h1 className="welcome">Welcome!</h1>
          <p className="enter-details">Enter details to login</p>
          <form action="submit" className="login_form">
            <input
              type="text"
              placeholder=" Email"
              className="input"
              name="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <br />
            <div className="password_input_container">
              <input
                type={passwordShown ? "text" : "password"}
                placeholder="Password"
                className="input-input-password"
                name="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button onClick={togglePassword} type="button">
                {passwordShown ? <p>HIDE</p> : <p>SHOW</p>}
              </button>
            </div>
            <h6 className="password_forget">FORGOT PASSWORD?</h6>
            <button className="btn btn-primary">
              {isLoading ? "Logging in..." : "Log In"}
            </button>
          </form>
        </div>
        </div>
    </div>
  );
};
export default Login;
