import React from 'react'
import {useNavigate} from "react-router-dom"

const ChatBody = ({messages, typingStatus, lastMessageRef}) => { 
  const navigate = useNavigate()
  

  const handleLeaveChat = () => {
    localStorage.removeItem("userName")
    navigate("/")
    window.location.reload()
  }
  
  return (
    <>
      <header className=' flex justify-between px-10 py-4 bg-blue-800 text-white border-b-2 border-black items-center'>
          <p>Hangout with Colleagues</p>
          <button className=' bg-red-700 px-4 py-2 rounded-full' onClick={handleLeaveChat}>LEAVE CHAT</button>
        </header>


        <div className='w-[100%] h-[80vh] bg-white p-5 overflow-y-scroll '>
          {messages.map(message => (
            message.name === localStorage.getItem("userName") ? (
              <div className=" text-sm" key={message.id}>
            <p className='text-right'>You</p>
            <div className='bg-[#c2f1f3] max-w-[300px] p-2 rounded-xl ml-auto text-sm'>
                <p>{message.text}</p>
            </div>
          </div>
            ): (
              <div className=" text-sm" key={message.id}>
            <p>{message.name}</p>
            <div className='bg-[#f5ccc2] w-80 p-2 rounded-xl text-lg'>
                <p>{message.text}</p>
            </div>
          </div>
            )
            ))}

          <div className='fixed bottom-14 text-lg italic '>
            <p>{typingStatus}</p>
          </div>
          <div ref={lastMessageRef} />   
        </div>
    </>
  )
}

export default ChatBody