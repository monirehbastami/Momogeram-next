import { AppContext } from '@/context/store'
import React, { useContext } from 'react'
import { ChatItems } from './chatitems'

interface ChatListProps extends React.PropsWithChildren{
 
}

export const ChatList:React.FunctionComponent<ChatListProps> =():JSX.Element=>{
    const {state,dispatch} = useContext(AppContext)
    
   return (
    <>
    {state.contacts.searchList.length === 0 ? (
        state.contacts.contactsList.length === 0 ? (
          <div>There is not any contacts...</div>
        ) : (
          state.contacts.contactsList.map((item) => (
            <ChatItems
              avatar={item.avatar}
              lastmessage={item.lastMessage}
              time={item.time}
              name={item.name}
              key={item.id}
              roomId={item.roomId}
              isActive={item.isActive}
            />
          ))
        )
      ) : (
        state.contacts.searchList.map((item) => (
          <ChatItems
            avatar={item.avatar}
            lastmessage={item.lastMessage}
            time={item.time}
            name={item.name}
            key={item.id}
            roomId={item.roomId}
            isActive={item.isActive}
          />
        ))
      )}
    </>
   )
}
