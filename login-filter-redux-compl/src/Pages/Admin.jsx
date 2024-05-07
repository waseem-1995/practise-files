import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  RadioGroup,
  HStack,
  Radio,
  Input,
  Button,
  Select,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { addProduct } from "../Redux/Product/action";
const initialStyle = {
  image: "",
  price: "",
  brand: "",
  category: "",
  description: "",
};
const Admin = () => {
  const dispatch = useDispatch()
  const [Product, setproduct] = useState(initialStyle);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submit", Product);
    dispatch(addProduct(Product))
    setproduct(initialStyle)

  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setproduct((prev) => {
      return { ...prev, [name]: name === "price" ? +value : value };
    });
  };
  const { image, price, description, category, brand } = Product;
  return (
    <Blah>
      <div>
        <form onSubmit={(e) => handleSubmit(e)}>
          <FormControl>
            <FormLabel>Url</FormLabel>
            <Input
              type="url"
              name="image"
              value={image}
              onChange={(e) => handleChange(e)}
            />
            <FormLabel>Brand</FormLabel>
            <Input
              type="text"
              name="brand"
              value={brand}
              onChange={(e) => handleChange(e)}
            />
            <FormLabel>Price</FormLabel>
            <Input
              type="number"
              name="price"
              value={price}
              onChange={(e) => handleChange(e)}
            />
            <FormLabel>Description</FormLabel>
            <Input
              type="type"
              name="description"
              value={description}
              onChange={(e) => handleChange(e)}
            />
            <FormLabel as="">Select Gender</FormLabel>
            <RadioGroup>
              <Select
                // name="gender"
                name="category"
                value={category}
                onChange={(e) => handleChange(e)}
              >
                <option>Select Gender</option>
                <option value="male">Male</option>
                <option value="Female">Female</option>
                <option value="kids">KIDS</option>
              </Select>
            </RadioGroup>
            <Button type="submit">Add Product</Button>
          </FormControl>
        </form>
      </div>
    </Blah>
  );
};
const Blah = styled.div`
  width: 50%;
  margin: auto;
  padding: 40px;
`;
export default Admin;
