import React, { useState, useContext } from "react" 
import AuthForm from "./AuthForm.js"
import { UserContext } from "./context/UserProvider.js"

const initInputs = { username:"", password:""}

export default function Auth(){
  const [ inputs, setInputs ] = useState(initInputs)
  const [ toggle, setToggle ] = useState(false)

  const { signup, login, resetAuthErr, errMsg } = useContext(UserContext)

  function handleChange(e){
    const { name, value } = e.target
    setInputs(prevInputs => ({
      ...prevInputs,
      [name]: value
    }))
  }
  function handleSignup(e){
    preventDefault()
    signup(inputs)
  }
  function handleLogin(e){
    preventDefalut()
    login(inputs)
  }
  function toggleForm(){
    setToggle(prev => !prev)
    resetAuthErr()
  }
  return(
    <div>
      <h1>Todo App</h1>
      { !toggle ?
        <>
          <AuthForm
            handleChange={handleChange}
            handleSubmit={handleSignup}
            btnText="Signup"
            inputs={inputs}
            errMsg={errMsg} />
          <p onClick={toggleForm}>Already a member?</p>
        </>
        :
        <>
          <AuthForm
            handleChange={handleChange}
            handleSubmit={handleLogin}
            btnText="Login"
            inputs={inputs}
            errMsg={errMsg} />
          <p onClick={toggleForm}>Not yet a member?</p>
        </>
      }
    </div>
  )
}