// https://redux-form.com/8.3.0/docs/gettingstarted.md/

import React from "react";
import { Field, reduxForm } from "redux-form";
import PropTypes from "prop-types";
import { Input } from "../common/FormControls/FormControls";
import { required } from "../../utils/form_validators/validators";
import { connect } from "react-redux";
import { login } from "../../redux/auth_reducer";
import { Redirect } from "react-router";

const LoginForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          name="email"
          placeholder={"Email"}
          component={Input}
          validate={[required]}
        />
      </div>
      <div>
        <Field
          name="password"
          placeholder={"Password"}
          type={"password"}
          component={Input}
          validate={[required]}
        />
      </div>
      <div>
        <Field name="rememberMe" type="checkbox" component={Input} /> Remember
        me
      </div>
      <div>
        <button>Login</button>
      </div>
    </form>
  );
};

const Login = (props) => {
  const onSubmit = (formData) => {
    props.login(formData.email, formData.password, formData.rememberMe);
  };

  if (props.isAuth) {
    return <Redirect to={"/profile"} />;
  }

  return (
    <div>
      <h1> Login </h1>
      <LoginReduxForm onSubmit={onSubmit} />
    </div>
  );
};

const LoginReduxForm = reduxForm({ form: "login" })(LoginForm);

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
});

export default connect(mapStateToProps, { login })(Login);

LoginForm.propTypes = {
  handleSubmit: PropTypes.object,
  login: PropTypes.object,
};

Login.propTypes = {
  login: PropTypes.object,
  isAuth: PropTypes.bool,
};

//export default Login;
