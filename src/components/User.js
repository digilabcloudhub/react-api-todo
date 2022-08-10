import React from 'react'

export const User = (props) => {
  return (
    <div className='users'>
        
            <h3>Name:{props.user.name}</h3><hr/>
              <h3>User:{props.user.username}</h3><hr/>
              <h3>E-mail:{props.user.email}</h3><hr/>
    </div>
  )
}

export default User;
