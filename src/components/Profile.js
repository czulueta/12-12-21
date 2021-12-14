import React, { useContext } from "react"
import { UserContext } from "./context/UserProvider.js"
import TodoForm from "./TodoForm.js"
import TodoList from "./TodoList.js"

export default function Profile(){
  const { 
    user: 
      { username }, 
    addTodo, 
    todos 
  } = useContext(UserContext)

  return(
    <div>
      <h1>Welcome {username}</h1>
      <h3>Add a Todo</h3>
      <TodoForm addTodo={addTodo}/>
      <h3>Your Todos</h3>
      <TodoList todos={todos}/>
    </div>
  )
}