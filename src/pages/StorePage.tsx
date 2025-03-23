import Product from "../components/Product";

const StorePage = () => {
  const products = [
    {
      image: "/sample-product.jpg",
      title: "Sample Product 1",
      price: 19.99,
      description: "This is an amazing product.",
    },
    {
      image: "/sample-product.jpg",
      title: "Sample Product 2",
      price: 29.99,
      description: "Another great item.",
    },
    {
      image: "/sample-product.jpg",
      title: "Sample Product 3",
      price: 39.99,
      description: "You need this product!",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-10">
      <h1 className="text-3xl font-bold text-center mb-6">Store</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 ">
        {products.map((product, index) => (
          <Product key={index} {...product} />
        ))}
      </div>
    </div>
  );
};

export default StorePage;
