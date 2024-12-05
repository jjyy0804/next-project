import mongoose from "mongoose";
import { IMaterial } from "./Material";

export interface ILecture extends mongoose.Document {
  title: string;
  description: string;
  materials: IMaterial[];
}

const LectureSchema = new mongoose.Schema<ILecture>(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    materials: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Material",
      },
    ],
  },
  { timestamps: true }
);

export default (mongoose.models.Lecture as mongoose.Model<ILecture>) ||
  mongoose.model<ILecture>("Lecture", LectureSchema);
