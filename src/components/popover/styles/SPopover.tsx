import styled, { css, CSSProp } from "styled-components";
import { MIN_SILVER, MIN_GOLD, MIN_PLATINUM, MIN_DIAMOND } from "../../../constants/styles/mediaquerys";
import Poppable from "../../poppable";

interface ISPopover {
  trianglecolor: string;
  triangleExtraCSS?: CSSProp;
}

const Bronze = css<ISPopover>`
  .poppable-triangle {
    --triangle-color: ${(props) => props.trianglecolor};
    ${(props) => props.triangleExtraCSS && props.triangleExtraCSS}
  }

  animation: loadIn 1ms;

  @keyframes loadIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

const Silver = css<ISPopover>``;

const Gold = css<ISPopover>``;

const Platinum = css<ISPopover>``;

const Diamond = css<ISPopover>``;

export const SPopover = styled(Poppable)<ISPopover>`
  ${Bronze}
  ${MIN_SILVER`${Silver}`};
  ${MIN_GOLD`${Gold}`};
  ${MIN_PLATINUM`${Platinum}`};
  ${MIN_DIAMOND`${Diamond}`};
`;
