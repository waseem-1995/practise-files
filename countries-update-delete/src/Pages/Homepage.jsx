import {
      Box,
      Flex,
      Radio,
      RadioGroup,
      Stack,
      Table,
      TableContainer,
      Tbody,
      Text,
      Th,
      Thead,
      Td,
      Button,
      Tr,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { getDataDelete, getDataFunc } from "../Redux/action";


const Homepage = () => {
  const navigate = useNavigate()
      const dispatch = useDispatch();
      const countries = useSelector((state) => state.countries);
      const [sortBy, setSortBy] = useState("");

      const handleDelete = (id) => {
            dispatch(getDataDelete(id));
      };

      const handleEdit = (id)=> {
        navigate(`/country/${id}`)
      }

      const handlesort = (e) => {
            const { value } = e.target;
            setSortBy(value);
      };

      useEffect(() => {
            return dispatch(getDataFunc(dispatch));
      }, []);

      return (
            <Box>
                  <Flex padding="0 1rem" mb="2rem">
                        <Text fontWeight="700" paddingRight="1rem">
                              Sort by country population
                        </Text>
                        <RadioGroup>
                              <Stack direction="row">
                                    <Radio
                                          data-cy="asc"
                                          value="asc"
                                          id="asc"
                                          onChange={handlesort}
                                    >
                                          Ascending
                                    </Radio>
                                    <Radio
                                          data-cy="desc"
                                          value="desc"
                                          id="desc"
                                          onChange={handlesort}
                                    >
                                          Descending
                                    </Radio>
                              </Stack>
                        </RadioGroup>
                  </Flex>
                  <TableContainer
                        display={"block"}
                        textAlign={"center"}
                        minWidth={"700px"}
                        // overflowX={"auto"}
                  >
                        <Table variant="simple">
                              <Thead>
                                    <Tr>
                                          <Th>Country</Th>
                                          <Th>Capital</Th>
                                          <Th>Population</Th>
                                          <Th>Edit</Th>
                                          <Th>Delete</Th>
                                    </Tr>
                              </Thead>
                              <Tbody data-cy="table-body">
                                    {sortBy == "asc" &&
                                          countries
                                                ?.sort(
                                                      (a, b) =>
                                                            a.population -
                                                            b.population
                                                )
                                                .map((item, index) => {
                                                      return (
                                                            <Tr key={item.id}>
                                                                  <Td>
                                                                        {
                                                                              item.country
                                                                        }
                                                                  </Td>
                                                                  <Td>
                                                                        {
                                                                              item.city
                                                                        }
                                                                  </Td>
                                                                  <Td isNumeric>
                                                                        {
                                                                              item.population
                                                                        }
                                                                  </Td>
                                                                  <Td>
                                                                        <Button
                                                                              onClick={() =>
                                                                                    handleEdit(
                                                                                          item.id
                                                                                    )
                                                                              }
                                                                        >
                                                                              Edit
                                                                        </Button>
                                                                  </Td>
                                                                  <Td>
                                                                        <Button
                                                                              colorScheme="red"
                                                                              onClick={() =>
                                                                                    handleDelete(
                                                                                          item.id
                                                                                    )
                                                                              }
                                                                        >
                                                                              Delete
                                                                        </Button>
                                                                  </Td>
                                                            </Tr>
                                                      );
                                                })}
                                    {sortBy == "desc" &&
                                          countries
                                                ?.sort(
                                                      (a, b) =>
                                                            b.population -
                                                            a.population
                                                )
                                                .map((item, index) => {
                                                      return (
                                                            <Tr key={item.id}>
                                                                  <Td>
                                                                        {
                                                                              item.country
                                                                        }
                                                                  </Td>
                                                                  <Td>
                                                                        {
                                                                              item.city
                                                                        }
                                                                  </Td>
                                                                  <Td isNumeric>
                                                                        {
                                                                              item.population
                                                                        }
                                                                  </Td>
                                                                  <Td>
                                                                        <Button
                                                                              onClick={() =>
                                                                                    handleEdit(
                                                                                          item.id
                                                                                    )
                                                                              }
                                                                        >
                                                                              Edit
                                                                        </Button>
                                                                  </Td>
                                                                  <Td>
                                                                        <Button
                                                                              colorScheme="red"
                                                                              onClick={() =>
                                                                                    handleDelete(
                                                                                          item.id
                                                                                    )
                                                                              }
                                                                        >
                                                                              Delete
                                                                        </Button>
                                                                  </Td>
                                                            </Tr>
                                                      );
                                                })}
                                    {sortBy == "" &&
                                          countries.map((item, index) => {
                                                return (
                                                      <Tr key={item.id}>
                                                            <Td>
                                                                  {item.country}
                                                            </Td>
                                                            <Td>{item.city}</Td>
                                                            <Td isNumeric>
                                                                  {
                                                                        item.population
                                                                  }
                                                            </Td>
                                                            <Td>
                                                                  <Button
                                                                        onClick={() =>
                                                                              handleEdit(
                                                                                    item.id
                                                                              )
                                                                        }
                                                                  >
                                                                        Edit
                                                                  </Button>
                                                            </Td>
                                                            <Td>
                                                                  <Button
                                                                        colorScheme="red"
                                                                        onClick={() =>
                                                                              handleDelete(
                                                                                    item.id
                                                                              )
                                                                        }
                                                                  >
                                                                        Delete
                                                                  </Button>
                                                            </Td>
                                                      </Tr>
                                                );
                                          })}
                              </Tbody>
                        </Table>
                  </TableContainer>
            </Box>
      );
};

export default React.memo(Homepage);
