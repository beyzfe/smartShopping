// src/components/ProductForm.tsx
import { useState } from "react";

type Product = {
  id: number;
  name: string;
  quantity: number;
  category: string;
};

type Props = {
  onAddProduct: (newProduct: Product) => void;
};

export default function ProductForm({ onAddProduct }: Props) {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("Gıda");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!name.trim()) return;

    const newProduct: Product = {
      id: Date.now(),
      name,
      quantity,
      category,
    };

    onAddProduct(newProduct);

    // Formu sıfırla
    setName("");
    setQuantity(1);
    setCategory("Gıda");
  };

  return (
    <form onSubmit={handleSubmit} className="mb-6 space-y-4">
      <div>
        <label className="block text-sm font-medium">Ürün Adı</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="mt-1 w-full border px-3 py-2 rounded"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium">Adet</label>
        <input
          type="number"
          min="1"
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
          className="mt-1 w-full border px-3 py-2 rounded"
        />
      </div>

      <div>
        <label className="block text-sm font-medium">Kategori</label>
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="mt-1 w-full border px-3 py-2 rounded"
        >
          <option value="Gıda">Gıda</option>
          <option value="Temizlik">Temizlik</option>
          <option value="İçecek">İçecek</option>
          <option value="Kırtasiye">Kırtasiye</option>
        </select>
      </div>

      <button
        type="submit"
        className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 cursor-pointer transition-colors"
      >
        Ürünü Ekle
      </button>
    </form>
  );
}
