import { useState,useEffect } from "react";
import "react-toastify/dist/ReactToastify.min.css";
import registerlogo from "../../Images/registerlogo.png";
import { Link, useNavigate } from "react-router-dom";
import {
  Register_logo,
  RegContainer,
  Form,
  FormInputDiv,
  Title,
  Input,
  Button,
  P,
  G
} from "./Login.element";


const Login = () => {
  const navigate = useNavigate();
  var arr = JSON.parse(localStorage.getItem("registerData")) || [];

  const initialValues = { email: "", password: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [istrue,setIstrue]=useState(false);
  const [isCred,setIsCred]=useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  useEffect(() => {
   // console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      authorisation(formValues);
    }
  }, [formErrors]);

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    if (!values.email) {
      errors.email = "Email is required";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }
    if (!values.password) {
      errors.password = "Password is required";
    }
    return errors;
  };

  function authorisation(formValues) {
    for (var i = 0; i < arr.length; i++) {
      if (arr[i].email === formValues.email && arr[i].password === formValues.password) {
        setIstrue(true);
        setIsCred(false);
        setTimeout(() => {
          navigate("/");
        }, 500);
      } else {
        setIsCred(true);
      }
    }
  }


  return (
    <RegContainer>
      { istrue && (
        <div><G>Signed in successfully</G></div>
      )}
      { isCred && (
        <div><P>Incorrect Credentials</P></div>
      )}
      <Register_logo src={registerlogo} alt="" />
      <Form onSubmit={handleSubmit}>
        <Title>LOGIN</Title>
        <FormInputDiv>
          <label>Email</label>
          <Input
            type="email"
            name="email"
            placeholder="Email"
            value={formValues.email}
            onChange={handleChange}
          />
          <P>{formErrors.email}</P>
          <label>Password</label>
          <Input
            type="password"
            name="password"
            placeholder="Password"
            value={formValues.password}
            onChange={handleChange}
          />
          <P>{formErrors.password}</P>

          <Button>
            LOGIN
          </Button>
        </FormInputDiv>
      </Form>

      <p>
        New Here please
        <Link to="/register">{`  Register`}</Link>
      </p>
    </RegContainer>
  );
};


 export default Login;

