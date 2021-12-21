import styled from "styled-components";
import * as Colors from "../../constants";
import { ImageStyledProps, TStyledProps } from "./types";

export const MainStyled = styled.div`
  width: 100vw;
  height: 100%;
  display: grid;
  gap: 10px;
  grid-template-columns: repeat(auto-fit, 19rem);
  justify-content: center;
  grid-auto-flow: dense;
  margin-top: 60px;
  margin-bottom: 60px;
  box-sizing: border-box;
  padding: 20px 0 20px 0;
`;

export const PleaseWait = styled.div`
  width: 100vw;
  height: calc(100vh - 60px);
  margin-top: 60px;
  background-color: #f3f4f5;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CardStyled = styled.div`
  width: 300px;
  height: 400px;
  border-radius: 16px;
  background-color: white;
  margin-top: 5px;
  transition: 200ms;
  :hover {
    box-shadow: 0 1px 7px rgba(0, 0, 0, 0.25);
  }
`;

export const ButtonRow = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  flex-direction: row;
`;

export const ButtonStyled = styled.div`
  width: 50%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  outline: none;
  background-color: transparent;
  border: none;
  transition: 200ms;
  cursor: pointer;
  :hover {
    background-color: lightgrey;
  }
`;

export const ImageStyled = styled.div<ImageStyledProps>`
  width: 50%;
  height: 160px;
  box-sizing: border-box;
  background: ${(props) => `url(${props.url}) no-repeat 100% 50% / contain`};
`;

export const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  box-sizing: border-box;
  padding: 20px;
`;

export const Description = styled.div`
  text-overflow: ellipsis;
  overflow: hidden;
  -webkit-line-clamp: 6;
  -webkit-box-orient: vertical;
  white-space: normal;
  max-height: 150px;
  display: -webkit-box;
  color: #6d7986;
`;

export const DescriptionWrapper = styled.div`
  box-sizing: border-box;
  padding: 20px;
`;

export const HeaderStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 60px;
  background-color: #ef3124;
  padding: 20px;
  box-sizing: border-box;
  color: white;
  position: fixed;
  top: 0;
  left: 0;
`;

export const Button = styled.button<TStyledProps>`
  background-color: ${(props) => (props.checked ? "white" : Colors.BRAND_RED)};
  color: ${(props) => (props.checked ? Colors.PRIMARY_TEXT : "white")};
  padding: 10px;
  border-radius: 5px;
  border: 1px solid white;
  transition: 200ms;
  cursor: pointer;
  :hover {
    background-color: white;
    color: ${Colors.PRIMARY_TEXT};
  }
`;

export const Url = styled.a`
  text-decoration: none;
  color: white;
`;

export const FooterStyles = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #0b1f35;
  position: fixed;
  bottom: 0;
  left: 0;
`;
