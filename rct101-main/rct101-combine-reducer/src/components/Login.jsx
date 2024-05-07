import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { authapi } from '../store/auth/auth.action'
import {useEffect} from 'react'
import {useLocation,useNavigate} from 'react-router-dom'

const Login = () => {
  const {loading,error,isauth} = useSelector((store) => store.auth)
  const dispatch = useDispatch();
  const navigate = useNavigate()
    const [user,setuser] = useState({
      email:"",
      password:""
    })

  useEffect(() => {

    if(isauth){
      navigate("/" ,{replace:true})
    }

  },[isauth, navigate])

  if(loading){
    return (<div>...loading</div>)
  }
  
  if(error){
    return (<div>error occured</div>)
  }

  const check = () => {
       dispatch(authapi(user))
  }  

 

  return (
    <div>
        <h1>Login Page</h1>
      <input onChange={(e) => setuser({...user,email:e.target.value})} type="email" placeholder='email' />
      <input onChange={(e) => setuser({...user,password:e.target.value})} type="password" placeholder='password' />
      <button disabled={!user.email || !user.password} onClick={check}>submit</button>
    </div>
  )
}

export default Login
