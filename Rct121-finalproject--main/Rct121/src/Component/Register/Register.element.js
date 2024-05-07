import styled from "styled-components";

export const RegContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  align-items: center;
  justify-content: center;
  background-color: #feeef1;
`;
export const Register_logo = styled.img`
  width: 400px;
`;

export const Form = styled.form`
  background-color: white;
  padding: 0px 50px;
`;
export const Title = styled.p`
  font-size: 22px;
  font-weight: 600;
  text-align: center;
  color:purple;
`;
export const Button = styled.button`
  width: 100%;
  height: 50px;
  padding: 10px;
  border: none;
  background-color: #ff3f6c;
  color: white;
  border-radius: 5px;
  font-weight: bold;
  font-size: 18px;
  cursor: pointer;
  margin-top: 15px;
  margin-bottom: 30px;
  &:hover{
    background-color:rgba(255,63,108,0.9)
  }
`;

export const FormInputDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  align-items: start;
  justify-content: start;
 
`;

export const Input = styled.input`
height:30px;
width:300px;
`;
export const P = styled.p`
color:red;
margin-top:2px;
`;
export const G = styled.p`
color:green;
font-size:20px;
`;


