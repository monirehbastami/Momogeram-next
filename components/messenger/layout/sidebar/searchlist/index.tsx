import React, { useContext } from 'react'
import { ContextActionTypes } from '@/@types/context/context.types'
import { AppContext } from '@/context/store'
import { Input } from '@/components/base/form/input'
interface SearchListProps extends React.PropsWithChildren{}

export const SearchList:React.FunctionComponent<SearchListProps> =(props):JSX.Element=>{
    const dispatch = useContext(AppContext).dispatch
    const changeHandler =(e:any)=>{
       // console.log(e.target.value)
        dispatch({
            type:ContextActionTypes.Get_Search_Contacts,
            payload:e.target.value
        })
    }
    return(<>
        <Input variant='Search' placeholder='search...' onChange={changeHandler}/>
    </>)
}