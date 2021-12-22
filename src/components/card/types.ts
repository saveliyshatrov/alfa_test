export type TCardProps = {
  onLike(): void;
  onRemove(): void;
  description: string;
  url: string;
  likeActive: boolean;
};
