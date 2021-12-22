import React, { useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import Header from "./components/header";
import Main from "./components/main";
import { Button } from "./components/common-components";
import Footer from "./components/footer";

import { getDataRequest } from "./reducers/actions";

import "./App.css";

export default function App(): JSX.Element {
  const dispatch = useDispatch();
  const [liked, setLiked] = useState<number[]>([]);
  const [showOnlyLiked, setShowLiked] = useState<boolean>(false);

  const toggleLiked = useCallback(
    (id: number) => {
      if (liked.includes(id)) {
        setLiked(liked.filter((elem) => elem !== id));
        return;
      }
      setLiked([...liked, id]);
      return;
    },
    [liked]
  );

  const toggleShowLiked = useCallback(() => {
    setShowLiked(!showOnlyLiked);
  }, [showOnlyLiked]);

  useEffect(() => {
    //Максимальное количество предметов 20
    dispatch(getDataRequest(20));
  }, [dispatch]);
  return (
    <>
      <Header title={"Alfa test task"}>
        <Button checked={showOnlyLiked} onClick={toggleShowLiked}>
          Liked
        </Button>
      </Header>
      <Main
        toggleLiked={toggleLiked}
        showOnlyLiked={showOnlyLiked}
        liked={liked}
      />
      <Footer
        title={"View on Github"}
        link={"https://github.com/saveliyshatrov/alfa_test"}
      />
    </>
  );
}
