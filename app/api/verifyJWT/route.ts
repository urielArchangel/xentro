import { verifyAdminAuthToken } from "@/app/src/BE/auth/jwt";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req:NextRequest) {
    try {
        const {token} = await req.json()
        const data = verifyAdminAuthToken(token)
        if(!data ){
            return NextResponse.json([null,true])
        }
        return NextResponse.json([true,null])
    } catch (error:any) {
        console.log(error.message)
        return NextResponse.json([null,true])
        
    }
}