import React from "react";
import "./../Scss/Login.scss";
import "font-awesome/scss/font-awesome.scss";

const SinIn = () => {
  return (
    <>
      <div id="sinin">
        <label id="icon" for="name">
          <i className="icon-envelope " />
        </label>
        <input type="text" name="name" id="name" placeholder="Email" required />
        <label id="icon" for="name">
          <i className="icon-user"></i>
        </label>
        <input type="text" name="name" id="name" placeholder="Name" required />
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
        <a href="#" className="button btn_submit">
          ثبت نام
        </a>
      </div>
    </>
  );
};

export default SinIn;
