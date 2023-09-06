import { connectDB } from "@/util/database";
import Link from "next/link";
import ListItem from "./ListItem";

export default async function List() {
  const db = (await connectDB).db("turtleneck-knitter");
  let result = await db.collection("goods").find().toArray();

  result.map((e, i) => {
    e._id = e._id.toString();
  });

  return (
    <div className="list-bg">
      <ListItem result={result} />
    </div>
  );
}
