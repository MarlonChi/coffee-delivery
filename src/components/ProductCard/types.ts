export type ProductCardProps = {
  product: Product;
};

type Product = {
  name: string;
  image: string;
  tags: string[];
  description: string;
  price: number;
};
