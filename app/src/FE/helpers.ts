export const trauncateAddressMiddle = (s?:string,length?:number)=>{
    if(!s)return null
    if(!length)length =5
const firstHalf = s.slice(0,length)
const lastHalf = s.slice(s.length - length)
return firstHalf+'....'+lastHalf
}

export const urlresolve = (a:string)=>{
    return process.env.NODE_ENV == 'production'? window.location.origin+a:a
}

export const fetchUserClient = async(address:string,ref?:string)=>{
try {
    
    const res = await fetch(urlresolve("/api/fetchUser"),{
        method:"POST",
        body:JSON.stringify({address,ref}),
        next:{
            tags:['fetchUser_client']
        }
    })
    const [user,error] = await res.json()
    if(error){
        return [null,error]
    }
    return [user,null]
} catch (error:any) {
    console.log(error.message+"1")
    return [null,error.message]
}
}