export interface IUser {
  ID: string;
  wallet_address: string;
  referals: {
    count: number;
    points: number;
  };
  invite_link:string;
  tasks_completed_ids: string[];
  community_badge: boolean;
  warrior_badge: boolean;
  ip: string;
  status: string;
  total_points: number;
  blocked: boolean;
  last_login: number;
  save: () => Promise<void>;
}

export interface IMint {
  ID: string;
  task: string;
  wallet: string;
}

export interface ITask {
  id:string
  platform: string;
  task: string;
  link: string;
  points: number;
  status: boolean;
  exclusive: boolean;
  mint:boolean
  mintBadge?:"community"|"warrior"
}

export interface IApp {
  total_points_distributed: number;
  total_mints: number;
  tasks_completed: number;
  tasks: ITask[];
  mints: IMint[];
  emails:string[];
  save:()=>Promise<void>
}

export interface IMetricsData {
  date: date;
  totalUsers: number;
  totalMints: number;
  totalPointsDistributed: number;
  tasksCompleted: number;
  save:()=>Promise<void>
}

// next-auth.d.ts
import NextAuth from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      id?: string; // This is the Twitter user ID
      name?: string | null;
      email?: string | null;
      image?: string | null;
    };
  }
}
