import dbConnect from "@/config/dbConnect";
import { NextRequest, NextResponse } from "next/server";
import Roadmap, { IRoadmap } from "@/app/api/models/Roadmap";
import Course from "@/app/api/models/Course";

export async function GET(
  request: NextRequest,
  { params }: { params: { roadmapId: string } }
) {
  try {
    await dbConnect();

    const roadmap = await Roadmap.findById(params.roadmapId).populate(
      "courses"
    );
    if (!roadmap)
      return NextResponse.json({ error: "Roadmap not found" }, { status: 404 });

    return NextResponse.json(roadmap);
  } catch (e) {
    if (e instanceof Error)
      return NextResponse.json({ error: e.message }, { status: 400 });
  }
}

export async function PUT(
  request: NextRequest,
  { params: { roadmapId } }: { params: { roadmapId: string } }
) {
  try {
    await dbConnect();

    const { title, description, courses } = (await request.json()) as IRoadmap;

    const foundRoadmap = await Roadmap.findById(roadmapId).populate("courses");
    if (!foundRoadmap) throw Error("로드맵을 찾을 수 없습니다.");

    for (const prevCourse of foundRoadmap.courses) {
      const idx = prevCourse.roadmaps.findIndex((roadmap) =>
        foundRoadmap.equals(roadmap)
      );
      prevCourse.roadmaps.splice(idx, 1);
      await prevCourse.save();
    }

    foundRoadmap.title = title;
    foundRoadmap.description = description;
    foundRoadmap.courses = courses;
    await foundRoadmap.save();

    for (const course of courses) {
      const foundCourse = await Course.findById(course._id);
      if (!foundCourse) throw Error("유효하지 않은 과목이 포함되어 있습니다.");
      foundCourse.roadmaps.push(foundRoadmap);
      await foundCourse.save();
    }

    return NextResponse.json({ message: "Successfully Modified" });
  } catch (e) {
    if (e instanceof Error) {
      console.log(e.message);
      return NextResponse.json({ error: e.message }, { status: 400 });
    }
  }
}

export async function DELETE(
  request: NextRequest,
  { params: { roadmapId } }: { params: { roadmapId: string } }
) {
  try {
    const foundRoadmap = await Roadmap.findById(roadmapId);

    if (!foundRoadmap) throw Error("로드맵을 찾을 수 없습니다.");

    for (const prevCourse of foundRoadmap.courses) {
      const idx = prevCourse.roadmaps.findIndex((roadmap) =>
        foundRoadmap.equals(roadmap)
      );
      prevCourse.roadmaps.splice(idx, 1);
      await prevCourse.save();
    }

    await foundRoadmap.deleteOne();

    return NextResponse.json({ message: "Successfully Deleted" });
  } catch (e) {
    if (e instanceof Error)
      return NextResponse.json({ error: e.message }, { status: 400 });
  }
}
