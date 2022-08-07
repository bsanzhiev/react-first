import React from "react";
import PropTypes from "prop-types";
import { createField, Input } from "../../common/FormControls/FormControls";
import { Contacts } from "./ProfileInfo";
import { reduxForm } from "redux-form";

const ProfileDataForm = ({ profile }) => {
  return (
    <form>
      <div>
        <button onClick={() => {}}>Save</button>
      </div>
      <div>
        <b>Full name: </b>
        {createField("Full name", "fullName", [], Input)}
      </div>

      <div>
        <b>Looking for a job: </b>
        {profile.lookingForAJob ? "yes" : "no"}
        {createField("", "lookingForAJob", [], Input, { type: "checkbox" })}
      </div>

      {profile.lookingForAJob && (
        <div>
          <b>My skills: </b>
          {profile.lookingForAJobDescription}
        </div>
      )}

      <div>
        <b>About me:</b>
        {profile.aboutMe}
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
};
