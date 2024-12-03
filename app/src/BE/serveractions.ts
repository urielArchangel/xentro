"use server";

import { ReferralPoints } from "../data/constants";
import { mongoDBConnect } from "./DB/connection";
import App from "./DB/schemas/App";
import User from "./DB/schemas/User";
import { generateUniqueID } from "./uuid";
import { IApp, IUser } from "@/declarations";
import { revalidatePath, revalidateTag } from "next/cache";

export const updateCommunityBadgeMintDBAction = async (address: string) => {
  try {
    await mongoDBConnect();
    let user = (await User.findOne({ wallet_address: address })) as IUser;
    if (!user) {
      const ID = generateUniqueID(address);
      await User.create({ wallet_address: address, ID });
      user = (await User.findOne({ wallet_address: address })) as IUser;
    }

    user.community_badge = true;
    await user.save();
    return [true, null];
  } catch (err: any) {
    console.log({ err });
    return [null, err.message];
  }
};

export const updateWarriorBadgeMintDBAction = async (address: string) => {
  try {
    await mongoDBConnect();
    let user = (await User.findOne({ wallet_address: address })) as IUser;
    if (!user) {
      const ID = generateUniqueID(address);
      await User.create({ wallet_address: address, ID });
      user = (await User.findOne({ wallet_address: address })) as IUser;
    }

    user.warrior_badge = true;
    user.invite_link = process.env.baseurl + "/airdrop?ref=" + user.ID;
    await user.save();
    return [true, null];
  } catch (err: any) {
    console.log({ err });
    return [null, err.message];
  }
};

export const taskCompletedAction = async (
  taskId: string,
  walletAddress: string
) => {
  try {
    await mongoDBConnect();
    let user = (await User.findOne({ wallet_address: walletAddress })) as IUser;
    if (!user) {
      const ID = generateUniqueID(walletAddress);
      await User.create({ wallet_address: walletAddress, ID });
      user = (await User.findOne({ wallet_address: walletAddress })) as IUser;
    }
    let app = (await App.findOne({})) as IApp;
    if (!app) {
      await App.create();
      app = (await App.findOne({})) as IApp;
    }
    const task = app.tasks.filter((task) => task.id == taskId)[0];
    if (!user.tasks_completed_ids.includes(taskId)) {
      user.tasks_completed_ids.push(taskId);
      user.total_points += task.points;
      app.tasks_completed += 1;
      app.total_points_distributed += task.points;
      if (task.mint) {
        if (task.mintBadge == "community") {
          const a = app.mints.filter(
            (e) =>
              e.wallet == walletAddress &&
              e.task.toLowerCase().includes("community")
          )[0];
          if (!a) {
            app.mints.push({
              ID: user.ID,
              task: "Minted Xentro Community Badge",
              wallet: user.wallet_address,
            });
            app.total_mints += 1;
          }
        } else {
          if (!user.community_badge) {
            return [
              null,
              "community badge must be minted first before warrior badge can be minted",
            ];
          }
          const a = app.mints.filter(
            (e) =>
              e.wallet == walletAddress &&
              e.task.toLowerCase().includes("warrior")
          )[0];

          if (!a) {
            app.mints.push({
              ID: user.ID,
              task: "Minted Xentro Warrior Badge",
              wallet: user.wallet_address,
            });
            app.total_mints += 1;
          }
        }
      }
      let completedAllExclusiveTasks = false
      app.tasks.filter((e)=>{
        if(e.exclusive && e.status){
          if(!user.tasks_completed_ids.includes(e.id)){
            completedAllExclusiveTasks = false
            return
          }
          completedAllExclusiveTasks =true
        }
      })
      if (completedAllExclusiveTasks) {
    
      
        
        if(user.referals.referrerID ){
          const referrer = await User.findOne({ID:user.referals.referrerID}) as IUser
          if(referrer && !referrer.blocked){
            referrer.referals.points += ReferralPoints
            referrer.total_points += ReferralPoints
            app.total_points_distributed += ReferralPoints
          }
          user.referals.referrerID=""
          await referrer.save()
        }
      }
      await user.save();
      await app.save();
      revalidatePath("/airdrop");
      revalidatePath("/airdrop/tasks");

      revalidateTag("fetchUser_client");

      return ["Task completed!", null];
    } else {
      return [null, "Task has already been done"];
    }
  } catch (error: any) {
    console.log({ error });
    return [null, error.message];
  }
};

export const submitTaskAction = async (
  points: number,
  link: string,
  task: string,
  platform: string,
  exclusive: boolean,
  id?:string
) => {
  try {
    await mongoDBConnect();
    let app = (await App.findOne({})) as IApp;
    if (!app) {
      await App.create({});
      app = (await App.findOne({})) as IApp;
    }
    if(id){
      const filter = app.tasks.filter(e=>e.id == id) 
      if(filter.length> 0){
        filter[0].link = link
        filter[0].points = points
        filter[0].task = task
        filter[0].platform = platform
        filter[0].exclusive = exclusive
        app.markModified('tasks');
        await app.save();
        revalidatePath("/admin/app/task");
        await app.save();
        return [true, null];

      }

    }
    app.tasks.push({
      task,
      platform,
      link,
      points,
      mint: false,
      id: String(app.taskCount),
      status: true,
      exclusive,
    });
    app.taskCount+=1;
    revalidatePath("/admin/app/task");
    await app.save();
    return [true, null];
  } catch (error: any) {
    console.log(error.message);
    return [null, error.message];
  }
};
export const blockUserAction = async (ID: string) => {
  try {
    const user = (await User.findOne({ ID })) as IUser;
    user.blocked = !user.blocked;
    await user.save();
    return [true, null];
  } catch (error: any) {
    return [null, error.message];
  }
};

export const addPointsAction = async (ID: string, points: number) => {
  try {
    const user = (await User.findOne({ ID })) as IUser;
    user.total_points += points;
    await user.save();
    revalidatePath("/admin/app/data/" + ID);
    revalidatePath("/aidrop");

    return [true, null];
  } catch (error: any) {
    return [null, error.message];
  }
};

export const removePointsAction = async (ID: string, points: number) => {
  try {
    const user = (await User.findOne({ ID })) as IUser;
    user.total_points -= points;
    await user.save();
    revalidatePath("/admin/app/data/" + ID);
    revalidatePath("/aidrop");
    return [true, null];
  } catch (error: any) {
    return [null, error.message];
  }
};

export const subscribeEmail = async (email: string) => {
  try {
    await mongoDBConnect();
    let app = (await App.findOne({})) as IApp;
    if (!app) {
      await App.create({});
    }
    app = (await App.findOne({})) as IApp;
    app.emails.push(email);
    await app.save();

    return [true, null];
  } catch (error: any) {
    console.log(error.message);
    return [null, error.message];
  }
};


export const deleteTaskAction =async(id:string)=>{
  try {
    await mongoDBConnect();
    const app = (await App.findOne({})) as IApp;
 
    if(id){
      const filter = app.tasks.filter(e=>e.id != id) 
      app.tasks=filter
    }
   
    revalidatePath("/admin/app/task-overview");
    await app.save();
    return [true, null];
  } catch (error: any) {
    console.log(error.message);
    return [null, error.message];
  }
}