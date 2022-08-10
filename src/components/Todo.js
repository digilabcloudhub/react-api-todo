import React from 'react'

const Todo = ({item}) => {
  
  return (
    <div className='todos'>
        
        <h3>Id: {item.id}</h3>
        <h3>Title: {item.title}</h3>
    </div>
  )
}

export default Todo;