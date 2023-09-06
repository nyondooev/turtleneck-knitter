export default function New() {
  return (
    <div>
      <h4>글 작성</h4>
      <form action="/api/admin/new" method="POST">
        <input name="product_name" placeholder="상품명"></input>
        <input name="product_price" placeholder="가격"></input>
        <input name="product_description" placeholder="상세설명"></input>
        <button type="submit">버튼</button>
      </form>
    </div>
  );
}
