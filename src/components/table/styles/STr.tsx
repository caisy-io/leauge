import styled, { css } from "styled-components";
import { MIN_SILVER, MIN_GOLD, MIN_PLATINUM, MIN_DIAMOND } from "../../../constants/styles/mediaquerys";

interface ISTr {}

const Bronze = css<ISTr>`
  display: flex;
  align-items: center;
`;

const Silver = css<ISTr>``;

const Gold = css<ISTr>``;

const Platinum = css<ISTr>``;

const Diamond = css<ISTr>``;

export const STr = styled.div`
  ${Bronze}
  ${MIN_SILVER`${Silver}`};
  ${MIN_GOLD`${Gold}`};
  ${MIN_PLATINUM`${Platinum}`};
  ${MIN_DIAMOND`${Diamond}`};
`;
