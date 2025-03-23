interface ProductProps {
  image: string;
  title: string;
  price: number;
  description: string;
}

const Product: React.FC<ProductProps> = ({
  image,
  title,
  price,
  description,
}) => {
  return (
    <div className="bg-white shadow-lg rounded-2xl p-4 w-64">
      <img
        src={image}
        alt={title}
        className="w-full h-40 object-cover rounded-lg"
      />
      <h2 className="text-lg font-semibold mt-2">{title}</h2>
      <p className="text-gray-500 text-sm">{description}</p>
      <div className="flex justify-between items-center mt-3">
        <span className="text-lg font-bold text-blue-600">
          ${price.toFixed(2)}
        </span>
        <button className="bg-blue-600 text-white px-3 py-1 rounded-lg hover:bg-blue-700">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Product;
