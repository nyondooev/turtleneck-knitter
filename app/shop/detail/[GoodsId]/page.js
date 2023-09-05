import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";
import Link from "next/link";

export default async function Detail(props) {
  const client = await connectDB;
  const db = client.db("turtleneck-knitter");

  let result = await db
    .collection("goods")
    .findOne({ _id: new ObjectId(props.params.GoodsId) });

  return (
    <div>
      <h4>{result.name}</h4>
      <p>상세설명</p>
    </div>
  );
}
