export const trauncateAddressMiddle = (s?:string,length?:number)=>{
    if(!s)return null
    if(!length)length =5
const firstHalf = s.slice(0,length)
const lastHalf = s.slice(s.length - length)
return firstHalf+'....'+lastHalf
}