import React from "react";
import "font-awesome/scss/font-awesome.scss";
import "./../Scss/Login.scss";
import SinIn from "./../Components/SinIn";
import SinUp from "../Components/SinUp";
import { AnimateOnChange } from "react-animation";

const Login = () => {
  const [state, setstate] = React.useState(true);
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
              checked={!state ? false : true}
              onClick={() => setstate(true)}
            />
            <label for="radioOne" className="radio" chec>
              ثبت نام
            </label>
            <input
              type="radio"
              value="None"
              id="radioTwo"
              name="account"
              checked={state ? false : true}
              onClick={() => setstate(false)}
            />
            <label id="radio2" for="radioTwo" className="radio">
              ورود کاربر
            </label>
          </div>

          <AnimateOnChange
            animationIn="bounceIn"
            animationOut="bounceOut"
            durationOut={500}
          >
            {state ? <SinIn /> : <SinUp />}
          </AnimateOnChange>
        </form>
      </div>
    </>
  );
};

export default Login;
