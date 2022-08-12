import React from "react";
import PropTypes from "prop-types";
import {
  createField,
  Input,
  Textarea,
} from "../../common/FormControls/FormControls";
import { Contacts } from "./ProfileInfo";
import { reduxForm } from "redux-form";

const ProfileDataForm = ({ profile, handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <button onClick={() => {}}>Save</button>
      </div>
      <div>
        <b>Full name: </b>
        {createField("Full name", "fullName", [], Input)}
      </div>

      <div>
        <b>Looking for a job: </b>
        {createField("", "lookingForAJob", [], Input, { type: "checkbox" })}
      </div>

      <div>
        <b>My professional skills: </b>
        {createField(
          "My professional skills",
          "lookingForAJobDescription",
          [],
          Textarea
        )}
      </div>

      <div>
        <b>About me:</b>
        {createField("Hit some word about yourself!", "aboutMe", [], Textarea)}
      </div>

      <div>
        <b>Contacts: </b>
        {Object.keys(profile.contacts).map((key) => {
          return (
            <Contacts
              key={key}
              contactTitle={key}
              contactValue={profile.contacts[key]}
            />
          );
        })}
      </div>
    </form>
  );
};

const ProfileDataFormReduxForm = reduxForm({ form: "edit-profile" })(
  ProfileDataForm
);

export default ProfileDataFormReduxForm;

ProfileDataForm.propTypes = {
  profile: PropTypes.object,
  handleSubmit: PropTypes.object,
};
