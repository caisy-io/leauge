import styled, { css } from "styled-components";
import { MIN_SILVER, MIN_GOLD, MIN_PLATINUM, MIN_DIAMOND } from "../../../constants/styles/mediaquerys";

interface ISSelectMultiple {}

const Bronze = css<ISSelectMultiple>`
  padding: 8px 2px 8px 4px;
  border-radius: 6px;
  background-color: var(--neutral-300);
  height: min-content;
  width: max-content;
  display: flex;
  align-items: center;
  max-height: min-content;

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    svg {
      width: 16px;
      height: 16px;
      cursor: pointer;
      transition: transform 200ms;

      &:hover {
        transform: scale(1.5);
      }
    }
  }
`;

const Silver = css<ISSelectMultiple>``;

const Gold = css<ISSelectMultiple>``;

const Platinum = css<ISSelectMultiple>``;

const Diamond = css<ISSelectMultiple>``;

export const SSelectMultiple = styled.div`
  ${Bronze}
  ${MIN_SILVER`${Silver}`};
  ${MIN_GOLD`${Gold}`};
  ${MIN_PLATINUM`${Platinum}`};
  ${MIN_DIAMOND`${Diamond}`};
`;
