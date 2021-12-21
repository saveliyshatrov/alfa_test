import React from "react";

import { FooterStyles, Url } from "../common-components";

import { TFooterProps } from "./types";

export default function Footer({ title, link }: TFooterProps): JSX.Element {
  return (
    <FooterStyles>
      <Url href={link}>{title}</Url>
    </FooterStyles>
  );
}
