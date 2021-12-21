import React from "react";
import { TIconProps } from "./types";
import Trash from "./trash-icon";
import EmptyHeart from "./empty-heart";
import FilledHeart from "./filled-heart";

export default function Icon({ children, fill }: TIconProps): JSX.Element {
  switch (children) {
    case "trash":
      return <Trash fill={fill} />;
    case "empty_heart":
      return <EmptyHeart fill={fill} />;
    case "filled_heart":
      return <FilledHeart fill={fill} />;
    default:
      return <></>;
  }
}
