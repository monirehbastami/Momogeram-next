import { stat } from 'fs';
import React, { KeyboardEvent , useContext, useState } from 'react';
import { TbSend } from 'react-icons/tb';
import { ContextActionTypes, MessageItems } from '../../../../../@types/context/context.types';
import { AppContext } from '../../../../../context/store';
import { Input } from '../../../../base/form/input';

interface SendMessageProps extends React.PropsWithChildren{
    
}

export const SendMessage: React.FunctionComponent<SendMessageProps> = () => {
    const [inputStr,setInputStr] = useState<string>('')
    const {state,dispatch} = useContext(AppContext);
    const changeHandle = (e:any) => {
        setInputStr(e.target.value);
    }
    const sendMessageHandler = () => {
        const newMessage:MessageItems = {
            "isSentByOwner": false,
            "id": Math.floor(Math.random() * 10000000000),
            "value":inputStr
        }
        dispatch({
            type:ContextActionTypes.Send_New_Message,
            payload:newMessage
        })
        setInputStr("");
    }
    return ( <>
    <div className='h-10 pt-2 relative' >
        <Input variant='Primary' placeholder='type a text ...' onChange={(e)=>changeHandle(e)} value={inputStr}/>
        <div className='absolute top-2 right-10 bg-dark-btnsecondary p-2 rounded-md text-light-primary' onClick={()=>sendMessageHandler()}>
            <TbSend />
        </div>
    </div>
    </> );
}
