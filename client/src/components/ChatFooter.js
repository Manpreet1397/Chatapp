import React, {useState} from 'react'

const ChatFooter = ({socket}) => {
    const [message, setMessage] = useState("")
    const handleTyping = () => socket.emit("typing",`${localStorage.getItem("userName")} is typing`)

    const handleSendMessage = (e) => {
        e.preventDefault()
        if(message.trim() && localStorage.getItem("userName")) {
        socket.emit("message", 
            {
            text: message, 
            name: localStorage.getItem("userName"), 
            id: `${socket.id}${Math.random()}`,
            socketID: socket.id
            }
        )
        }
        setMessage("")
    }
  return (
    <div className='py-4 px-6 bg-blue-800'>
        <form className='flex justify-between gap-4' onSubmit={handleSendMessage}>
          <input 
            type="text" 
            placeholder='Write message' 
            className='rounded-full w-full p-4' 
            value={message} 
            onChange={e => setMessage(e.target.value)}
            onKeyDown={handleTyping}
            />
            <button className=" bg-green-600 px-4 py-2 rounded-full">SEND</button>
        </form>
     </div>
  )
}

export default ChatFooter