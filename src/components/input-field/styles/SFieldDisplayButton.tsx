import styled from "styled-components";
export const SFieldDisplayButton = styled.div<{ required: boolean; isOpen: boolean }>`
  align-self: baseline;

  svg {
    transition: transform 0.2s ease-in-out;

    ${({ isOpen }) =>
      isOpen &&
      `
        transform: rotate(-180deg);
      `}
  }
`;
