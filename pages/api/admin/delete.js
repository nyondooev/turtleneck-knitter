import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";

export default async function handler(req, res) {
  if (req.method == "DELETE") {
    console.log(req.body);
    const db = (await connectDB).db("turtleneck-knitter");
    let result = await db
      .collection("goods")
      .deleteOne({ _id: new ObjectId() });
    return res.status(200).json("delete success");
  }
}
