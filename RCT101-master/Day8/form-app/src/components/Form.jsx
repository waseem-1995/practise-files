import React, { useRef } from "react";
import { useState } from "react";

const Form = () => {
  const [form, setForm] = useState({});
  const ref = useRef();

  const handleChange = (e) => {
    let { type, checked, name, value, files } = e.target;
    if (type === "checkbox") {
      setForm({
        ...form,
        [name]: checked,
      });
    } else if (type === "file") {
      setForm({ ...form, [name]: files });
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  let data = JSON.parse(localStorage.getItem("data")) || [];

  const handleSubmit = (e) => {
    if (!form.username) ref.current.focus();
    e.preventDefault();
    console.log(form)
    data.push(form)
    localStorage.setItem('data', JSON.stringify(data))
  };

  //displaying data on console - use useEffect hook...
  return (
    <>
    <div>
      <h1>Forms - User Info</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name :</label>
          <input
            type="text"
            required
            name="username"
            placeholder="Enter Name..."
            value={form.username}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Email :</label>
          <input
            type="email"
            name="email"
            placeholder="Enter Email..."
            value={form.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Password :</label>
          <input
            type="password"
            name="password"
            placeholder="Enter Password..."
            value={form.password}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="">Department : </label>
          <select
            name="selectDepartment"
            id=""
            value={form.selectDepartment}
            onChange={handleChange}
          >
            <option value="">Select Department</option>
            <option value="Mechanical">Mechanical</option>
            <option value="Electrical">Electrical</option>
            <option value="Computer">Computer</option>
            <option value="Civil">Civil</option>
          </select>
        </div>
        <div>
          <label>Age :</label>
          <input
            type="number"
            name="age"
            placeholder="Enter age..."
            value={form.age}
            onChange={handleChange}
          />
        </div>
        <div>
          <input
            type="checkbox"
            name="IsIndian"
            placeholder="Enter age..."
            checked={form.IsIndian}
            onChange={handleChange}
          />
          <label> : IsIndian</label>
        </div>
        <div>
          <div>
            <input
              type="radio"
              name="gender"
              value="male"
              onChange={handleChange}
            />
            <label> : Male</label>
          </div>
          <div>
            <input
              type="radio"
              name="gender"
              value="Female"
              onChange={handleChange}
            />
            <label> : Female</label>
          </div>
        </div>
        <div>
          <label htmlFor="">User Resume : </label>
          <input
            type="file"
            name="resume"
            id=""
            onChange={handleChange}
            files={form.resume}
          />
        </div>
        <input type="submit" value="Submit" />
      </form>
    </div>

    <div>
      <hr />
      Data Mapped from Local Storage Below 

      {data.map((el) => {
        return <div>
          <p>NAME : {el.username}</p>
          <p>EMAIL : {el.email}</p>
          <p>DEPARTMENT : {el.selectDepartment}</p>
          <p>AGE : {el.age}</p>
          <p></p>
        </div>
      })}
    </div>
    </>
  );
};

export default Form;
