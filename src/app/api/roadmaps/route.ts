import { NextRequest, NextResponse } from "next/server";
import Roadmap, { IRoadmap } from "@/app/api/models/Roadmap";
import dbConnect from "@/config/dbConnect";
import Course from "@/app/api/models/Course";

export async function GET() {
  try {
    await dbConnect();

    const roadmaps = await Roadmap.find({});
    return NextResponse.json(roadmaps);
  } catch (e) {
    if (e instanceof Error)
      return NextResponse.json({ error: e.message }, { status: 400 });
  }
}

export async function POST(request: NextRequest) {
  try {
    await dbConnect();

    const {
      title,
      description,
      courses = [],
    } = (await request.json()) as IRoadmap;

    if (!title || !description) throw Error("비어있는 필드가 있습니다.");

    const newRoadmap = await Roadmap.create({
      title,
      description,
      courses,
    });

    for (const courseId of courses) {
      const foundCourse = await Course.findById(courseId);
      if (!foundCourse) throw Error("유효하지 않은 과목이 포함되어 있습니다.");
      foundCourse.roadmaps.push(newRoadmap);
      await foundCourse.save();
    }

    return NextResponse.json({
      message: "Successfully Created",
      roadmapId: newRoadmap._id,
    });
  } catch (e) {
    if (e instanceof Error)
      return NextResponse.json({ error: e.message }, { status: 400 });
  }
}
