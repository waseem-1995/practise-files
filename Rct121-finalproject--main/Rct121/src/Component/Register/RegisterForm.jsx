import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import registerlogo from "../../Images/registerlogo.png";

import {
  Register_logo,
  RegContainer,
  Form,
  Button,
  Title,
  FormInputDiv,
  Input,
  P,
  G
} from "./Register.element";

const RegisterForm = () => {
  const navigate = useNavigate();
  const initialValues = { username: "", email: "", password: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };
let datas = [];
  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      datas = JSON.parse(localStorage.getItem("registerData") || "[]");
      datas = [...datas, formValues];
      localStorage.setItem("registerData", JSON.stringify(datas));
      //alert("Register Successfully");
      setTimeout(() => {
        navigate("/login");
      }, 1000);
    }
  }, [formErrors]);

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.username) {
      errors.username = "Username is required";
    }

    if (!values.email) {
      errors.email = "Email is required";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }

    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password.length < 4) {
      errors.password = "Password must be more than 4 characters";
    } else if (values.password.length > 10) {
      errors.password = "Password cannot exceed more than 10 characters";
    }
    return errors;
  };

  return (
    <RegContainer>
      {Object.keys(formErrors).length === 0 && isSubmit && (
        <div><G>Registered successfully</G></div>
      )}
      <Register_logo src={registerlogo} alt="" />

      <Form onSubmit={handleSubmit}>
        <Title>Register</Title>
        <FormInputDiv>
          <label>Username</label>
          <Input
            type="text"
            name="username"
            placeholder="Username"
            value={formValues.username}
            onChange={handleChange}
          />
          <P>{formErrors.username}</P>
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

          <Button>REGISTER</Button>
        </FormInputDiv>
      </Form>
      <p>
        Already having Account please
        <Link to="/login">{` Login`}</Link>
      </p>
    </RegContainer>
  );
};
export default RegisterForm;
