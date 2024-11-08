import { IApp, IUser } from '@/declarations';
import crypto from 'crypto'
import App from './DB/schemas/App';
import { mongoDBConnect } from './DB/connection';
import User from './DB/schemas/User';

export const generateUniqueID = (address:string)=>{
    const salt = process.env.salt!
const hash = crypto.createHash('md5').update(salt+address+salt).digest("hex")
return hash.slice(0,8).toUpperCase();
}


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




