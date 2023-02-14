import React from 'react';
import { IoChatbubblesOutline } from 'react-icons/io5'
interface  MainPreviewProps extends React.PropsWithChildren {
    
}

export const MainPreview: React.FunctionComponent<MainPreviewProps> = () => {
    return ( <>
        <div className='w-full h-full flex flex-col justify-center items-center text-dark-content'>
           <IoChatbubblesOutline size={70} /> 
            <h1 className='first-letter:text-4xl text-2xl '>Welcome to Momogram </h1>
        </div>
    </> );
}
