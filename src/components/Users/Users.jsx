import React from 'react';
import styles from "./users.module.css";
import userPhoto from '../../media/userPhoto.png';
//import { checkPropTypes } from 'prop-types';
import PropTypes from 'prop-types';

let Users = (props) => {

  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  return (
    <div>
      <div>
        {pages.map(p => {
          return <span className={props.currentPage === p && styles.selectedPage}
            onClick={(e) => { props.onPageChanged(p) }} key={p.id}>{p}</span>
        })}
      </div>
      {this.props.users.map((u) => (
        <div key={u.id}>
          <span>
            <div>
              <img
                alt="userpic"
                src={u.photos.small != null ? u.photos.small : userPhoto}
                className={styles.userPhoto}
              />
            </div>
            <div>
              {u.followed ? (
                <button
                  onClick={() => {
                    props.unfollow(u.id);
                  }}>Unfollow</button>) : (
                  <button
                    onClick={() => {
                      props.follow(u.id);
                    }}>Follow</button>)
              }
            </div>
          </span>
          <span>
            <span>
              <div>
                <div>{u.name}</div>
                <div>{u.status}</div>
              </div>
              <div></div>
            </span>
            <span>
              <div>{"u.location.country"}</div>
              <div>{"u.location.city"}</div>
            </span>
          </span>
        </div>
      ))}
    </div>
  );
}

Users.propTypes = {
  totalUsersCount: PropTypes.number,
  pageSize: PropTypes.string,
  currentPage: PropTypes.string,
  onPageChanged: PropTypes.string,
  follow: PropTypes.bool,
  unfollow: PropTypes.bool
};
// https://ru.reactjs.org/docs/typechecking-with-proptypes.html

export default Users;
