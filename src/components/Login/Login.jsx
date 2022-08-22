// https://redux-form.com/8.3.0/docs/gettingstarted.md/

import React from "react";
import { Field, reduxForm } from "redux-form";
import style from "../common/FormControls/FormControls.module.css";
import PropTypes from "prop-types";
import { createField, Input } from "../common/FormControls/FormControls";
import { required } from "../../utils/form_validators/validators";
import { connect } from "react-redux";
import { login } from "../../redux/auth_reducer";
import { Redirect } from "react-router-dom";

const LoginForm = ({ handleSubmit, error, captchaUrl }) => {
  return (
    <form onSubmit={handleSubmit}>
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
        <Field name="rememberMe" type="checkbox" component={Input} />
        Remember me
      </div>

      <div>
        <img src={captchaUrl} />
        {captchaUrl && <img src={captchaUrl} />}
        {captchaUrl &&
          createField("Enter symbols", "captcha", [required], Input, {})}
      </div>

      {error && <div className={style.formCommonError}>{error}</div>}
      <div>
        <button>Login</button>
      </div>
    </form>
  );
};

const Login = (props) => {
  const onSubmit = (formData) => {
    props.login(
      formData.email,
      formData.password,
      formData.rememberMe,
      formData.captcha
    );
  };

  if (props.isAuth) {
    return <Redirect to={"/profile"} />;
  }

  return (
    <div>
      <h1>Login</h1>
      <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl} />
    </div>
  );
};

const LoginReduxForm = reduxForm({ form: "login" })(LoginForm);

const mapStateToProps = (state) => ({
  captchaUrl: state.auth.captchaUrl,
  isAuth: state.auth.isAuth,
});

export default connect(mapStateToProps, { login })(Login);

LoginForm.propTypes = {
  handleSubmit: PropTypes.object,
  login: PropTypes.object,
  error: PropTypes.object,
  captchaUrl: PropTypes.string,
};

Login.propTypes = {
  login: PropTypes.object,
  isAuth: PropTypes.bool,
  captchaUrl: PropTypes.string,
};

//export default Login;
