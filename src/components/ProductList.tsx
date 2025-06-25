// ProductList.tsx
import ProductItem from "./ProductItem";

type Product = {
  id: number;
  name: string;
  quantity: number;
  category: string;
};

type Props = {
  products: Product[];
  onDelete: () => void;
};

export default function ProductList({ products, onDelete }: Props) {
  return (
    <ul className="space-y-2">
      {products.map((product) => (
        <ProductItem
          key={product.id}
          product={product}
          onDelete={() => onDelete(product.id)}
        />
      ))}
    </ul>
  );
}
