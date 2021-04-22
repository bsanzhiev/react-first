// https://redux-form.com/8.3.0/docs/gettingstarted.md/

import React from "react";
import { Field, reduxForm } from "redux-form";
import PropTypes from "prop-types";

const Login = () => {
  return (
    <div>
      <h1> Login </h1>
      <LoginReduxForm />
    </div>
  );
};

const LoginForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field name="login" placeholder={"Login"} component="input" />
      </div>
      <div>
        <Field name="password" placeholder={"Password"} component="input" />
      </div>
      <div>
        <Field name="rememberMe" type="checkbox" component="input" /> Remember
        me
      </div>
      <div>
        <button>Login</button>
      </div>
    </form>
  );
};

const LoginReduxForm = reduxForm({ form: "login" })(LoginForm);

LoginForm.propTypes = {
  handleSubmit: PropTypes.object,
};

export default Login;
