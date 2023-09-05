"use client";

import Link from "next/link";

export default function ListItem({ result }) {
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
