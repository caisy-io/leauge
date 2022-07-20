import styled, { css } from "styled-components";
import { CSSProgressiveBody03Medium, CSSProgressiveHighlight } from "../../../constants/styles";
import { MIN_SILVER, MIN_GOLD, MIN_PLATINUM, MIN_DIAMOND } from "../../../constants/styles/mediaquerys";

const Bronze = css`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 16px;
  right: 16px;
`;

const Silver = css``;

const Gold = css``;

const Platinum = css``;

const Diamond = css``;

export const SNotificationCloseButton = styled.div`
  ${Bronze}
  ${MIN_SILVER`${Silver}`};
  ${MIN_GOLD`${Gold}`};
  ${MIN_PLATINUM`${Platinum}`};
  ${MIN_DIAMOND`${Diamond}`};
`;
