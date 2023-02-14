import React, { useContext, useEffect, useState } from 'react';
import { ContactState, ContextActionTypes } from '@/@types/context/context.types';
import { AppContext } from '@/context/store';
import { Image } from '@/components/base/image';
import { IoChevronBackCircleOutline } from 'react-icons/io5'
interface MainHeaderProps extends React.PropsWithChildren{
    roomId:string
}

const MainHeader: React.FunctionComponent<MainHeaderProps> = ({roomId}) => {
    //console.log({roomId})
    const {state:{messages,contacts},dispatch} = useContext(AppContext)
    const [currentContact,setCurrentContact] = useState<ContactState>()
    useEffect(()=>{
        getCurrentContact()
    },[roomId])
    const backHandler =()=>{
        dispatch({
            type:ContextActionTypes.Clear_Room_Id,
            payload:0
        })
    }
    const getCurrentContact =()=>{
        const current_contact = contacts.contactsList.filter((n) =>
                n.roomId === messages.roomId
            )[0];
        setCurrentContact(current_contact);
        //console.log(current_contact)
    }
    return ( <>
        <div className='flex px-3 py-1 items-center gap-1 justify-between'>
            <div className='flex gap-2'>
                <div className='relative'>
                    <Image src={currentContact?.avatar} alt='sd'/>
                    <div className='absolute top-5 left-6'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill={`${currentContact?.isActive ? '#d946ef':'#7b00ff'}`}  aria-hidden="true"  viewBox="0 0 24 24"><circle cx="12" cy="13" r="5"/></svg>
                    </div>
                </div>
                <div className='self-center'><h1 className='capitalize '>{currentContact?.name}</h1></div>
            </div>
            <div className='cursor-pointer self-center text-light-btnprimary dark:text-dark-error' onClick={backHandler}><IoChevronBackCircleOutline size={30}/></div>
        </div>
    </> );
}

export default MainHeader;