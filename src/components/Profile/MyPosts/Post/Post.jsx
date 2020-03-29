import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
  return (
    <div className={s.item}>
      <img src='https://lh3.googleusercontent.com/proxy/AE1DD6fMYp_XfZKAkonNM4zPykMgPrv2lU8nIN_1U_23v00se48_7yMSMy2_qnw5eBzYOklx2Tgtpdv5lJYjb5nly6zB6Zlx1rnx3yG9NudNJsIz24KA'></img>
        { props.message }
      <div>
        <span>Like ({props.likes})</span>
      </div>
    </div>
  )
};

export default Post;