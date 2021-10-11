import styled from "styled-components";

export const SSearchWrapper = styled.div`
  position: relative;
  padding: 0px 50px;
  display: grid;
  grid-auto-columns: min-content auto min-content;
  /* display: flex; */
  /* justify-content: left; */
  /* align-items: center; */

  border-radius: 6px;
  height: 60px;
  background-color: white;
  .dropdown-visible {
    transform: scale(1);
    opacity: 1;
    transition: all 0.2s;
  }

  .dropdown-invisible {
    transform: scale(0);
    opacity: 0;
    transition: all 0.2s;
  }

  .inputWrapper {
    width: 400px;
    grid-row: 1;
    grid-column: auto;
  }
`;

export const SInput = styled.input`
  width: 100%;
  height: 60px;
  border-radius: 6px;
  font-size: 16px;
  border: none;
  margin: 0px 10px;
  &:disabled {
    background-color: white;
  }
`;

export const SSearchIcon = styled.div`
  svg {
    position: absolute;
    left: 20px;
    top: 20px;
  }
`;

export const SDropdownSearch = styled.div<{ isInputFocus: boolean; dropDownIndent?: number }>`
  position: absolute;
  background-color: white;
  top: 65px;
  min-height: auto;
  width: 240px;
  padding-bottom: 8px;
  border-radius: 4px;
  left: ${(props) => (props.dropDownIndent ? props.dropDownIndent + 20 : 60)}px;
  max-height: 300px;
  transition: left 0.2s;
  z-index: 9;
  overflow-y: auto;
  box-shadow: rgba(0, 0, 0, 0.08) 0px 8px 10px;

  .dropdown-option-invisible,
  .title-invisible {
    transform: scale(0);
    height: 0px;
    opacity: 0;
    transition: height 0.2s;
    transition-timing-function: cubic-bezier(0.645, 0.045, 0.355, 0.045);
  }

  .dropdown-option-visible,
  .title-visible {
    opacity: 1;
    height: 30px;
    transform: scale(1);
    transition: height 0.2s;
    transition-timing-function: cubic-bezier(0.045, 0.355, 0.045, 0.645);

    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    display: block;
  }

  .search-option-disable {
    pointer-events: none;
    color: var(--text-priority-4);
  }

  .search-btn {
    cursor: pointer;
  }

  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-thumb {
    background: var(--text-priority-4);
    border-radius: 3px;
  }

  &::-webkit-scrollbar-track {
    padding: 20% 0;
  }

  .current-selection {
    background-color: var(--blue-100);
    color: var(--blue-blue);
  }
`;

export const SOptionHeader = styled.h3`
  margin: 15px 0 5px 20px;
  text-transform: uppercase;
  font-size: 11px;
  color: var(--text-priority-4);
`;

export const SFilterInput = styled.input`
  font-size: 16px;
  height: 30px;
  border: 1px solid var(--blue-100);
  background: var(--blue-50);
  min-width: 54px;
  padding: 0 12px;
  color: var(--black-black);
  border-radius: 4px;
  width: calc(100% - 24px);
`;

export const SDropdownOption = styled.p`
  color: var(--black-black);
  height: 30px;
  /*display: flex;*/
  align-items: center;
  padding: 0 16px;
  font-size: 14px;
  transition: 0.2s;
  -moz-user-select: none;
  -khtml-user-select: none;
  -webkit-user-select: none;

  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  display: block;

  &:hover {
    color: var(--blue-blue);
    background-color: var(--blue-100);
  }
`;

export const SIndicatorsIcons = styled.div`
  /* position: absolute; */
  justify-self: flex-end;
  grid-row: 1;
  grid-column: auto;
  right: 20px;
  height: 60px;
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  justify-content: space-evenly;
  *:not(:first-child) {
    margin-right: 12px;
  }
`;

export const SFilterIcon = styled.div<{ isInputFocus: boolean }>`
  display: flex;
  align-items: center;
  cursor: pointer;
  svg {
    .filter-icon-path {
      transition: 0.2s;
      stroke: none;
    }
    path {
      fill: ${(props) => (props.isInputFocus ? "var(--blue-blue)" : "var(--blue-100)")};
      stroke: ${(props) => (props.isInputFocus ? "white" : "var(--blue-blue)")};
    }
  }
  &:hover svg {
    path {
      fill: var(--blue-blue);
      stroke: white;
    }
  }
`;

export const SSaveViewButton = styled.div`
  background-color: var(--blue-100);
  cursor: pointer;
  display: flex;
  padding: 5px 10px;
  border-radius: 4px;
  height: 30px;
  transition: all 0.2s;

  span {
    font-size: 12px;
    font-weight: bold;
    color: var(--blue-blue);
  }

  &:hover {
    background-color: var(--blue-blue);
    span {
      color: #fff;
    }
    svg {
      path {
        stroke: white;
      }
    }
  }
`;

export const SSearchFilteredOptions = styled.div<{ isFilteredActive?: boolean }>`
  display: ${(props) => (props.isFilteredActive ? "flex" : "none")};
  position: relative;
  align-items: center;

  justify-content: space-evenly;
  padding: 3px;
  span {
    white-space: nowrap;
    font-size: 16px;
    padding: 0 12px;
    height: 30px;
    color: var(--black-black);
    border: 1px solid var(--blue-100);
    border-radius: 4px;
  }
  .input {
    white-space: nowrap;
    border: 1px solid #ccc;
    font-family: inherit;
    font-size: inherit;
    padding: 1px 6px;
  }
`;

export const SSearchFilterWrapper = styled.div`
  display: flex;
  justify-content: left;
  align-items: center;
  grid-row: 1;
  grid-column: 1;
`;

export const SFilterButton = styled.div`
  background-color: var(--blue-blue);
  color: #fff;
  display: flex;
  align-items: center;
  padding: 0px 10px;
  height: 30px;
  font-size: 16px;
  border-radius: 4px;
  text-transform: capitalize;
  margin: 0 12px 0 0;
  cursor: pointer;
`;
