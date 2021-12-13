import styled, { css } from "styled-components";
import { CSSProgressiveBody03Semibold } from "../../../constants/styles/fonts";
import { MIN_SILVER, MIN_GOLD, MIN_PLATINUM, MIN_DIAMOND } from "../../../constants/styles/mediaquerys";

const Bronze = css`
  ${CSSProgressiveBody03Semibold};
  color: var(--text-01);
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 16px;

  cursor: pointer;
  background-color: var(--active-ui-01-1);

  svg {
    transition: transform 150ms;
    transform: rotate(${(props) => (props.opened ? "90deg" : 0)});
  }
`;

const Silver = css``;

const Gold = css``;

const Platinum = css``;

const Diamond = css``;

export const STranslationMenuHeader = styled.div`
  ${Bronze}
  ${MIN_SILVER`${Silver}`};
  ${MIN_GOLD`${Gold}`};
  ${MIN_PLATINUM`${Platinum}`};
  ${MIN_DIAMOND`${Diamond}`};
`;
