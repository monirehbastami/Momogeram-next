import React from 'react'
import { Navbar } from './navbar';
interface HeaderProps extends React.PropsWithChildren{}

export const Header:React.FunctionComponent<HeaderProps> =(props):JSX.Element=>{
    const isactive = true;
    return(<>
 
            <div className={`${isactive ? 'hidden' : 'h-20 p-5'}`}>
                <h1 className='text-2xl xl:text-3xl'>Momogeram</h1>
            </div>

            <div className={`${isactive ? 'flex flex-row gap-2 justify-start items-center w-full h-20 p-5' : 'hidden'}`}>
                <Navbar/>
                <h1 className='text-2xl  xl:text-3xl'>Momogeram</h1>
            </div>


    </>)
}