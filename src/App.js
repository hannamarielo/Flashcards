import React from "react"
import { useState } from 'react'
import Boxes from "./components/Boxes"
import Box from "./components/Box"

export default function App() {
  const [squares, setSquares] = useState(Boxes)

  const paddings = {
    paddingTop: "200px",
    paddingLeft: "50px"
  }

  function toggle(id) {
    setSquares(prevSquares => {
      return prevSquares.map((square) => {
        return square.id === id ? {...square, on: !square.on } : square
      })
    })
  }

  const squareElements = squares.map(square => (
    <Box
      key={square.id}
      id={square.id}
      on={square.on}
      display={square.on == true ? square.question : square.answer}
      toggle={toggle}
    />
  ))

  return (
    <main style={paddings}>
      {squareElements}
    </main>
  )
}
