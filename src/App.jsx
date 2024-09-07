import { useState } from 'react'
import InterviewQuestion from "./module/index"
console.log("InterviewQuestion : ", InterviewQuestion);
import './App.css'

function App() {
  const [count, setCount] = useState(0)
   console.log("i am app.jsx");
  return (
    <>
      <InterviewQuestion />
    </>
  )
}

export default App
