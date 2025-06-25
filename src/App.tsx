// App.tsx
import { useEffect, useState } from "react";
import ProductList from "./components/ProductList";
import ProductForm from "./components/ProductForm";

type Product = {
  id: number;
  name: string;
  quantity: number;
  category: string;
};

function App() {
  const [products, setProducts] = useState<Product[]>([
    { id: 1, name: "Süt", quantity: 2, category: "Gıda" },
    { id: 2, name: "Bulaşık Deterjanı", quantity: 1, category: "Temizlik" },
  ]);

  useEffect(() => {
    const storedProducts = localStorage.getItem("products");
    if (storedProducts) {
      setProducts(JSON.parse(storedProducts));
    }
  }, []);

  const handleAddProduct = (newProduct: Product) => {
    const updatedProducts = [...products, newProduct];
    setProducts(updatedProducts);
    localStorage.setItem("products", JSON.stringify(updatedProducts));
  };

  const handleDeleteProduct = (id: number) => {
    const updatedProducts = products.filter((product) => product.id !== id);
    setProducts(updatedProducts);
    localStorage.setItem("products", JSON.stringify(updatedProducts));
  };

  return (
    <div className="max-w-xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">🛒 Akıllı Alışveriş Listesi</h1>

      <ProductForm onAddProduct={handleAddProduct} />

      <ProductList products={products} onDelete={handleDeleteProduct} />
    </div>
  );
}

export default App;
