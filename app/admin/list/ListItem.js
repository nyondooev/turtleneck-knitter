"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

export default function ListItem({ result }) {
  let router = useRouter();
  return (
    <div>
      {result.map((goods, i) => (
        <div className="list-item" key={i}>
          <h4>{goods.product_name}</h4>
          <p>{goods.product_price}</p>
          <p>{goods.product_description}</p>
          <Link href={"edit/" + goods._id}>✏️</Link>
          <span
            onClick={() => {
              fetch("/api/admin/delete", {
                method: "DELETE",
                body: goods._id,
              })
                .then((res) => {
                  return res.json();
                })
                .then((response) => {
                  alert(response);
                  router.refresh();
                });
            }}
          >
            🗑️
          </span>
        </div>
      ))}
    </div>
  );
}
