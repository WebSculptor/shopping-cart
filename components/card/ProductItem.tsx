import Image from "next/image";
import Link from "next/link";
import Ratings from "../shared/Ratings";
import { Button } from "../ui/button";
import AddToCart from "../shared/AddToCart";

export default function ProductItem({ product }: { product: any }) {
  return (
    <div className="group relative">
      <Link href={`/products/${product?.slug}`}>
        <div className="aspect-square w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:h-80">
          <Image
            src={product?.image}
            alt={product?.name}
            className="h-full w-full object-cover lg:h-full lg:w-full"
            priority
            width={300}
            height={300}
          />
        </div>
      </Link>

      <div className="flex flex-col w-full gap-3">
        <div className="mt-4 flex justify-between items-start gap-x-2">
          <div>
            <Link href={`/products/${product?.slug}`}>
              <h3 className="text-lg line-clamp-1">{product?.name}</h3>
            </Link>
            <p className="mt-1 text-base text-muted-foreground">
              {product?.categoryName}
            </p>
          </div>

          <p className="text-lg font-medium">${product?.price}</p>
        </div>

        <AddToCart
          currency="USD"
          description={product?.description}
          price={product?.price}
          image={product?.image}
          name={product?.name}
          price_id={product?.price_id}
        />
      </div>
    </div>
  );
}
