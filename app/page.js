import { connectDB } from "@/util/database";
import { MongoClient } from "mongodb";

export default async function Home() {
  const client = await connectDB;
  const db = client.db("turtleneck-knitter");
  let result = await db.collection("goods").find().toArray();

  return;
}
