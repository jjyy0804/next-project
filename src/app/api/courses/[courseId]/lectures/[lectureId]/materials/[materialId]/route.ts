import Course from "@/app/api/models/Course";
import Lecture from "@/app/api/models/Lecture";
import Material, { IMaterial } from "@/app/api/models/Material";
import dbConnect from "@/config/dbConnect";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  request: NextRequest,
  {
    params: { courseId, lectureId, materialId },
  }: { params: { materialId: string; lectureId: string; courseId: string } }
) {
  try {
    await dbConnect();

    const foundCourse = await Course.findById(courseId);
    if (!foundCourse) throw Error("과목을 찾을 수 없습니다.");

    const foundLecture = await Lecture.findById(lectureId);
    if (!foundLecture) throw Error("렉쳐를 찾을 수 없습니다.");

    const foundMaterial = await Material.findById(materialId);
    if (!foundMaterial) throw Error("자료를 찾을 수 없습니다.");

    if (!foundCourse.lectures.find((lecture) => foundLecture.equals(lecture)))
      throw Error("해당 과목에 포함된 렉쳐가 아닙니다.");
    if (
      !foundLecture.materials.find((material) => foundMaterial.equals(material))
    )
      throw Error("해당 렉쳐에 포함된 자료가 아닙니다.");

    return NextResponse.json(foundMaterial);
  } catch (e) {
    if (e instanceof Error)
      return NextResponse.json({ error: e.message }, { status: 400 });
  }
}

export async function PUT(
  request: NextRequest,
  {
    params: { courseId, lectureId, materialId },
  }: { params: { courseId: string; lectureId: string; materialId: string } }
) {
  try {
    await dbConnect();

    const foundCourse = await Course.findById(courseId);
    if (!foundCourse) throw Error("과목을 찾을 수 없습니다.");

    const foundLecture = await Lecture.findById(lectureId);
    if (!foundLecture) throw Error("렉쳐를 찾을 수 없습니다.");

    const foundMaterial = await Material.findById(materialId);
    if (!foundMaterial) throw Error("자료를 찾을 수 없습니다.");

    if (!foundCourse.lectures.find((lecture) => foundLecture.equals(lecture)))
      throw Error("해당 과목에 포함된 렉쳐가 아닙니다.");
    if (
      !foundLecture.materials.find((material) => foundMaterial.equals(material))
    )
      throw Error("해당 렉쳐에 포함된 자료가 아닙니다.");

    const { title, content } = (await request.json()) as IMaterial;

    foundMaterial.title = title;
    foundMaterial.content = content;
    await foundMaterial.save();

    return NextResponse.json({ message: "Successfully Modified" });
  } catch (e) {
    if (e instanceof Error)
      return NextResponse.json({ error: e.message }, { status: 400 });
  }
}

export async function DELETE(
  request: NextRequest,
  {
    params: { courseId, lectureId, materialId },
  }: { params: { courseId: string; materialId: string; lectureId: string } }
) {
  try {
    await dbConnect();

    const foundCourse = await Course.findById(courseId);
    if (!foundCourse) throw Error("과목을 찾을 수 없습니다.");

    const foundLecture = await Lecture.findById(lectureId);
    if (!foundLecture) throw Error("렉쳐를 찾을 수 없습니다.");

    const foundMaterial = await Material.findById(materialId);
    if (!foundMaterial) throw Error("자료를 찾을 수 없습니다.");

    if (!foundCourse.lectures.find((lecture) => foundLecture.equals(lecture)))
      throw Error("해당 과목에 포함된 렉쳐가 아닙니다.");

    const idx = foundLecture.materials.findIndex((material) =>
      foundMaterial.equals(material)
    );
    if (idx === -1) throw Error("해당 렉쳐에 포함된 자료가 아닙니다.");

    foundLecture.materials.splice(idx, 1);
    await foundLecture.save();

    await foundMaterial.deleteOne();

    return NextResponse.json({ message: "Successfully Deleted" });
  } catch (e) {
    if (e instanceof Error)
      return NextResponse.json({ error: e.message }, { status: 400 });
  }
}
