'use server'

import { IApp, IUser } from '@/declarations';
import App from './DB/schemas/App';
import { mongoDBConnect } from './DB/connection';
import User from './DB/schemas/User';



export const fetchAppData = async()=>{
    await mongoDBConnect()
    let app = await App.findOne({}) as IApp
    if(!app){
        await App.create({})

        app = await App.findOne({}) as IApp

    }
    return app
}

export const fetchUsers = async()=>{
    await mongoDBConnect()
    const users = await User.find({}) as IUser[]
    return users
}




