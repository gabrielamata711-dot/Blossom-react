import { useEffect, useState } from "react";
import { ItemList } from "../ItemList/ItemList";
import { data } from "react-router-dom";

export const ItemListContainer = () => {
  const [products, setProducts] = useState(null);
  const [errors, setErrors] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/data/products.json")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Error al cargar los productos");
        }

        return res.json();
      })
      .then((data) => setProducts(data))
      .catch((error) => setErrors(error.message))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p>Cargando.</p>;
  if (errors) return <p>{errors}</p>;

  return (
    <main className="shop_main_container">
      <section className="welcome_section">
        <h1 className="welcome_title">Bienvenidos a Blossom Flower</h1>
        <h2 className="welcome_subtitle">Creando Momentos Inolvidables</h2>
      </section>
      <section className="product_section">
        <h3>Productos</h3>
        <ItemList products={products} />
      </section>
    </main>
  );
};
