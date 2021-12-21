export type TCardProps = {
  onLike(id: number): void;
  onRemove(): void;
  description: string;
  url: string;
  price: number;
  id: number;
  likeActive: boolean;
};
