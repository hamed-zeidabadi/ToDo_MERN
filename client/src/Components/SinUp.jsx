import React from "react";
const SinUp = () => {
  return (
    <>
      <div id="sinup">
        <label id="icon" for="name">
          <i className="icon-envelope " />
        </label>
        <input type="text" name="name" id="name" placeholder="Email" required />
        <label id="icon" for="name">
          <i className="icon-user"></i>
        </label>
        <input
          type="password"
          name="name"
          id="name"
          placeholder="Password"
          required
        />
        <a href="#" className="button btn_submit">
          ورود
        </a>
      </div>
    </>
  );
};

export default SinUp;
