import React, {useState, useEffect} from 'react'

const ChatBar = ({socket}) => {
    const [users, setUsers] = useState([])

    useEffect(()=> {
        socket.on("newUserResponse", data => setUsers(data))
    }, [socket, users])

  return (
    <div className='w-1/4 bg-slate-900 text-white flex flex-col gap-6 pl-6 pt-6'>
        <h2>Open Chat</h2>
        <div>
            <h4  className='chat__header mb-4'>ACTIVE USERS</h4>
            <div className="flex flex-col gap-2 text-green-400 bg-blue-700 px-4 py-2">
                {users.map(user => <p key={user.socketID}>{user.userName}</p>)}
            </div>
        </div>
  </div>
  )
}

export default ChatBar