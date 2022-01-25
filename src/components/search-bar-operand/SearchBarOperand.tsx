import React from 'react';
import { SSearchBarOperand } from './styles/SSearchBarOperand';
import { SSearchBarOperandLabel } from './styles/SSearchBarOperandLabel';

export interface ISearchBarOperandProps {
  hover?: boolean;
  activated?: boolean;
  children?
}

export const SearchBarOperand: React.FC<ISearchBarOperandProps> = ({  hover, activated, children }) => {
  return (
    <SSearchBarOperand hover={hover} activated={activated}>
      {children}
    </SSearchBarOperand>
  )
}
