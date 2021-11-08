import React from 'react';
import {SSearchBarOperandEntity} from './styles/SSearchBarOperandEntity';
export type ISearchBarOperandType = "default" | "hover" | "active";

interface ISearchBarOperand{
  type?: ISearchBarOperandType;
}

export const SearchBarOperandEntity: React.FC<ISearchBarOperand> = ({...props}) => {
  return (
    <SSearchBarOperandEntity {...props}>
      {props.children}
    </SSearchBarOperandEntity>
  )
}
