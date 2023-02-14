import React from 'react'
import { Footer } from './footer'
import { Header } from './header'
interface LayoutProps extends React.PropsWithChildren{}

export const Layout:React.FunctionComponent<LayoutProps> =({children}):JSX.Element=>{
    return(
        <>
        <div className="text-light-heading dark:bg-dark-primary dark:text-dark-heading w-full h-[calc(100vh)]">
            <Header />
            <div>{children}</div>
            <Footer />
         </div>
        </>
    )
}