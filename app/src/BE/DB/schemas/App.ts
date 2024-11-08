import { Schema, model, models } from "mongoose";

const AppSchema = new Schema({
  total_points_distributed: { type: Number, default: 0 },
  total_mints: { type: Number, default: 0 },
  tasks_completed: { type: Number, default: 0 },
  tasks: {
    type: [
      {
        id: String,
        platform: String,
        task: String,
        link: String,
        points: Number,
        status: Boolean,
        exclusive: Boolean,
        mint: Boolean,
        mintBadge: String,
      },
    ],
    default: [{
      id:"0",
      platform:"",
      task:"Mint community badge",
      points:40000,
      status:true,
      exclusive:true,
      mint:true,
      mintBadge:"community"
    },{
      id:"1",
      platform:"",
      task:"Mint warrior badge",
      points:40000,
      status:true,
      exclusive:true,
      mint:true,
      mintBadge:"warrior"
    }],
  },
  mints: {
    type: [
      {
        ID: String,
        task: String,
        wallet: String,
      },
    ],
    default: [],
  },
});

const App = models.App || model("App", AppSchema);

export default App;
