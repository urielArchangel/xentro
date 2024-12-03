'use server'

import { IApp, IUser } from '@/declarations';
import App from './DB/schemas/App';
import { mongoDBConnect } from './DB/connection';
import User from './DB/schemas/User';



export const fetchAppData = async()=>{
   try{
    const res = await fetch("/api/admin/fetchApp",{next:{revalidate:0}})
    const [app,error] = await res.json()
    if(error){
        throw new Error("An error occured")
    }
    return app
   }catch(err:any){}
}

export const fetchUsers = async()=>{
    await mongoDBConnect()
    const users = await User.find({}) as IUser[]
    return users
}




