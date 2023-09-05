import { connectDB } from "@/util/database";
import Link from "next/link";

export default async function List() {
  const client = await connectDB;
  const db = client.db("turtleneck-knitter");

  let result = await db.collection("goods").find().toArray();

  return (
    <div className="list-bg">
      {result.map((goods, i) => (
        <div className="list-item" key={i}>
          <Link href={"shop/detail/" + goods._id} prefetch={false}>
            <h4>{goods.product_name}</h4>
          </Link>
          <p>{goods.product_price}</p>
          <p>{goods.product_description}</p>
        </div>
      ))}
    </div>
  );
}
