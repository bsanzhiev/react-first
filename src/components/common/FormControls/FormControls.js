import React from "react";
import styles from "./FormControls.module.css";
import PropTypes from "prop-types";
import { Field } from "redux-form";

// eslint-disable-next-line no-unused-vars
export const FormControl = ({ input, meta, child, ...props }) => {
  const hasError = meta.touched && meta.error;
  return (
    <div className={styles.formControl + " " + (hasError ? styles.error : "")}>
      <div>{props.children}</div>
      {hasError && <span>{meta.error}</span>}
    </div>
  );
};

export const Textarea = (props) => {
  // eslint-disable-next-line no-unused-vars
  const { input, meta, child, ...restProps } = props;
  return (
    <FormControl {...props}>
      <textarea {...input} {...restProps} />
    </FormControl>
  );
};

export const Input = (props) => {
  // eslint-disable-next-line no-unused-vars
  const { input, meta, child, ...restProps } = props;
  return (
    <FormControl {...props}>
      <input {...input} {...restProps} />
    </FormControl>
  );
};

export const createField = (
  placeholder,
  name,
  validators,
  props = {},
  text = ""
) => (
  <div>
    <Field
      placeholder={placeholder}
      name={name}
      validate={validators}
      component={Input}
      {...props}
    />{" "}
    {text}
  </div>
);

FormControl.propTypes = {
  input: PropTypes.string,
  meta: PropTypes.string,
  child: PropTypes.string,
  children: PropTypes.string,
};

Textarea.propTypes = {
  input: PropTypes.string,
  meta: PropTypes.string,
  child: PropTypes.string,
};

Input.propTypes = {
  input: PropTypes.string,
  meta: PropTypes.string,
  child: PropTypes.string,
};
