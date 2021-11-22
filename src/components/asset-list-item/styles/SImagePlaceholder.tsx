import styled, { css } from 'styled-components';
import { MIN_DIAMOND, MIN_GOLD, MIN_PLATINUM, MIN_SILVER } from '../../../constants/styles/mediaquerys';
import { SAssetListItem } from './SAssetListItem';

const CSSIcon = css`
  background-color: var(--ui-03);
`;

const CSSHover = css`
  background-color: var(--ui-02);
  border: 1px solid #E8EFF3;
`;

const CSSHoverIcon = css`
  background-color: var(--hover-ui-03);
`;

const CSSActive = css`
  background-color: var(--ui-02);
  border: 1px solid var(--ui-03);
`;

const CSSActiveIcon = css`
 background-color: var(--ui-03);
`;

const CSSError = css`
  background-color: var(--ui-background);
  color: #C7CAD1;
  border: none;
`;

const Bronze = css`
    width: 40px;
    height: 40px;
    box-sizing: border-box;         
    border-radius: 4px;
    background-color: var(--ui-02);
    border: 1px solid var(--ui-03);
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 0.75rem;
    svg {
      color: #172C55;
    }
    ${(props) => props.icon ? CSSIcon : ''};
    ${(props) => props.error ? CSSError : ''};

    ${SAssetListItem}:hover & {
      ${CSSHover};
      ${(props) => props.icon ? CSSHoverIcon : ''};
      ${(props) => props.error ? CSSError : ''};
    }

    ${SAssetListItem}:active & {
      ${CSSActive};
      ${(props) => props.icon ? CSSActiveIcon : ''};
      ${(props) => props.error ? CSSError : ''};
    }
`;

const Silver = css``;

const Gold = css``;

const Platinum = css``;

const Diamond = css``;

export const SImagePlaceholder = styled.div`
  ${Bronze}
  ${MIN_SILVER`${Silver}`};
  ${MIN_GOLD`${Gold}`}; 
  ${MIN_PLATINUM`${Platinum}`};
  ${MIN_DIAMOND`${Diamond}`};
`;

