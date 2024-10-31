"use server"

import { cookies } from "next/headers"
import User from "./DB/schemas/User"
import { generateUniqueID, updateUserCookie } from "./helpers"
import { IUser } from "@/declarations"
import { userDataCookieName } from "../data/constants"
import { signUserDataJWT } from "./userdata/jwt"


export const updateCommunityBadgeMintDBAction = async(address:string)=>{
try{
const user =await User.findOne({wallet_address:address}) as IUser
if(!user){
    const ID = generateUniqueID(address)
    await User.create({wallet_address:address,ID})
}

user.community_badge = true
await user.save();
await updateUserCookie(user)
return [true,null]
}catch(err:any){
console.log({err})
return [null,err.message]
}
}