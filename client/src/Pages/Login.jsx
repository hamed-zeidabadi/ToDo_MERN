import React from "react";
import "./../Scss/Login.scss";

const Login = () => {
  return (
    <>
      <div className="testbox">
        <h1>ثبت نام</h1>
        <form>
          <div className="accounttype">
            <input
              type="radio"
              value="None"
              id="radioOne"
              name="account"
              checked
            />
            <label for="radioOne" className="radio" chec>
           ثبت نام
            </label>
            <input type="radio" value="None" id="radioTwo" name="account" />
            <label for="radioTwo" className="radio">
              ورود کاربر
            </label>
          </div>
          <label id="icon" for="name">
            <i className="icon-envelope " />
          </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Email"
            required
          />
          <label id="icon" for="name">
            <i className="icon-user"></i>
          </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Name"
            required
          />
          <label id="icon" for="name">
            <i className="icon-shield"></i>
          </label>
          <input
            type="password"
            name="name"
            id="name"
            placeholder="Password"
            required
          />
          <div className="gender">
            <input type="radio" value="None" id="male" name="gender" checked />
            <label for="male" className="radio" chec>
              Male
            </label>
            <input type="radio" value="None" id="female" name="gender" />
            <label for="female" className="radio">
              Female
            </label>
          </div>
          <p>
            By clicking Register, you agree on our{" "}
            <a href="#">terms and condition</a>.
          </p>
          <a href="#" className="button">
            Register
          </a>
        </form>
      </div>
    </>
  );
};

export default Login;
