import React, { useState } from "react";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Button,
  Input
} from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { authenticationSuccess } from "../Redux/Authentication/action";
import styled from "styled-components";
const initialState = {
  email: "",
  password: "",
};
const Login = () => {
  const [details, setDetails] = useState(initialState);
  const dispatch = useDispatch()
  const { email, password } = details;
  const handleChange = (e) => {
    const { name, value } = e.target;
    setDetails((rev) => {
      return { ...rev, [name]: value };
    });
  };
  const handleSubmit = (e)=>{
    e.preventDefault()
    console.log(details)
    dispatch(authenticationSuccess(details))
    
  setDetails(initialState)
  }
  return (
    <Blah>

    <div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <FormControl>
          <FormLabel>Email address</FormLabel>
          <Input
            type="email"
            name="email"
            value={email}
            onChange={(e) => handleChange(e)}
          />
          <FormLabel>Password</FormLabel>
          <Input
            type="password"
            name="password"
            value={password}
            onChange={(e) => handleChange(e)}
          />
          <Button type="submit">LogIn</Button>
        </FormControl>
      </form>
    </div>
    </Blah>
  );
};
const Blah = styled.div`
display:flex;
justify-content:space-around
`
export default Login;
