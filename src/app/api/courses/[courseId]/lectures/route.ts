import Course from "@/app/api/models/Course";
import Lecture, { ILecture } from "@/app/api/models/Lecture";
import dbConnect from "@/config/dbConnect";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  request: NextRequest,
  { params: { courseId } }: { params: { courseId: string } }
) {
  try {
    await dbConnect();

    const foundCourse = await Course.findById(courseId).populate("lectures");
    if (!foundCourse) throw Error("과목을 찾을 수 없습니다.");

    return NextResponse.json(foundCourse.lectures);
  } catch (e) {
    if (e instanceof Error)
      return NextResponse.json({ error: e.message }, { status: 400 });
  }
}

export async function POST(
  request: NextRequest,
  { params: { courseId } }: { params: { courseId: string } }
) {
  try {
    await dbConnect();

    const { title, description } = (await request.json()) as ILecture;

    const foundCourse = await Course.findById(courseId).populate("lectures");
    if (!foundCourse) throw Error("과목을 찾을 수 없습니다.");

    const createdLecture = await Lecture.create({
      title,
      description,
    });

    foundCourse.lectures.push(createdLecture);
    await foundCourse.save();

    return NextResponse.json({
      message: "Successfully Created",
      lectureId: createdLecture._id,
    });
  } catch (e) {
    if (e instanceof Error)
      return NextResponse.json({ error: e.message }, { status: 400 });
  }
}
