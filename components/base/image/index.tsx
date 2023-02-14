import React from 'react'
interface ImageProps extends React.PropsWithChildren{
    src?:string,
    alt?:string
}

export const Image:React.FunctionComponent<ImageProps> =({src,alt}):JSX.Element=>{
    return(<>
        <img src={src} alt={alt} className="w-10 h-10 rounded-full"/>
    </>)
}