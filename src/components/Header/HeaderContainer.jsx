import React from "react";
import PropTypes from "prop-types";
import Header from "./Header";
import { connect } from "react-redux";
import { getAuthUserData } from "../../redux/auth_reducer";

class HeaderContainer extends React.Component {
  componentDidMount() {
    this.props.getAuthUserData();
  }
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
const MapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login,
});

export default connect(MapStateToProps, { getAuthUserData })(HeaderContainer);
