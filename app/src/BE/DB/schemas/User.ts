import { Schema, model, models } from "mongoose";

const UserSchema = new Schema({
  ID: {
    type: String,
    required: true,
    unique: true,
  },
  wallet_address: {
    type: String,
    unique: true,
    required: true,
  },
  referals: {
    count: Number,
    points: Number,
  },
  community_badge: Boolean,
  warrior_badge: Boolean,
  ip: String,
  status: String,
  total_points: Number,
  blocked: {
    type: Boolean,
    default: false,
  },
  last_login: { type: Number, default: Date.now() },
});


const User = models.User || model("User",UserSchema)

export default User