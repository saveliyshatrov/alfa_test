import React from "react";

import { HeaderStyled } from "../common-components";

import { THeaderProps } from "./types";

export default function Header({
  title = "header",
  children,
}: THeaderProps): JSX.Element {
  return (
    <HeaderStyled>
      {title}
      <span>{children}</span>
    </HeaderStyled>
  );
}
