import mongoose from "mongoose";
import { ICourse } from "./Course";

export interface IRoadmap extends mongoose.Document {
  title: string;
  description: string;
  courses: ICourse[];
}

const RoadmapSchema = new mongoose.Schema<IRoadmap>(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    courses: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Course",
      },
    ],
  },
  { timestamps: true }
);

export default (mongoose.models.Roadmap as mongoose.Model<IRoadmap>) ||
  mongoose.model<IRoadmap>("Roadmap", RoadmapSchema);
