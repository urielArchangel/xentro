import { mongoDBConnect } from "@/app/src/BE/DB/connection";
import User from "@/app/src/BE/DB/schemas/User";
import { generateUniqueID } from "@/app/src/BE/helpers";
import {  IUser } from "@/declarations";
import { revalidatePath } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { address,ref } = await req.json();
    await mongoDBConnect();
    const user = (await User.findOne({ wallet_address: address })) as IUser;
    const _ip = req.headers.get("x-forwarded-for")?.split(",")[0]!;
//     const isCommunityBadgeMinted = async () => {
//       const web3 = new Web3(rpc);

//       const contract = new web3.eth.Contract(
//         NFTMetatdata.output.abi,
//         NFTContractAddress
//       );

//       const has = (await contract.methods
//         .hasCommunityBadge(address)
//         .call()) as boolean;
//       return has;
//     };

//     const isWarriorBadgeMinted = async () => {
//       const web3 = new Web3(rpc);

//       const contract = new web3.eth.Contract(
//         NFTMetatdata.output.abi,
//         NFTContractAddress
//       );

//       const has = (await contract.methods
//         .hasCommunityBadge(address)
//         .call()) as boolean;
//       return has;
//     };


//     const cbadge = await isCommunityBadgeMinted() 
//     const wbadge = await isWarriorBadgeMinted()
    if (!user) {
      if(ref){
      console.log({ref})
        const referer = await User.findOne({ID:ref}) as IUser
        if(referer && referer.warrior_badge){
          referer.referals.referrerID=ref
          referer.referals.count+=1
          await referer.save()
        }
      }

      await User.create({
        wallet_address: address,
        ID: generateUniqueID(address),
        ip: _ip,
        
      });
    }

    const u = await User.findOne({ wallet_address: address });
    revalidatePath("/airdrop");
    return NextResponse.json([u, null]);
  } catch (error: any) {
    console.log(error.message);
    return NextResponse.json([null, error.message]);
  }
}
