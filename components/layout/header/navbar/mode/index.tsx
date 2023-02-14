import { parseCookies, setCookie } from 'nookies';
import React, { useState } from 'react'
import { MdOutlineLightMode, MdOutlineModeNight } from "react-icons/md";

interface ThemModeProps extends React.PropsWithChildren{}

export const ThemMode:React.FunctionComponent<ThemModeProps> =(props):JSX.Element=>{
    const [toggle,setToggle] = useState(true)//true:light mode
    const cookies = parseCookies()
    const darkModeHandler = ()=>{
      if(cookies.theme === "dark" ||  (!("theme" in cookies) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)){
          document.documentElement.className = "dark";
          setToggle(false);
        }else{
          document.documentElement.className = "";
        }
    }

    const toggleHandler = ()=>{
      setToggle(!toggle);
      toggle ? (setCookie(null, 'theme', "dark", {})): (setCookie(null, 'theme', "light", {}))
      darkModeHandler();
    }
    return(<>
      <div onClick={toggleHandler} >
        {!toggle ? (
          <MdOutlineLightMode/>
          ):(
            <MdOutlineModeNight/>
            )
        }
      </div>
    </>)
}