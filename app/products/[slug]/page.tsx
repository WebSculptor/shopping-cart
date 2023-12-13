import AddToCart from "@/components/shared/AddToCart";
import { products } from "@/lib/data";
import { Star, Truck } from "lucide-react";
import Image from "next/image";

export default async function ProductDetails({
  params,
}: {
  params: { slug: string };
}) {
  const { image, name, price, description, price_id }: any = products.find(
    (product) => product.slug === params.slug
  );

  return (
    <div>
      <div className="mx-auto max-w-screen-xl p-4 md:px-8">
        <div className="grid gap-8 md:grid-cols-2">
          <Image
            src={image}
            alt="image"
            className="h-full w-full object-cover object-center cursor-pointer"
            priority
            width={500}
            height={500}
          />

          <div className="md:py-8">
            <div className="mb-1 md:mb-2">
              <h2 className="text-xl font-bold lg:text-3xl">{name}</h2>
            </div>

            <div className="mb-4 flex items-center md:mb-6">
              <span className="text-md mr-2 font-bold">4.5</span>
              <Star className="w-4 h-4 text-yellow-500 mr-1" />
              <Star className="w-4 h-4 text-yellow-500 mr-1" />
              <Star className="w-4 h-4 text-yellow-500 mr-1" />
              <Star className="w-4 h-4 text-yellow-500 mr-1" />
              <Star className="w-4 h-4 text-yellow-500 mr-1" />
            </div>

            <div className="mb-4">
              <div className="flex items-end gap-2">
                <span className="text-xl font-bold md:text-2xl">${price}</span>
                <span className="mb-0.5 text-red-500 line-through">
                  ${price + 30}
                </span>
              </div>

              <span className="text-sm text-muted-foreground">
                Incl. Vat plus shipping
              </span>
            </div>

            <div className="mb-6 flex items-center gap-2 text-muted-foreground">
              <Truck className="w-6 h-6 text-primary/75" />
              <span className="text-sm">3-4 Days Shipping</span>
            </div>

            <div className="flex gap-2.5">
              <AddToCart
                currency="USD"
                description={description}
                price={price}
                image={image}
                name={name}
                price_id={price_id}
              />
            </div>

            <p className="mt-12 text-base text-gray-500 tracking-wide">
              {description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
