import styled from "styled-components";
import {SScrollbar} from "../../scrollbar/styles/SScrollbar";

const SDatePickerMenuContainer = styled.div<{itemCount?: number }>`
  background-color: var(--ui-01);
  border-radius: 8px;
  overflow: hidden;
  box-sizing: border-box;
  border: 1px solid var(--ui-03);
  box-shadow: var(--box-shadow-strong-pop-elavation);
  position: absolute;
  z-index: 5;
  top: calc(100% + 8px);
  right: 0;
  ${SScrollbar} {
    height: ${({itemCount}) =>( !itemCount || itemCount > 6) ? "150px" : `${itemCount * 24}px}`};
  }
`;

export default SDatePickerMenuContainer;
