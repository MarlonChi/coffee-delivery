export type ProductCardProps = {
  product: Product;
};

type Product = {
  id: any;
  name: string;
  image: string;
  tags: string[];
  description: string;
  price: number;
};
