import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

export const GlobalContainer = createGlobalStyle`
  ${normalize}
  header, main{
  @media (min-width: 576px) {
    max-width: 540px;
  }
  @media (min-width: 768px) {
    max-width: 720px;
  }
  @media (min-width: 992px) {
    max-width: 960px;
  }
  @media (min-width: 1200px) {
    max-width: 1140px;
  }
  @media (min-width: 1400px) {
    max-width: 1320px;
  }
  margin-left: auto;
  margin-right: auto;
  padding-left: 0.75rem;
  padding-right: 0.75rem;
  width: 100%;
  }
`;

export const Color = {
  pink: "#ff2f6e",
  darkGray: "#353535",
  middleGray: "#74747B",
  black: "#292A32",
};