import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";

export default async function handler(req, res) {
  console.log(req.method);
  if (req.method == "POST") {
    let EditContent = {
      product_name: req.body.product_name,
      product_price: req.body.product_price,
      product_description: req.body.product_description,
    };

    try {
      let db = (await connectDB).db("turtleneck-knitter");
      let result = await db
        .collection("goods")
        .updateOne({ _id: new ObjectId(req.body._id) }, { $set: EditContent });
      console.log(result);
      return res.redirect(302, "/list");
    } catch (error) {
      return res.status(500).json("수정 실패");
    }
  }
}
