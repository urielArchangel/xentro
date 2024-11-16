import { Schema, model, models } from "mongoose";

const UserSchema = new Schema({
  ID: {
    type: String,
    required: true,
    unique: true,
  },
  tasks_completed_ids: [String],
  invite_link: String,
  wallet_address: {
    type: String,
    unique: true,
    required: true,
  },
  referals: {
    type:{
    count: Number,
    points: Number,
  },default:{count:0,points:0}},
  community_badge: {type:Boolean,default:false},
  warrior_badge: {type:Boolean,default:false}, 
  ip: String,
  status: {type:String,default:"qualified"},
  total_points: {type:Number,default:0},
  blocked: {
    type: Boolean,
    default: false,
  },
  last_login: { type: Number, default: Date.now() },
});

const User = process.env.NODE_ENV  != "production"? ( models.UserDev || model("UserDev", UserSchema)): ( models.User || model("User", UserSchema));


export default User;
