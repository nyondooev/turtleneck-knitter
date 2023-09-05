export default async function handler(req, res) {
  // 모든 글 데이터 DB에서 가져오기
  const client = await connectDB;
  const db = client.db("turtleneck-knitter");

  let result = await db.collection("goods").find().toArray();

  if (req.method == "POST") {
    return res.status(200).json("success");
  } else if (req.method == "GET") {
    return res.status(200).json(result);
  }
}
