/* eslint-disable no-debugger */
/* eslint-disable react/prop-types */
import React from 'react';

let Users = (props) => {
  return (
    <div>
    {
      /*https://www.debuggr.io/react-map-of-undefined/ */
      props.users.map ( 
        u => <div key={u.id}>
        <span>
          <div>
            <img alt='userpic' src={u.photoUrl}/>
          </div>
          <div>
            <button>Follow</button>
          </div>
        </span>
        <span>
          <span>
            <div>
              <div>{u.fullName}</div>
              <div>{u.status}</div>
            </div>
            <div></div>
          </span>
          <span>
            <div>{u.location.country}</div>
            <div>{u.location.city}</div>
          </span>
        </span>
      </div>)
    }
    </div>
  )
}  

export default Users;

