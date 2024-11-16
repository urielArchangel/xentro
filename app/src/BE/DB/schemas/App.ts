import { exclusiveTasksDefault } from "@/app/src/data/database/defaultTasksExclusive";
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
    default: exclusiveTasksDefault,
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
  emails:[String]
});

const App =process.env.NODE_ENV  != "production"? (models.AppDev || model("AppDev", AppSchema)):(models.App || model("App", AppSchema));

export default App;
