import React,{useContext, useRef, useState} from 'react'
import {GoThreeBars} from 'react-icons/go'
import { Image } from '@/components/base/image'
import {ThemMode} from './mode'
import {IoIosCloseCircleOutline} from 'react-icons/io'
import { AppContext } from '@/context/store'
import { ContextActionTypes } from '@/@types/context/context.types'
import { useRouter } from 'next/router'
interface NavbarProps extends React.PropsWithChildren{}

export const Navbar:React.FunctionComponent<NavbarProps> =(props):JSX.Element=>{
    const [isClickedBar,setIsClickedBar] = useState(false);
    const [isClickedClose,setisClickedClose] = useState(false);
    const {state:{user},dispatch} = useContext(AppContext);
    //const navigation = useNavigate();
    const router = useRouter();
    const ref=useRef<any>();
   // console.log(isClickedBar)
    const clickHandler = (e:any,btnname?:string) => {
        if(btnname === 'bar'){
            setIsClickedBar(!isClickedBar);
        }else{
            setisClickedClose(!isClickedClose);
        }
    };
    const logoutHandler = ()=>{
        dispatch({
            type:ContextActionTypes.Log_out,
        });
        router.push("login")
      //  navigation("login");
    }
    const location = router.asPath;
    return(<>
    <div ref={ref} className={`${location === '/login' ? 'hidden' : ''}`}>
        <GoThreeBars size={26} onClick={(e) => clickHandler(e,'bar')}/>
        <div className={`${
                 ((isClickedBar && !isClickedClose) || ((!isClickedBar && isClickedClose))) ? "absolute top-0 left-0 w-72 h-full backdrop-blur-sm p-2 flex flex-col bg-dark-btnprimary bg-opacity-60 text-dark-heading text-xl z-10 xl:text-2xl" : "hidden w-0"
                } `}>
            <div className='px-2 py-5 flex flex-col justify-between items-start'>
                <IoIosCloseCircleOutline className='self-end' onClick={(e)=>clickHandler(e,'close')} />
                <h1 className='text-2xl uppercase xl:text-3xl'>Momogram</h1>
            </div>
            <div className='flex flex-row justify-between items-center'>
                <div className='flex flex-row items-center gap-2'>
                    <Image src="https://media.licdn.com/dms/image/C4D03AQFm6Yta6XFT-g/profile-displayphoto-shrink_100_100/0/1609046449385?e=1681948800&v=beta&t=TcEnE8Ajmkm2-VLzp2_o3wVmMhRksGF9w0-3R2TH1LU" alt={"user picture"}  />
                    <h1 className='inline-block'>Monireh Bastami</h1>
                </div>
                <ThemMode />
            </div>
            <div className='pt-10 pl-5 cursor-pointer hover:underline' onClick={logoutHandler}><h2>Logout</h2></div>
        </div>
        </div>
    </>)
}