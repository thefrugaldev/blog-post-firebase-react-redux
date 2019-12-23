import React, { createRef } from "react";
import { toast } from "react-toastify";
// Redux
import { connect } from "react-redux";
import { login } from "../redux/firebase-actions";

const Login = ({ login, history }) => {
  const email = createRef();
  const password = createRef();

  const handleSubmit = event => {
    event.preventDefault();
    login(email.current.value, password.current.value)
      .then(() => {
        toast.success("Login successful");
        history.push("/");
      })
      .catch(error => {
        toast.error("Login failed");
        console.error(error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Login</h1>
      <div className="control">
        <input
          name="name"
          type="email"
          ref={email}
          placeholder="Email"
          className="input is-primary"
        />
      </div>

      <div className="control">
        <input
          name="password"
          type="password"
          ref={password}
          placeholder="Password"
          autoComplete="none"
          className="input is-primary"
        />
      </div>

      <div className="control">
        <button type="submit" className="button is-link">
          Submit
        </button>
      </div>
    </form>
  );
};

export default connect(null, { login })(Login);
