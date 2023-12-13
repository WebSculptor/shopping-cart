interface productTypes {
  _id: string;
  images: string;
  price: number;
  slug: string;
  categoryName: string;
  name: string;
  description: string;
  price_id: string;
}

interface simplifiedProductTypes {
  _id: string;
  image: any;
  price: number;
  slug: string;
  name: string;
}

interface CartTypes {
  name: string;
  description: string;
  price: number;
  currency: string;
  image: any;
  price_id: string;
}
