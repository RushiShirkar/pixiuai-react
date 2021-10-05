import React, { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from "react-router-dom";
import '../styles/styles.css';
import { login } from '../redux/actions';

function Login() {
  const [userData, setUserData] = useState({ email: "", password: "" });
  const [errorMessage, setErrorMessage] = useState({ value: "" });
  const history = useHistory();
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    setUserData((prevState) => {
      return {
        ...prevState,
        [e.target.name]: e.target.value,
      };
    });
  };

  const userLogin = async(e) => {
    e.preventDefault();

    if (userData.username === "" || userData.password === "") {
      setErrorMessage((prevState) => ({
        value: "Empty username/password field",
      }));
    } else {
      await login(userData, dispatch);
    }
  };

  return(
    <>
      <div className="d-md-flex half">
        <div className="contents">
          <div className="container">
            <div className="row align-items-center justify-content-center">
              <div className="col-md-12">
                <div className="form-block mx-auto">
                  <div className="text-center mb-5">
                    <h3>Login to <strong>PixiuAI</strong></h3>
                  </div>
                  <form onSubmit={userLogin} method="post">
                    <div className="form-group first">
                      <label for="username">Email</label>
                      <input type="email" className="form-control" placeholder="your-email@gmail.com" name="email" 
                        onChange={(e) => handleInputChange(e)}
                      />
                    </div>
                    <div className="form-group last mb-5 mt-2">
                      <label for="password">Password</label>
                      <input type="password" className="form-control" placeholder="Your Password" name="password" 
                        onChange={(e) => handleInputChange(e)}
                      />
                    </div>
                    <input type="submit" value="Login" className="btn btn-block btn-primary w-100" />
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login;
