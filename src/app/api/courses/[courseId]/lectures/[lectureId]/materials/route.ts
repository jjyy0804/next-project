import Course from "@/app/api/models/Course";
import Lecture from "@/app/api/models/Lecture";
import Material, { IMaterial } from "@/app/api/models/Material";
import dbConnect from "@/config/dbConnect";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  request: NextRequest,
  {
    params: { lectureId, courseId },
  }: { params: { lectureId: string; courseId: string } }
) {
  try {
    await dbConnect();

    const foundCourse = await Course.findById(courseId);
    if (!foundCourse) throw Error("과목을 찾을 수 없습니다.");

    const foundLecture = await Lecture.findById(lectureId).populate(
      "materials"
    );
    if (!foundLecture) throw Error("렉쳐를 찾을 수 없습니다.");

    if (!foundCourse.lectures.find((lecture) => foundLecture.equals(lecture)))
      throw Error("해당 과목에 포함된 렉쳐가 아닙니다.");

    return NextResponse.json(foundLecture.materials);
  } catch (e) {
    if (e instanceof Error)
      return NextResponse.json({ error: e.message }, { status: 400 });
  }
}

export async function POST(
  request: NextRequest,
  {
    params: { courseId, lectureId },
  }: { params: { courseId: string; lectureId: string } }
) {
  try {
    await dbConnect();

    const foundCourse = await Course.findById(courseId);
    if (!foundCourse) throw Error("과목을 찾을 수 없습니다.");

    const foundLecture = await Lecture.findById(lectureId).populate(
      "materials"
    );
    if (!foundLecture) throw Error("렉쳐를 찾을 수 없습니다.");

    if (!foundCourse.lectures.find((lecture) => foundLecture.equals(lecture)))
      throw Error("해당 과목에 포함된 렉쳐가 아닙니다.");

    const { title, content } = (await request.json()) as IMaterial;

    const createdMaterial = await Material.create({
      title,
      content,
    });

    foundLecture.materials.push(createdMaterial);
    await foundLecture.save();

    return NextResponse.json({
      message: "Successfully Created",
      materialId: createdMaterial._id,
    });
  } catch (e) {
    if (e instanceof Error)
      return NextResponse.json({ error: e.message }, { status: 400 });
  }
}
