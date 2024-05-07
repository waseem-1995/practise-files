import { Box, Button, Heading, Input, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router";
import { get_update_func } from "../Redux/action";
import { useDispatch } from "react-redux";

export const Editpage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
      const [data, setData] = useState({});
      const { id } = useParams();
      const handleupdate = ()=> {
        const payload = data;
        dispatch(get_update_func(payload,id));
        navigate("/")
      }
      useEffect(() => {
            axios.get(`http://localhost:8080/countries/${id}`)
                  .then((res) => setData(res.data))
                  .catch((error) => console.error(error));
      }, []);
      return (
            <Box>
                  <Heading>Edit Page</Heading>
                  <Box>
                        <Text>Capital City</Text>
                        <Input
                              data-cy="capital-city"
                              defaultValue={data.city}
                              onChange={(e)=> setData({
                                ...data,city : e.target.value
                              })}
                        />
                  </Box>
                  <Box>
                        <Text>Population</Text>
                        <Input
                              data-cy="population"
                              defaultValue={data.population}
                              onChange={(e)=> setData({
                                ...data,population : e.target.value
                              })}
                        />
                  </Box>
                  <Button data-cy="update-button" onClick={handleupdate}>Update</Button>
            </Box>
      );
};

export default Editpage;
