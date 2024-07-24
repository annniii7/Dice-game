// import styled from 'styled-components'
import StartGame from "./components/StartGame"
import { useState } from "react"
import Gameplay from "./components/Gameplay"
import "./App.css"
function App() {
  const [isGamestarted, setisGamestarted] = useState(true)
  const togglegame = () => {
    setisGamestarted((prev) => !prev)
  }
  return (
    <>
      {isGamestarted?<Gameplay/>:<StartGame toggle={togglegame} />}
      
    </>
  )
}

export default App
