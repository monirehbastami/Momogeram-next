import { Contacts } from '@/@types/api.types';
import { ContextActionTypes } from '@/@types/context/context.types';
import { Layout } from '@/components/layout';
import { MessengerLayout } from '@/components/messenger/layout';
import { AXIOS } from '@/config/axios.config';
import { ApiRoutes } from '@/constant/api.route';
import { AppContext } from '@/context/store';
import { AxiosResponse } from 'axios';
import React, { useContext, useEffect } from 'react';
import nookies from 'nookies'

interface HomepageProps extends React.PropsWithChildren{
    contacts:Contacts[]
}

const Homepage: React.FunctionComponent<HomepageProps> = ({contacts}):JSX.Element => {
    //console.log({contacts})
    const  dispatch  = useContext(AppContext).dispatch
    useEffect(()=>{
        dispatch({
            type:ContextActionTypes.Get_All_Contact,
            payload:contacts
        })
    },[])
    return ( 
        <Layout><MessengerLayout contacts={contacts}/></Layout>
     );
}
export default Homepage

export async function getServerSideProps(ctx:any){
    let contacts;
    try{
        const cookies = nookies.get(ctx);
        //console.log(cookies)
        if(!cookies.token){
            return{
                redirect: {
                    permanent: false,
                    destination: "/login"
                }
            }
        }
        contacts = await AXIOS.get<any, AxiosResponse<Contacts[]>>(
            ApiRoutes.GetContacts
          );
          if (contacts.status === 200) {
            return{
                props:{
                    contacts:contacts.data || null
                },
            };
          }
    }catch(err){
        console.log(err)
    }
}