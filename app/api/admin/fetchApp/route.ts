import { mongoDBConnect } from "@/app/src/BE/DB/connection"
import App from "@/app/src/BE/DB/schemas/App"
import { IApp } from "@/declarations"
import {  NextResponse } from "next/server";


export async function GET() {
    try{
        await mongoDBConnect()
        let app = await App.findOne({}) as IApp
        if(!app){
            await App.create({})
    
            app = await App.findOne({}) as IApp
    
        }
        return NextResponse.json([app, null]);
    }catch(err:any){
        console.log({error:err.message})
        return NextResponse.json([null, err.message]);

    }