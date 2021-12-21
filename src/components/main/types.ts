export type TMainProps = {
  toggleLiked(id: number): void;
  showOnlyLiked: boolean;
  liked: number[];
};
