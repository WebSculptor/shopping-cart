import ProductItem from "@/components/card/ProductItem";
import { products } from "@/lib/data";

export default async function Product() {
  const data: simplifiedProductTypes[] = products;

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            All our Products
          </h2>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {data.map((product, _key) => (
            <ProductItem product={product} key={_key} />
          ))}
        </div>
      </div>
    </div>
  );
}
