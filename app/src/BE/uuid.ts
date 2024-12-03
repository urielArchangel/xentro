import crypto from 'crypto'

export const generateUniqueID = (address:string)=>{
    const salt = process.env.salt!
    const rand = crypto.randomBytes(16).toString('hex')
const hash = crypto.createHash('md5').update(rand+salt+address+salt+rand).digest("hex")
return hash.slice(0,9);
}
