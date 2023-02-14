import React, { useContext, useEffect, useRef, useState } from 'react'
import { RiCommandFill } from 'react-icons/ri';
import { AppContext } from '../../../../context/store';
import MainHeader from './mainHeader';
import { MainPreview } from './mainPreview';
import { MessageItem } from './messageitem'
import { SendMessage } from './sendmessage';
interface MainProps extends React.PropsWithChildren{}

export const Main:React.FunctionComponent<MainProps> =(props):JSX.Element=>{
    const {state:{messages,contacts}} = useContext(AppContext);
    const [avatar,setAvatar] = useState('');
    const roomId = messages.roomId;
    useEffect(() => {
        if(roomId){
            const current_contact_avatar = contacts.contactsList.filter((n)=>(n.roomId === roomId))[0].avatar;
            setAvatar(current_contact_avatar)
        }
      }, [roomId]);

    const ref = useRef<any>();
    const prevMessageCount = useRef<any>(messages.MessageList.length);

    const handleScrollDown = () => ref.current.scrollIntoView({behavior : "smooth"})

    useEffect(()=>{
        const existingMessageCount = messages.MessageList.length;
        if (existingMessageCount > prevMessageCount?.current) {
            handleScrollDown();
        }
        prevMessageCount.current = existingMessageCount;
    },[roomId])

    useEffect(()=>{
        handleScrollDown() 
    },[messages.MessageList.length])


    return(<>
    {roomId ? (<MainHeader roomId={roomId} />) : ('')}
        <ul className='flex flex-col overflow-y-scroll gap-3 w-full md:h-[calc(100vh-105px)]' style={{
        background: "url('https://wallpapercave.com/wp/wp4410743.png')",
      }}>
        {roomId ? (
            messages.MessageList.map((item)=>(
                <MessageItem key={item.id}
                type={item.isSentByOwner ? "sender" : "receiver"} avatar={avatar} text={item.value} id={item.id} roomId={roomId}
                />
            ))
            
        ) : (
            <MainPreview />
        )}
        <li ref={ref} />
        </ul>
        {roomId ? (<SendMessage />) : ('')}
    </>)
}