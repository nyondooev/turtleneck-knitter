import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";

export default async function handler(req, res) {
  if (req.method == "DELETE") {
    const db = (await connectDB).db("turtleneck-knitter");
    let result = await db
      .collection("goods")
      .deleteOne({ _id: new ObjectId(req.body) });
    if (result.deletedCount == 1) {
      res.status(200).json("삭제 완료");
    } else {
      res.status(500).json("상품 삭제 오류");
    }
  }
}
