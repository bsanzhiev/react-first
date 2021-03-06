import React from "react";
import PropTypes from "prop-types";
import Header from "./Header";
import { connect } from "react-redux";
import { logout } from "../../redux/auth_reducer";

class HeaderContainer extends React.Component {
  render() {
    return <Header {...this.props} />;
  }
}

HeaderContainer.propTypes = {
  getAuthUserData: PropTypes.object,
};

//@yandex
//N0RGUY@Eo$$Z
// eslint-disable-next-line no-unused-vars
const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login,
});

export default connect(mapStateToProps, { logout })(HeaderContainer);
