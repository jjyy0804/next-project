import Course from "@/app/api/models/Course";
import Lecture, { ILecture } from "@/app/api/models/Lecture";
import dbConnect from "@/config/dbConnect";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  request: NextRequest,
  {
    params: { courseId, lectureId },
  }: { params: { lectureId: string; courseId: string } }
) {
  try {
    await dbConnect();

    const foundCourse = await Course.findById(courseId);
    if (!foundCourse) throw Error("과목을 찾을 수 없습니다.");

    const foundLecture = await Lecture.findById(lectureId);
    if (!foundLecture) throw Error("렉쳐를 찾을 수 없습니다.");

    if (!foundCourse.lectures.find((lecture) => foundLecture.equals(lecture)))
      throw Error("해당 과목에 포함된 렉쳐가 아닙니다.");

    return NextResponse.json(foundLecture);
  } catch (e) {
    if (e instanceof Error)
      return NextResponse.json({ error: e.message }, { status: 400 });
  }
}

export async function PUT(
  request: NextRequest,
  {
    params: { courseId, lectureId },
  }: { params: { courseId: string; lectureId: string } }
) {
  try {
    await dbConnect();

    const { title, description } = (await request.json()) as ILecture;

    const foundCourse = await Course.findById(courseId);
    if (!foundCourse) throw Error("과목을 찾을 수 없습니다.");

    const foundLecture = await Lecture.findById(lectureId);
    if (!foundLecture) throw Error("렉쳐를 찾을 수 없습니다.");

    if (!foundCourse.lectures.find((lecture) => foundLecture.equals(lecture)))
      throw Error("해당 과목에 포함된 렉쳐가 아닙니다.");

    foundLecture.title = title;
    foundLecture.description = description;
    await foundLecture.save();

    return NextResponse.json({ message: "Successfully Modified" });
  } catch (e) {
    if (e instanceof Error)
      return NextResponse.json({ error: e.message }, { status: 400 });
  }
}

export async function DELETE(
  request: NextRequest,
  {
    params: { lectureId, courseId },
  }: { params: { courseId: string; lectureId: string } }
) {
  try {
    await dbConnect();

    const foundCourse = await Course.findById(courseId);
    if (!foundCourse) throw Error("과목을 찾을 수 없습니다.");

    const foundLecture = await Lecture.findById(lectureId);
    if (!foundLecture) throw Error("렉쳐를 찾을 수 없습니다.");

    const idx = foundCourse.lectures.findIndex((lecture) =>
      foundLecture.equals(lecture)
    );
    if (idx === -1) throw Error("해당 과목에 포함된 렉쳐가 아닙니다.");

    foundCourse.lectures.splice(idx, 1);
    await foundCourse.save();

    await foundLecture.deleteOne();

    return NextResponse.json({ message: "Successfully Deleted" });
  } catch (e) {
    if (e instanceof Error)
      return NextResponse.json({ error: e.message }, { status: 400 });
  }
}
