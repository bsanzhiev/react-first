import React from "react";
import PropTypes from "prop-types";
import * as axios from "axios";
import Header from "./Header";
import { connect } from "react-redux";
import { setAuthUserData } from "../../redux/auth_reducer";

class HeaderContainer extends React.Component {
  componentDidMount() {
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
        withCredentials: true,
      })
      .then((response) => {
        if (response.data.resultCode === 0) {
          let { id, email, login } = response.data.data;
          this.props.setAuthUserData(id, email, login);
        }
      });
  }
  render() {
    return <Header {...this.props} />;
  }
}

HeaderContainer.propTypes = {
  setAuthUserData: PropTypes.object,
};

//@yandex
//N0RGUY@Eo$$Z
// eslint-disable-next-line no-unused-vars
const MapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login,
});

export default connect(MapStateToProps, { setAuthUserData })(HeaderContainer);
