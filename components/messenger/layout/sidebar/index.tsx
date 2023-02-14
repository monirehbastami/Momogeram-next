import { Contacts } from '@/@types/api.types'
import { AppContext } from '@/context/store'
import React, { useContext } from 'react'
import { ChatList } from './chatlist'
import { ChatItems } from './chatlist/chatitems'
import { SearchList } from './searchlist'
interface SidebarProps extends React.PropsWithChildren{
    contacts_list:Contacts[]
}

export const Sidebar:React.FunctionComponent<SidebarProps> =({contacts_list}):JSX.Element=>{
    const {state:{contacts}} = useContext(AppContext)
    console.log(contacts_list)
    return(<>
            <div className='h-10'>
                <SearchList />
            </div>
            <div className='h-[calc(100vh-150px)] pt-2 overflow-y-scroll flex flex-col gap-2'>
            {contacts.searchList.length === 0 ? (
                contacts_list?.length === 0 ? (
                <div>There is not any contacts...</div>
                ) : (
                    contacts_list?.map((item)=>(
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
                contacts.searchList.map((item) => (
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
            </div>
        
    </>)
}