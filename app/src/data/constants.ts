export const adminCookieName = "admin_auth"
export const NFTContractAddress = "0x60e569f9e262133078c226044cAf51B862FeA2e6"
// export const NFTContractAddress = "0x453c5bda3EDd5c7F39483B30C3B9A32C948130aa" //test
export const ReferralPoints = 10000
export const userDataCookieName = "user_0"
export const joinXentroXID = "1350830915048628227"
export const twitterHandleLink  =  "https://twitter.com/joinxentro"
// export const rpc = "https://sepolia.drpc.org"
export const rpc = "https://mainnet.base.org"
export const mintCbadgeTask = "Minted Xentro Community Badge"
export const mintWbadgeTask = "Minted Xentro Warrior Badge"
export const adminAddresses = ["0x0C26a9BfC3b4F9fFB36F0cD57C99cbCe600203d2","0xd33e318Aa1f1B00B8e30A6f14984fA5bb68b8b24","0x8B602e0CD6497C8e77c496d9916F6c0df4E82934"]
export  const acceptedTaskOptions=["joinPage","followPage","retweetPost","sharePost","engagePost","commentPost"]
export const taskNameToDescriptionMap:
    {[id:string]:string}
={
    "joinPage":"Join this page",
    "followPage":"Follow this page",
    "retweetPost":"Retweet this post",
    "sharePost":"Share this post",
    "engagePost":"Engage this post",
    "commentPost" :"Comment on this post"

}

export const constructTask = (platform:string,taskOption:string)=>{
    const firstchar = platform[0].toUpperCase()
    const convert =  firstchar+platform.slice(1,)
switch (taskOption){
    case "joinPage":
        return `Join our ${convert} `

}
}