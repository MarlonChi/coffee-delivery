export type ProductCardProps = {
  product: Product;
  id: number;
};

type Product = {
  id: number;
  name: string;
  image: string;
  tags: string[];
  description: string;
  price: number;
};
