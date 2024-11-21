import { IApp, IUser } from '@/declarations';
import crypto from 'crypto'
import App from './DB/schemas/App';
import { mongoDBConnect } from './DB/connection';
import User from './DB/schemas/User';

export const generateUniqueID = (address:string)=>{
    const salt = process.env.salt!
    const rand = crypto.randomBytes(16).toString('hex')
const hash = crypto.createHash('md5').update(rand+salt+address+salt+rand).digest("hex")
return hash.slice(0,9);
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




