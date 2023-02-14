import React, { useContext, useEffect, useRef, useState } from 'react'
import {Image} from '../../../../base/image'
import { IoIosCloseCircleOutline } from 'react-icons/io'
import { TiTickOutline } from 'react-icons/ti'
import { TbEdit } from 'react-icons/tb'
import { AppContext } from '../../../../../context/store'
import { ContextActionTypes } from '../../../../../@types/context/context.types'


interface MessageItemProps extends React.PropsWithChildren{
    type:string,
    avatar:string,
    text :string,
    id:number,
    roomId:string
}

export const MessageItem:React.FunctionComponent<MessageItemProps> =({type,avatar,text,id,roomId}):JSX.Element=>{
    const {state,dispatch} = useContext(AppContext);
    const [editMode,setEditMode] = useState<boolean>(false);
    const [editedText,setEditedText] = useState(text);
    const defUser = "https://media.licdn.com/dms/image/C4D03AQFm6Yta6XFT-g/profile-displayphoto-shrink_100_100/0/1609046449385?e=1681948800&v=beta&t=TcEnE8Ajmkm2-VLzp2_o3wVmMhRksGF9w0-3R2TH1LU"

    const removeHandler=async (id:number)=>{
        dispatch({
            type:ContextActionTypes.Delete_Message,
            payload:id
        });
        
    }
    const editHandler = () =>{
        setEditMode(true)
    }
    const changeChatHandler = (e:any)=>{
        setEditedText(e.target.value)    
    }
    
    const editChatHandler = (id:number)=>{
        //alert(editedText)
        setEditMode(false)
       // console.log(editMode)
        dispatch({
            type:ContextActionTypes.Edit_Current_Message,
            payload:{
                msgid: id,
                msgval: editedText
            }
        })       
        //console.log(editMode)
    }
   
    return(<>
        <li className={`${type === 'sender' ? 'flex-row' : 'flex-row-reverse self-end'} flex gap-2 p-3 text-justify lg:w-1/2`} >
            <Image src={`${type === 'sender' ? avatar : defUser}`} alt='contact_image'/>
            <p className={`${type === 'sender' ? 'bg-light-secondary dark:bg-dark-btnprimary rounded-bl-2xl rounded-tr-2xl' : 'bg-dark-content dark:bg-dark-btnsecondary dark:text-dark-content rounded-tl-2xl rounded-br-2xl'} p-2 flex justify-between`}>
              {editMode ? (<input value={editedText} className="w-full outline-none" onChange={(e)=>changeChatHandler(e)} /> ) : (<span>{text} </span>)}
              {type !== 'sender' && <span className='inline-block self-end text-dark-hover dark:text-dark-content' >{editMode ? (<TiTickOutline className='text-light-success dark:text-dark-success cursor-pointer' onClick={()=>editChatHandler(id)}/>):(<TbEdit className='cursor-pointer text-light-error dark:text-dark-hover' onClick={()=>editHandler()}/>) }</span> }
              
              <span className='inline-block self-end text-dark-btnsecondary dark:text-dark-content' onClick={()=> removeHandler(id)}><IoIosCloseCircleOutline className='cursor-pointer'/> </span>
            </p>
            
        </li>
    </>)
}