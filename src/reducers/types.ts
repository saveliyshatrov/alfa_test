export type TProduct = {
  category: string;
  description: string;
  id: number;
  image: string;
  price: number;
  title: string;
  rating: {
    rate: number;
    count: number;
  };
};

export type TState = {
  products: TProduct[];
  isPending: boolean;
};
