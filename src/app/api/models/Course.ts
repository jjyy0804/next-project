import mongoose from "mongoose";
import { IRoadmap } from "./Roadmap";
import { ILecture } from "./Lecture";

export interface ICourse extends mongoose.Document {
  title: string;
  description: string;
  lectures: ILecture[];
  roadmaps: IRoadmap[];
}

const CourseSchema = new mongoose.Schema<ICourse>(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    lectures: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Lecture",
      },
    ],
    roadmaps: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Roadmap",
      },
    ],
  },
  { timestamps: true }
);

export default (mongoose.models.Course as mongoose.Model<ICourse>) ||
  mongoose.model<ICourse>("Course", CourseSchema);
