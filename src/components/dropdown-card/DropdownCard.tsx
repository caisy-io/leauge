import React from 'react';
import {SDropdownCard } from './styles/SDropdownCard';

interface IDropdownCard{
  styleOverwrite?: string;
  children?
}

export const DropdownCard: React.FC<IDropdownCard> = ({styleOverwrite,children}) => {
  return (
    <SDropdownCard styleOverwrite={styleOverwrite}>
      {children}
    </SDropdownCard>
  )
}
