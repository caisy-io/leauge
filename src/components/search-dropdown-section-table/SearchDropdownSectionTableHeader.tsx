import React, { MouseEventHandler } from "react";
import { SSearchDropdownSectionTableHeader } from "./styles/SSearchDropdownSectionTableHeader";

interface ISearchDropdownSectionTableHeader {
  onClick?: MouseEventHandler<HTMLDivElement> | undefined;
  children?;
}

export const SearchDropdownSectionTableHeader: React.FC<ISearchDropdownSectionTableHeader> = ({
  onClick,
  children,
}) => {
  return <SSearchDropdownSectionTableHeader onClick={onClick}>{children}</SSearchDropdownSectionTableHeader>;
};
