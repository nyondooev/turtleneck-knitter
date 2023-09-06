import { connectDB } from "@/util/database";

export default async function handler(req, res) {
  if (req.method == "POST") {
    if (req.body.product_name == "") {
      return res.status(500).json("상품명을 작성해주세요.");
    } else if (req.body.product_price == "") {
      return res.status(500).json("가격을 작성해주세요.");
    }

    try {
      const db = (await connectDB).db("turtleneck-knitter");
      let result = await db.collection("goods").insertOne(req.body);
      return res.redirect(301, "/admin/list");
    } catch (error) {
      return res.status(500).json("상품 등록 실패. 다시 시도해주세요.");
    }
  }
}
