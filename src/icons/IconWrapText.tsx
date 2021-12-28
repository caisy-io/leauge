import React, { FC } from "react";
import { SIconBase } from "./styles/SIconBase";
import { IIconSize } from "../utils/types";

const IconSize = {
  12: (
    <SIconBase width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M14.0003 6.33671H10.667" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M14.0003 9.66667H10.667" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M14 2.66667L2 2.66667" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M14 13.3333L2 13.3333" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      <path className="solid-fill transparent-stroke"fillRule="evenodd" clipRule="evenodd" d="M3.10055 9.8C2.90684 9.8 2.7498 9.64296 2.7498 9.44925L2.7498 6.55065C2.7498 6.35694 2.90684 6.1999 3.10055 6.1999L5.99915 6.1999C6.19287 6.1999 6.3499 6.35694 6.3499 6.55065L6.3499 9.44925C6.3499 9.64296 6.19287 9.8 5.99915 9.8H3.10055ZM3.10055 11C2.2441 11 1.5498 10.3057 1.5498 9.44925L1.5498 6.55065C1.5498 5.6942 2.2441 4.9999 3.10055 4.9999L5.99915 4.9999C6.85561 4.9999 7.5499 5.6942 7.5499 6.55065L7.5499 9.44925C7.5499 10.3057 6.85561 11 5.99915 11H3.10055Z"/>
    </SIconBase> 
  ),
  16: (
    <SIconBase width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M14.0003 6.33671H10.667" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M14.0003 9.66667H10.667" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M14 2.66667L2 2.66667" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M14 13.3333L2 13.3333" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      <path className="solid-fill transparent-stroke"fillRule="evenodd" clipRule="evenodd" d="M3.10055 9.8C2.90684 9.8 2.7498 9.64296 2.7498 9.44925L2.7498 6.55065C2.7498 6.35694 2.90684 6.1999 3.10055 6.1999L5.99915 6.1999C6.19287 6.1999 6.3499 6.35694 6.3499 6.55065L6.3499 9.44925C6.3499 9.64296 6.19287 9.8 5.99915 9.8H3.10055ZM3.10055 11C2.2441 11 1.5498 10.3057 1.5498 9.44925L1.5498 6.55065C1.5498 5.6942 2.2441 4.9999 3.10055 4.9999L5.99915 4.9999C6.85561 4.9999 7.5499 5.6942 7.5499 6.55065L7.5499 9.44925C7.5499 10.3057 6.85561 11 5.99915 11H3.10055Z"/>
    </SIconBase>    
  ),
  20: (
    <SIconBase width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M17.4997 7.88338L13.333 7.88338" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M17.4997 12.0134H13.333" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M17.5 3.33333L2.5 3.33333" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M17.5 16.6667L2.5 16.6667" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path className="solid-fill transparent-stroke"fillRule="evenodd" clipRule="evenodd" d="M3.75513 12.5C3.44164 12.5 3.1875 12.2459 3.1875 11.9324L3.1875 8.06763C3.1875 7.75414 3.44164 7.5 3.75513 7.5L7.61987 7.5C7.93336 7.5 8.1875 7.75414 8.1875 8.06763V11.9324C8.1875 12.2459 7.93336 12.5 7.61987 12.5H3.75513ZM3.75513 14C2.61321 14 1.6875 13.0743 1.6875 11.9324L1.6875 8.06763C1.6875 6.92571 2.61321 6 3.75513 6L7.61987 6C8.76179 6 9.6875 6.92571 9.6875 8.06763V11.9324C9.6875 13.0743 8.76179 14 7.61987 14H3.75513Z"/>
    </SIconBase>   
  ),
  24: (
    <SIconBase width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M21 9.5H16" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M21 14.5H16" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M21 4L3 4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M21 20L3 20" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path className="solid-fill transparent-stroke"fillRule="evenodd" clipRule="evenodd" d="M4.76035 15.5001C4.16136 15.5001 3.67578 15.0145 3.67578 14.4156L3.67578 9.58459C3.67578 8.9856 4.16136 8.50002 4.76035 8.50002L9.59131 8.50002C10.1903 8.50002 10.6759 8.9856 10.6759 9.58459L10.6759 14.4156C10.6759 15.0145 10.1903 15.5001 9.59131 15.5001H4.76035ZM4.76035 17.0001C3.33293 17.0001 2.17578 15.843 2.17578 14.4156L2.17578 9.58459C2.17578 8.15717 3.33293 7.00002 4.76035 7.00002L9.59131 7.00002C11.0187 7.00002 12.1759 8.15717 12.1759 9.58459L12.1759 14.4156C12.1759 15.843 11.0187 17.0001 9.59131 17.0001H4.76035Z"/>
    </SIconBase>
  ),
  28: (
    <SIconBase width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M21 9.5H16" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M21 14.5H16" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M21 4L3 4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M21 20L3 20" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path className="solid-fill transparent-stroke"fillRule="evenodd" clipRule="evenodd" d="M4.76035 15.5001C4.16136 15.5001 3.67578 15.0145 3.67578 14.4156L3.67578 9.58459C3.67578 8.9856 4.16136 8.50002 4.76035 8.50002L9.59131 8.50002C10.1903 8.50002 10.6759 8.9856 10.6759 9.58459L10.6759 14.4156C10.6759 15.0145 10.1903 15.5001 9.59131 15.5001H4.76035ZM4.76035 17.0001C3.33293 17.0001 2.17578 15.843 2.17578 14.4156L2.17578 9.58459C2.17578 8.15717 3.33293 7.00002 4.76035 7.00002L9.59131 7.00002C11.0187 7.00002 12.1759 8.15717 12.1759 9.58459L12.1759 14.4156C12.1759 15.843 11.0187 17.0001 9.59131 17.0001H4.76035Z"/>
    </SIconBase>
  ),
  32: (
    <SIconBase width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M27.6667 12.3333H21" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M27.6667 19.6474H21" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M28 5.33337L4 5.33337" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M28 26.6667L4 26.6667" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path className="solid-fill transparent-stroke"fillRule="evenodd" clipRule="evenodd" d="M7.00185 20.2C6.28307 20.2 5.70039 19.6173 5.70039 18.8985L5.70039 13.1014C5.70039 12.3826 6.28307 11.8 7.00185 11.8L12.799 11.8C13.5178 11.8 14.1004 12.3826 14.1004 13.1014L14.1004 18.8985C14.1004 19.6173 13.5178 20.2 12.799 20.2H7.00185ZM7.00185 22C5.28896 22 3.90039 20.6114 3.90039 18.8985L3.90039 13.1014C3.90039 11.3885 5.28896 9.99995 7.00185 9.99995L12.799 9.99995C14.5119 9.99995 15.9004 11.3885 15.9004 13.1014L15.9004 18.8985C15.9004 20.6114 14.5119 22 12.799 22H7.00185Z"/>
    </SIconBase>
  ),
  36: (
    <SIconBase width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M27.6667 12.3333H21" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M27.6667 19.6474H21" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M28 5.33337L4 5.33337" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M28 26.6667L4 26.6667" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path className="solid-fill transparent-stroke"fillRule="evenodd" clipRule="evenodd" d="M7.00185 20.2C6.28307 20.2 5.70039 19.6173 5.70039 18.8985L5.70039 13.1014C5.70039 12.3826 6.28307 11.8 7.00185 11.8L12.799 11.8C13.5178 11.8 14.1004 12.3826 14.1004 13.1014L14.1004 18.8985C14.1004 19.6173 13.5178 20.2 12.799 20.2H7.00185ZM7.00185 22C5.28896 22 3.90039 20.6114 3.90039 18.8985L3.90039 13.1014C3.90039 11.3885 5.28896 9.99995 7.00185 9.99995L12.799 9.99995C14.5119 9.99995 15.9004 11.3885 15.9004 13.1014L15.9004 18.8985C15.9004 20.6114 14.5119 22 12.799 22H7.00185Z"/>
    </SIconBase>
  ),
  40: (
    <SIconBase width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M27.6667 12.3333H21" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M27.6667 19.6474H21" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M28 5.33337L4 5.33337" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M28 26.6667L4 26.6667" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path className="solid-fill transparent-stroke"fillRule="evenodd" clipRule="evenodd" d="M7.00185 20.2C6.28307 20.2 5.70039 19.6173 5.70039 18.8985L5.70039 13.1014C5.70039 12.3826 6.28307 11.8 7.00185 11.8L12.799 11.8C13.5178 11.8 14.1004 12.3826 14.1004 13.1014L14.1004 18.8985C14.1004 19.6173 13.5178 20.2 12.799 20.2H7.00185ZM7.00185 22C5.28896 22 3.90039 20.6114 3.90039 18.8985L3.90039 13.1014C3.90039 11.3885 5.28896 9.99995 7.00185 9.99995L12.799 9.99995C14.5119 9.99995 15.9004 11.3885 15.9004 13.1014L15.9004 18.8985C15.9004 20.6114 14.5119 22 12.799 22H7.00185Z"/>
    </SIconBase>
  ),
  48: (
    <SIconBase width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M27.6667 12.3333H21" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M27.6667 19.6474H21" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M28 5.33337L4 5.33337" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M28 26.6667L4 26.6667" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path className="solid-fill transparent-stroke"fillRule="evenodd" clipRule="evenodd" d="M7.00185 20.2C6.28307 20.2 5.70039 19.6173 5.70039 18.8985L5.70039 13.1014C5.70039 12.3826 6.28307 11.8 7.00185 11.8L12.799 11.8C13.5178 11.8 14.1004 12.3826 14.1004 13.1014L14.1004 18.8985C14.1004 19.6173 13.5178 20.2 12.799 20.2H7.00185ZM7.00185 22C5.28896 22 3.90039 20.6114 3.90039 18.8985L3.90039 13.1014C3.90039 11.3885 5.28896 9.99995 7.00185 9.99995L12.799 9.99995C14.5119 9.99995 15.9004 11.3885 15.9004 13.1014L15.9004 18.8985C15.9004 20.6114 14.5119 22 12.799 22H7.00185Z"/>
    </SIconBase>
  ),
};

export const IconWrapText: FC<IIconSize> = ({ size = 24 }) => IconSize[size];
