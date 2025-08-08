const ProductCard = ({ product }) => {
  return (
    <div className="rounded-lg shadow-md p-6 border border-[#EBEBEB] w-full mx-auto hover:shadow-lg transition duration-300">
      <div className="mb-4">
        <img
          src={product?.thumbnail}
          alt=""
          className="h-[289px] w-full object-cover"
        />
      </div>
      <h3 className="text-center text-lg font-semibold text-gray-900 capitalize">
        {product?.title}
      </h3>
      <p className="text-center text-sm text-gray-400 capitalize">
        {product?.category}
      </p>
      <p className="text-center text-sky-400 text-lg font-semibold mt-2">
        {product?.price}
      </p>
    </div>
  );
};

export default ProductCard;
