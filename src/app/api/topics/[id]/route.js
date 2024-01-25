import { NextResponse } from "next/server";
import connectMongoDb from "../../../../../libs/mongodb";
import Topic from "../../../../../model/topic";

export async function PUT(request, { params }) {
  const { id } = params;
  const { newTitle: title, newDescription: description } = await request.json();
  await connectMongoDb();
  await Topic.findByIdAndUpdate(id, { title, description })
  return NextResponse.json({ message: "Topic is updated" })

}

export async function GET(request, { params }) {
  const { id } = params;
  await connectMongoDb()
  const topics = await Topic.findOne({ _id: id })
  return NextResponse.json({ topics }, { status: 200 })
}