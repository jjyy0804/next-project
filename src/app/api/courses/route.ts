import { NextRequest, NextResponse } from "next/server";
import dbConnect from "@/config/dbConnect";
import Course, { ICourse } from "../models/Course";

export async function GET(request: NextRequest) {
  try {
    await dbConnect();

    const courses = await Course.find({}).populate("roadmaps");

    return NextResponse.json(courses);
  } catch (e) {
    if (e instanceof Error)
      return NextResponse.json({ error: e.message }, { status: 400 });
  }
}

export async function POST(request: NextRequest) {
  try {
    await dbConnect();

    const { title, description } = (await request.json()) as ICourse;

    const createdCourse = await Course.create({
      title,
      description,
      lectures: [],
    });

    return NextResponse.json({
      message: "Successfully Created",
      courseId: createdCourse._id,
    });
  } catch (e) {
    if (e instanceof Error)
      return NextResponse.json({ error: e.message }, { status: 400 });
  }
}
