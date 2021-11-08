import React from 'react';
import { SSearchBarOperand } from './styles/SSearchBarOperand';
export type ISearchBarOperandType = "default" | "hover" | "active";

export interface ISearchBarOperandProps {
  hover?: boolean;
  active?: boolean;
}

export const SearchBarOperand: React.FC<ISearchBarOperandProps> = ({ ...props }) => {
  return (
    <SSearchBarOperand {...props}>
      {props.children}
    </SSearchBarOperand>
  )
}
