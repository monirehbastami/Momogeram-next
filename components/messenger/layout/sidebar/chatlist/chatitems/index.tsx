import React, { useContext, useState } from 'react'
import {Image} from '@/components/base/image'
import { OnReadMsg } from '../onreadmsg'
import { ApiRoutes } from '@/constant/api.route';
import { AXIOS } from '@/config/axios.config';
import { ContextActionTypes } from '@/@types/context/context.types';
import { AppContext } from '@/context/store';

interface ChatItemsProps extends React.PropsWithChildren{
    name: string;
    time: string;
    lastmessage: string;
    avatar: string;
    roomId: string;
    isActive:boolean;
}

export const ChatItems:React.FunctionComponent<ChatItemsProps> =({
    name,
    time,
    lastmessage,
    avatar,
    roomId,
    isActive,
  }):JSX.Element=>{

        const {state:{messages}, dispatch} = useContext(AppContext);
        const clickHandler = (roomId: string) => {
            AXIOS.get(`${ApiRoutes.GetMessages}${roomId}`)
              .then((res) => {
                //console.log(`${ApiRoutes.GetMessages}${roomId}`)
                if (res?.data?.length > 0) {
                  dispatch({
                    type: ContextActionTypes.Get_Current_Message,
                    payload: res?.data[0],
                  });
                }
              })
              .catch((err) => {
                // notification raise
              });
          };
    
    return(<>
    <div className={`${messages.roomId === roomId && 'bg-dark-content dark:bg-dark-secondary'} flex items-center gap-1 w-full flex-[0_0_] cursor-pointer ease-in duration-200 hover:bg-dark-content dark:hover:bg-dark-secondary`} onClick={()=> clickHandler(roomId)}>
        <div className='relative w-1/6 md:w-2/6'>
            <Image src={avatar} alt='sd'/>
            <div className='absolute top-5 left-6'>
            <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill={`${isActive ? '#d946ef':'#7b00ff'}`}  aria-hidden="true"  viewBox="0 0 24 24"><circle cx="12" cy="13" r="5"/></svg>
            </div>
        </div>
        <div className='w-2/4'>
            <h3 className='text-sm xl:text-xl capitalize text-light-heading dark:text-dark-heading truncate'>{name}</h3>
            <h4 className='text-xs xl:text-lg text-light-content dark:text-dark-content truncate'>{lastmessage}</h4>
        </div>
        <div className='w-[20vw] text-xs xl:text-lg flex flex-col pr-3'>
            <div className='self-end'>{time}</div>
            <div className='self-end'><OnReadMsg /></div>
        </div>
    </div>    
    </>)
}
