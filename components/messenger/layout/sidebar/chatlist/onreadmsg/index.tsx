import React from 'react'
interface OnReadMsgProps extends React.PropsWithChildren{}

export const OnReadMsg:React.FunctionComponent<OnReadMsgProps> =(props):JSX.Element=>{
    return(<>

        <div className='bg-dark-btnprimary rounded-full h-[1.2rem] flex items-center justify-center px-[3px] text-[0.5rem] text-dark-heading'>
            <span>235</span>
        </div>
    </>)
}