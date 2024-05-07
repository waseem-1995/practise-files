import { useState } from 'react'
import logo from './logo.svg'
import { Card } from './components/card'
import {AiOutlineAmazon,AiFillApple,AiOutlineArrowRight} from "react-icons/ai"
function App() {
  const [count, setCount] = useState(0)
    
  return (
    <div className="App">
      <Card
      date = {"28/10/20"}
      cases = {"Case Study"}
      logo = {<AiOutlineAmazon></AiOutlineAmazon>}
      heading = {"Amazon Gift Pay"}
      device = {"Desktop - Mobile"}
      color = {true}
      arrow = {<AiOutlineArrowRight></AiOutlineArrowRight>}
      >
      </Card>
      <Card
      date = {"17/9/20"}
      cases = {"Case Study"}
      logo = {<AiFillApple></AiFillApple>}
      heading = {"Apple Gift Payment"}
      device = {"MacOS - Mobile"}
      color = {false}
      arrow = {<AiOutlineArrowRight></AiOutlineArrowRight>}
      >
      </Card>
    </div>
  )
}

export default App
