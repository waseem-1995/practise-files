import { useReducer } from "react";
import "./App.css";
import { reducer } from "./reducer";
import { initialState} from "./initialState";
import {set_email, set_password, login_request, login_success, login_failure } from "./actionCreators";
const  axios = require("axios");

function App() {
  //use the useReducer function here; import the reducer function and initial state variable here.
  const [reducerState, dispatch] = useReducer( reducer, initialState );

  function handleSubmit(e){
    e.preventDefault();
    dispatch(login_request);
    let data={email:reducerState.email, password:reducerState.password};
    axios.post("https://reqres.in/api/login", data).then((res)=>{
       console.log("res", res.data.token)
      dispatch(login_success(res.data.token));
    }).catch (err => {
      dispatch(login_failure());
    })


  }

  //console.log(reducerState)
  return (
    <div className="main-app">
      <div className="login-wrapper">
        <div style={{ textAlign: "center" }}>
          <h1>LOGIN</h1>
          <div className="welcome-text">
            Welcome to the RCT-211 E1 Evaluation
          </div>
          {/* if the user is authenticated as per the reducerState, THEN ONLY show div with the token data, OTHERWISE show the Incorrect Credentials div */
          
          reducerState.isAuth ? <div data-cy="token">Token: {reducerState.token}</div> :<div data-cy="incorrect-credentials" style={{ color: "red" }}>
          Incorrect Credentials
        </div>
          
          }
          
          
        </div>
        <form onSubmit={handleSubmit}>
          <div className="email-wrapper">
            <label>Email</label>
            <input data-cy="email"  onChange={(e)=>dispatch(set_email(e.target.value))} />
          </div>
          <div className="password-wrapper">
            <label>Password</label>
            <input data-cy="password" onChange={(e)=>dispatch(set_password(e.target.value))} />
          </div>
          <div className="submit-button-wrapper">
            <button data-cy="submit-button" type="submit">
              LOGIN
            </button>
          </div>
        </form>
        <div className="social-media-icons">
          <img src="/facebook.png" alt="facebook-icon" />
          <img src="/instagram.png" alt="facebook-icon" />
          <img src="/linkedin.png" alt="facebook-icon" />
          <img src="/twitter.png" alt="facebook-icon" />
          <img src="/github.png" alt="facebook-icon" />
        </div>
      </div>
    </div>
  );
}

export default App;
