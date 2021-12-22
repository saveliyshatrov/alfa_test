import React, { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";

import Card from "../card";
import { Button, MainStyled, PleaseWait } from "../common-components";

import { deleteDataRequest, getDataRequest } from "../../reducers/actions";

import { TMainProps } from "./types";
import { TProduct, TState } from "../../reducers/types";
import { RootState } from "../../index";

const selectPending = (state: TState) => state.isPending;

export default function Main({
  toggleLiked,
  showOnlyLiked,
  liked,
}: TMainProps): JSX.Element {
  const products: TProduct[] = useSelector<RootState, TProduct[]>(
    (state) => state.products
  );
  const isPending = useSelector<RootState, boolean>(selectPending);
  const dispatch = useDispatch();

  return useMemo(() => {
    if (isPending && products.length === 0) {
      return <PleaseWait>Please wait...</PleaseWait>;
    }
    if (!isPending && products.length === 0) {
      return (
        <PleaseWait>
          <Button onClick={() => dispatch(getDataRequest(20))}>
            download 20 more
          </Button>
        </PleaseWait>
      );
    }
    return (
      <MainStyled>
        {products.map((elem, index) => {
          const isLiked = liked.includes(elem.id);
          if (showOnlyLiked) {
            if (!isLiked) {
              return null;
            }
          }
          return (
            <Card
              description={elem.description}
              url={elem.image}
              likeActive={isLiked}
              onLike={() => toggleLiked(elem.id)}
              onRemove={() => {
                dispatch(deleteDataRequest(elem.id));
                isLiked && toggleLiked(elem.id);
              }}
              key={index}
            />
          );
        })}
      </MainStyled>
    );
  }, [isPending, products, toggleLiked, showOnlyLiked, liked, dispatch]);
}
