const ProductCardSkeleton = () => {
  return (
    <div className="rounded-lg shadow-md p-6 border border-[#EBEBEB] w-full mx-auto animate-pulse">
      {/* Image Placeholder */}
      <div className="mb-4 h-[289px] w-full bg-gray-200 rounded-md"></div>

      {/* Title */}
      <div className="h-5 bg-gray-200 rounded w-2/3 mx-auto mb-2"></div>

      {/* Category */}
      <div className="h-4 bg-gray-200 rounded w-1/2 mx-auto mb-2"></div>

      {/* Price */}
      <div className="h-5 bg-gray-200 rounded w-1/4 mx-auto"></div>
    </div>
  );
};

export default ProductCardSkeleton;
