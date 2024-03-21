import React, { useState } from 'react'
import { useNavigate } from "react-router-dom"

const Home = ({ socket }) => {
  const navigate = useNavigate()
  const [userName, setUserName] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    localStorage.setItem("userName", userName)
    socket.emit("newUser", { userName, socketID: socket.id })
    navigate("/chat")
  }
  return (

    <div className='flex flex-col h-screen w-screen bg-slate-900 text-white justify-around py-32'>
      <h1 className='text-center text-4xl font-bold'>Welcome to Manpreet World</h1>
      <form className='flex flex-col gap-6 justify-center' onSubmit={handleSubmit}>
        <h2 className='text-center text-xl'>Sign in to join Manpreet World</h2>
        <div className='flex gap-6 justify-center'>
          <label htmlFor="username">Username:</label>
          <input type="text"
            name="username"
            id='username'
            className='rounded-full border-2 bg-slate-900 px-4'
            value={userName}
            onChange={e => setUserName(e.target.value)}
          />
        </div>
          <div className='flex justify-center'>
          <button className='border px-4 py-1 rounded-full bg-red-600 '>SIGN IN</button>
          </div>
      </form>
    </div>
  )
}

export default Home