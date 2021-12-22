import React from "react";

import Icon from "../icons";
import {
  CardStyled,
  ImageStyled,
  ImageWrapper,
  ButtonRow,
  ButtonStyled,
  DescriptionWrapper,
  Description,
} from "../common-components";

import { TCardProps } from "./types";
import * as Colors from "../../constants";

export default function Card({
  onLike,
  onRemove,
  description,
  url,
  likeActive,
}: TCardProps): JSX.Element {
  return (
    <CardStyled>
      <ImageWrapper>
        <ImageStyled url={url} />
      </ImageWrapper>
      <ButtonRow>
        <ButtonStyled onClick={onLike}>
          <Icon fill={likeActive ? Colors.BRAND_RED : undefined}>
            {likeActive ? "filled_heart" : "empty_heart"}
          </Icon>
        </ButtonStyled>
        <ButtonStyled onClick={onRemove}>
          <Icon>trash</Icon>
        </ButtonStyled>
      </ButtonRow>
      <DescriptionWrapper>
        <Description>{description}</Description>
      </DescriptionWrapper>
    </CardStyled>
  );
}
