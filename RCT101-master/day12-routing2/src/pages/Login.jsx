import React, { useState } from "react";

const Login = () => {
  const [loginCreds, setLoginCreds] = useState({});

  const onChange = (e) => {
    const { name, value } = e.target;
    setLoginCreds({
      ...loginCreds,
      [name]: value,
    });
  };

  return (
    <div>
      Login
      <form onSubmit={onChange}>
        <input
          onChange={onChange}
          name="email"
          type="text"
          placeholder="Enter Email"
        />
        <br />
        <input
          onChange={onChange}
          name="password"
          type="password"
          placeholder="Enter Password"
        />
        <br />
        <input type="submit" />
      </form>
    </div>
  );
};

export default Login;
