import { Schema, model, models } from "mongoose";

const MetricSnapshotSchema = new Schema({
  date: {
    type: Date,
    required: true,
    unique: true,
  },
  totalUsers: Number,
  totalMints: Number,
  totalPointsDistributed: Number,
  tasksCompleted: Number,
});



const Metrics = models.Metrics || model("Metrics",MetricSnapshotSchema)

export default Metrics