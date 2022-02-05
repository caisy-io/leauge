import styled from "styled-components";
export const SStringHeader = styled.div<{ required: boolean; isOpen: boolean }>`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
`;
