import JWT from 'jsonwebtoken'
import { cookies } from 'next/headers'
import { userDataCookieName } from '../../data/constants';
import { IUser } from '@/declarations';

export type UserType = Omit<IUser,'last_login'|'blocked'|'ip'|'status'|'save'>

export const signUserDataJWT =async (u:UserType)=>{
const token = JWT.sign(u,process.env.jwt_secret!);
 ( await cookies()).set(userDataCookieName,token,{secure:true,httpOnly:true,maxAge:1000*3600*1000})
}

export const verifyUserDataToken=(token:string)=>{
const a= JWT.verify(token,process.env.jwt_secret!) as UserType
return a
}