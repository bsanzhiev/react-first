// Контейнерная компонента для Профиля

import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import Profile from "./Profile";
import { getUserProfile } from "../../redux/profile_reducer";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";

class ProfileContainer extends React.Component {
  // Метод жизненного цикла
  componentDidMount() {
    /* Совпадение нашего URL с какими-то роутами из App.js */
    let userId = this.props.match.params.userId;
    // хардкод
    if (!userId) {
      userId = 2;
    }
    /* Вот здесь забыл this.props. 17.04.2021 */
    this.props.getUserProfile(userId);
  }

  /* Метод render() возвращает компоненту Profile.
  23.03.2021 ошибка передачи пропсов в компоненту Профиль.*/

  render() {
    return <Profile {...this.props} profile={this.props.profile} />;
  }
}

/* mapStateToProps и mapDispatchToProps возвращают объект props.
Прокидываем в компоненту профиль из стейта.
Ошибка - в стейте нет профиля с сервера.
Не пришел профиль с сервера? Почему?
*/
let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
});

/* connect далее передает эти props в целевую компоненту - 
в данном случае это ProfileComponent 
mapStateToProps - мы берем из стейта необходимые компоненте данные 
Можно передавать в connect не весь mapDispatchToProps,
а только необходимую часть, в виде отдельного объекта.
58 урок
Объект getUserProfile содержит в себе экшенкриейторы*/

export default compose(
  connect(mapStateToProps, { getUserProfile }),
  withRouter,
  withAuthRedirect
)(ProfileContainer);

/* Код перенесен в withAuthRedirect
  HOC for redirect
  let AuthRedirectComponent = withAuthRedirect(ProfileContainer);
  let WithURLDataContainerComponent = withRouter(AuthRedirectComponent);

  export default connect(mapStateToProps, { getUserProfile })(
    WithURLDataContainerComponent
  ); */

ProfileContainer.propTypes = {
  setUserProfile: PropTypes.object,
  match: PropTypes.object,
  profile: PropTypes.object,
  getUserProfile: PropTypes.object,
  isAuth: PropTypes.bool,
};
