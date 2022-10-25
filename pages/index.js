import { useState } from 'react'

const Home = () => {
  
  const [userInput, setUserInput] = useState('')
  const handleChange = (e) => {
    e.preventDefault()

    setUserInput(e.target.value)
    console.log(userInput)
  }
  return (
    <div>
      <h1>Todo</h1>
      <form>
        <input type="text" onChange={handleChange}/>
        <button>Add</button>
      </form>
    </div>
  )
}

export default Home;
