import { Box, Button, Input, Text } from "@chakra-ui/react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AddIcon, MinusIcon } from "@chakra-ui/icons";
import "./App.css";
import { counter_decrement, counter_increment } from "./Store/action.types";
import { add, addValue, substract , subValue, multiplyValue, divide} from "./Store/action";
function App() {
  const dispatch = useDispatch();

  const state = useSelector((state) => state.count);

  const [data, setData] = useState("")

  return (
    <Box bg="rose" h="100vh">
      <Box w="fit-content" m="auto" pt="20px">
        <Text fontSize="2xl" color="black">
          Counter : {state}
        </Text>
        <Box display="flex" justifyContent="space-between">
          <Button onClick={() => dispatch(add())} h="40px" w="40px">
            <AddIcon />
          </Button>
          <Button onClick={() => dispatch(substract())}>
            <MinusIcon />
          </Button>
        </Box>
      </Box>
      {/* user input */}
      <Box border="0px solid black" w="fit-content" m="auto">
        <Input type="number" placeholder="Enter any number" value={data} onChange={(e) => setData(e.target.value)}/>
      </Box>
      <Box w="fit-content" m="auto">
        <Button onClick={() => dispatch(addValue(data))}>Add</Button>
        <Button onClick={() => dispatch(subValue(data))}>substract</Button>
        <Button onClick={() => dispatch(multiplyValue(data))}>Multiply</Button>
        <Button onClick={() => dispatch(divide(data))}>Divide</Button>
      </Box>
    </Box>
  );
}

export default App;
