import { IUser } from '@/declarations';
import crypto from 'crypto'
import { signUserDataJWT } from './userdata/jwt';
import { cookies } from 'next/headers';
import { userDataCookieName } from '../data/constants';

export const generateUniqueID = (address:string)=>{
    const salt = process.env.salt!
const hash = crypto.createHash('md5').update(salt+address+salt).digest("hex")
return hash.slice(0,8).toUpperCase();
}
export async function updateUserCookie(data:IUser) {
    const {save,last_login,blocked,ip,status, ...jwtUserData} = data;
    signUserDataJWT(jwtUserData);
  
}