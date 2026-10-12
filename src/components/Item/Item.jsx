import "./Item.css";

export const Item = ({ name, price, image, children }) => {
  return (
    <article className="card">
      <img src={image} alt={name} />

      {}
      <div className="card_info_overlay">
        <h3>{name}</h3>
        <p className="product_price">${price}</p>
      </div>

      {children}
    </article>
  );
};
