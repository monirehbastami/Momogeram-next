import React, { InputHTMLAttributes } from 'react'
import {RiSearch2Line} from 'react-icons/ri'
import {TbSend} from 'react-icons/tb'
interface InputProps extends InputHTMLAttributes<HTMLElement>,React.PropsWithChildren{
   variant?:"Primary" | "Search"
}

export const Input:React.FunctionComponent<InputProps> = React.forwardRef<
HTMLInputElement,
InputProps
>((props, ref) =>{
    switch (props.variant){
        case "Primary":
            return (
                <input ref={ref} className='w-11/12 p-1 rounded-md placeholder:p-1 dark:placeholder:text-light-content outline-none border-none bg-dark-content dark:bg-dark-secondary' {...props} />        
 
            );
        case "Search":
            return (<>
            <div className='relative'>
                <input ref={ref} className='w-full p-1 rounded-md placeholder:p-1 dark:placeholder:text-light-content outline-none border-none bg-dark-content dark:bg-dark-secondary' {...props} />
                <div className='absolute top-0 right-0 bg-dark-btnsecondary p-2 rounded-md text-light-primary'>
                    <RiSearch2Line />
                </div>
            </div>
            </>
            );
        default:
            return (<input ref={ref} {...props}/>);
    }
});