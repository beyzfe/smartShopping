// ProductItem.tsx
type Product = {
  id: number;
  name: string;
  quantity: number;
  category: string;
};

type Props = {
  product: Product;
    onDelete: () => void;
};

export default function ProductItem({ product, onDelete }: Props) {
  return (
    <li className="border p-3 rounded-md shadow flex justify-between items-center">
      <div>
        <p className="font-semibold">{product.name}</p>
        <p className="text-sm text-gray-600">
          {product.quantity} adet • {product.category}
        </p>
      </div>

      <button
        onClick={onDelete}
        className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded cursor-pointer transition-colors"
      >
        Sil
      </button>
    </li>
  );
}
