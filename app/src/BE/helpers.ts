'use server'

import { IApp, IUser } from '@/declarations';
import App from './DB/schemas/App';
import { mongoDBConnect } from './DB/connection';
import User from './DB/schemas/User';



export const fetchAppData = async()=>{
 
    const res = await fetch(process.env.baseurl+"/api/admin/fetchApp",{next:{revalidate:0}})
    const [app,_] = await res.json() as [IApp,any]
 
    return app
  
}

export const fetchUsers = async()=>{
    await mongoDBConnect()
    const users = await User.find({}) as IUser[]
    return users
}




