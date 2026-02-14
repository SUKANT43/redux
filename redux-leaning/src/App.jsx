import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { fetchUsers,addUser,deleteUser } from '../redux/userSlice'
import { increment,decrement } from '../redux/counterSlice'
import { useSelector,useDispatch } from 'react-redux'
import { useEffect } from 'react'

function App() {


  const count=useSelector((state)=>state.counter.value);

  const dispatch=useDispatch();

  const {list,loading,error}=useSelector(state=>state.users);

  useEffect(()=>{
    dispatch(fetchUsers());
  },[]);

  return (
    <>
      <button onClick={()=>dispatch(increment())}>+</button>
      <h2>{count}</h2>
      <button onClick={()=>dispatch(decrement())}>-</button>

      <div>
        <h2>users</h2>
        <button onClick={()=>dispatch(addUser({name:"New User",role:"intern"}))}>Add</button>
        {loading && <p>Loading...</p>}

        <h1>{error}</h1>

              {list.map(u => (
        <div key={u.id}>
          {u.name} - {u.role}
          <button onClick={() => dispatch(deleteUser(u.id))}>Delete</button>
        </div>
      ))}

      </div>
    </>
  )
}

export default App
