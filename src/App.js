import './App.css';
import { useState } from 'react';
import User from './components/User';
import Todo from './components/Todo';
import Error from './components/Error';

function App() {
  const [users,setUsers]=useState([]);
  const [todo,setTodos]=useState([]);
  const [userData,setUserData]=useState(true);
  const [errorFlag,setErrorFlag]=useState(false);
  const fetchData =()=>{
    fetch('https://jsonplaceholder.typicode.com/user')
    .then(response=> {
        if(response.ok){
        return response.json();
        }
        else{
        throw new Error('Error!!');
        }
      })
    .then(data=>{
      setUsers(data);     
    })
    .catch(error=>{
      setErrorFlag(true);
    });
    setUserData(true);
  }
  
  const fetchTodos =()=>{
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then(response=>response.json())
    .then(data=>{
      setTodos(data);
    })
    .catch((error)=>{
      setErrorFlag(true);
    })
      setUserData(false);
  }

  if(errorFlag){
   
    return( <Error/>);
  }

  return (
    <div className="App">
       <div className='topbar'></div>
        <div> <button onClick={fetchData}>Users</button>
       
        <button onClick={fetchTodos}>Todos</button>
        </div>
        {userData ? users.map((user,index)=><User user={user}/>)
        :
       todo.map((todos,index)=>
              <Todo item={todos}/>
           )
           }
    </div>
  );
}

export default App;
