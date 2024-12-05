import mongoose from "mongoose";

export interface IMaterial extends mongoose.Document {
  title: string;
  content: string;
}

const MaterialSchema = new mongoose.Schema<IMaterial>(
  {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export default (mongoose.models.Material as mongoose.Model<IMaterial>) ||
  mongoose.model<IMaterial>("Material", MaterialSchema);
