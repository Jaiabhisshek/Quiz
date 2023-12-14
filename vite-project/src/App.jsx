import React, { useState } from 'react'
import Quiz from './Components/Quiz'
import Result from './Components/Result'
import data from "./questions"

const App = () => {

  const [count,setCount] = useState(0)
  const [score,setScore] = useState(0)

  const handleClick = (e) => { 
    setCount(prevCount => prevCount + 1)
    console.log(e.target.attributes.iscorrect.value)
    if (e.target.attributes.iscorrect.value === "true"){
        setScore(prevScore => prevScore + 1)
    }
  }

  const restHandle = () => {
    setCount(0)
    setScore(0)
  }

  return (
    <div>
      {console.log(data[count])}
      {/* <Quiz />
      <Result /> */}

      {(count!=5)?(<Quiz data={data[count]} count={count} handleClick={handleClick}/>):(<Result score={score} onSmash={restHandle}/>)}
    </div>
  )
}

export default App