import dbConnect from "@/config/dbConnect";
import { NextRequest, NextResponse } from "next/server";
import Course, { ICourse } from "../../models/Course";

export async function GET(
  request: NextRequest,
  { params }: { params: { courseId: string } }
) {
  try {
    await dbConnect();

    const foundCourse = await Course.findById(params.courseId);
    if (!foundCourse) throw Error("과목을 찾을 수 없습니다.");

    return NextResponse.json(foundCourse);
  } catch (e) {
    if (e instanceof Error)
      return NextResponse.json({ error: e.message }, { status: 400 });
  }
}

export async function PUT(
  request: NextRequest,
  { params: { courseId } }: { params: { courseId: string } }
) {
  try {
    const { title, description } = (await request.json()) as ICourse;

    const foundCourse = await Course.findById(courseId);
    if (!foundCourse) throw Error("과목을 찾을 수 없습니다.");

    foundCourse.title = title;
    foundCourse.description = description;
    await foundCourse.save();

    return NextResponse.json({ message: "Successfully Modified" });
  } catch (e) {
    if (e instanceof Error)
      return NextResponse.json({ error: e.message }, { status: 400 });
  }
}

export async function DELETE(
  request: NextRequest,
  { params: { courseId } }: { params: { courseId: string } }
) {
  try {
    const foundCourse = await Course.findById(courseId);
    if (!foundCourse) throw Error("과목을 찾을 수 없습니다.");

    for (const roadmap of foundCourse.roadmaps) {
      const idx = roadmap.courses.findIndex((course) =>
        foundCourse.equals(course)
      );
      roadmap.courses.splice(idx, 1);
      await roadmap.save();
    }

    await foundCourse.deleteOne();

    return NextResponse.json({ message: "Successfully Deleted" });
  } catch (e) {
    if (e instanceof Error)
      return NextResponse.json({ error: e.message }, { status: 400 });
  }
}
