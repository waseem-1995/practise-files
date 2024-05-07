import React from 'react'
import {Link} from 'react-router-dom'
import {useSelector} from "react-redux"
import { useDispatch } from 'react-redux/es/exports'
import { logoutapi } from '../store/auth/auth.action'
import { useEffect } from "react";

const Page = () => {
  const dispatch = useDispatch()
  const {isauth,token} = useSelector((store) => store.auth)
  useEffect(() => {
  
  },[])
  return (
    <div>
      <Link onClick={() => {
        if(isauth){
          dispatch(logoutapi())
        }
      }} to='/login'>{isauth ? "logout" : "login"}</Link>
      <h1>hello</h1>
    </div>
  )
}

export default Page
