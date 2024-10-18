import JWT from 'jsonwebtoken'
import { cookies } from 'next/headers'
import { adminCookieName } from '../../data/constants'

export const signAdminAuthJWT = (email:string)=>{
const token = JWT.sign({email},process.env.jwt_secret!)
 cookies().set(adminCookieName,token,{
    secure:true,
    maxAge:5 * 3600 * 1000,
    httpOnly:true
 })
}

export const verifyAdminAuthToken=(token:string)=>{
const a= JWT.verify(token,process.env.jwt_secret!) as {email:string} | null
return a
}