import React from 'react'
import {BsSuitHeartFill} from 'react-icons/bs'
interface FooterProps extends React.PropsWithChildren{}

export const Footer:React.FunctionComponent<FooterProps> =(props):JSX.Element=>{
    return(<>
        <div className='w-full h-[0.3rem] text-sm flex justify-center items-center pt-3'>
            <h6 className=' text-light-heading dark:text-dark-content'>Designed with <span className='text-dark-btnsecondary dark:text-dark-error inline-block'><BsSuitHeartFill /></span>  by Monireh Bastami</h6>
        </div>
    </>)
}