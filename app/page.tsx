import ProductItem from "@/components/card/ProductItem";
import MaxWidthContainer from "@/components/shared/MaxWidthContainer";
import { products } from "@/lib/data";

export default function Home() {
  return (
    <MaxWidthContainer className="py-10">
      <h1 className="text-2xl md:text-3xl font-bold">All Products</h1>

      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-10">
        {products.map((product, _key) => (
          <ProductItem product={product} key={_key} />
        ))}
      </div>
    </MaxWidthContainer>
  );
}
