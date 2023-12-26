export type CartSliceProps = {
  items: Product[];
};

type Product = {
  id: number;
  description: string;
  image: string;
  name: string;
  price: number;
  quantity: number;
  tags: string[];
};
