'use server'

import { redirect } from "next/navigation"
import { signAdminAuthJWT } from "./jwt"

export const _AdminLogin = async(email:string, pwd:string)=>{
if(email != process.env.admin_email || email == ''){
return [null,"incorrect email"]
}
if(pwd != process.env.admin_pwd || pwd==''){
return [null,"incorrect password"]

}
signAdminAuthJWT(email)
redirect("/admin/app/overview")
}