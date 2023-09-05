import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";

export default async function Edit(props) {
  const client = await connectDB;
  const db = client.db("turtleneck-knitter");

  let result = await db
    .collection("goods")
    .findOne({ _id: new ObjectId(props.params.GoodsId) });

  await db
    .collection("goods")
    .updateOne({ _id: props.params.GoodsId }, { $set: {} });

  return (
    <div>
      <h4>수정 페이지</h4>
      <form action="/api/register/edit" method="POST">
        <input
          name="product_name"
          placeholder="상품명"
          defaultValue={result.product_name}
        />
        <input
          name="product_price"
          placeholder="가격"
          defaultValue={result.product_price}
        />
        <input
          name="product_description"
          placeholder="상세설명"
          defaultValue={result.product_description}
        />
        <input
          style={{ display: "none" }}
          name="_id"
          defaultValue={result._id.toString()}
        />
        <button type="submit">버튼</button>
      </form>
    </div>
  );
}
