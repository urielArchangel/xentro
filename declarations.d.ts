export interface IUser{
    ID: string,
    wallet_address:string,
    referals: {
      count: number,
      points: number,
    },
    community_badge: boolean,
    warrior_badge: boolean,
    ip: string,
    status: string,
    total_points: number,
    blocked:boolean
    last_login:number,
    save:()=>Promise<void>
  }