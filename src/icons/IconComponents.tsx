import React, { FC } from "react";
import { SIconBase } from "./styles/SIconBase";
import { IIconSize } from "../utils/types";

const IconSize = {
  16: <SIconBase width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path className="transparent-stroke solid-fill" fillRule="evenodd" clipRule="evenodd" d="M6.05138 4.95052C5.66086 4.55999 5.66086 3.92683 6.05138 3.5363L7.29479 2.29289C7.68531 1.90237 8.31848 1.90237 8.709 2.29289L9.95241 3.5363C10.3429 3.92683 10.3429 4.55999 9.95241 4.95052L8.709 6.19392C8.31848 6.58445 7.68531 6.58445 7.29479 6.19392L6.05138 4.95052ZM6.05138 12.4674C5.66086 12.0769 5.66086 11.4437 6.05138 11.0532L7.29479 9.8098C7.68531 9.41928 8.31848 9.41928 8.709 9.8098L9.95241 11.0532C10.3429 11.4437 10.3429 12.0769 9.95241 12.4674L8.709 13.7108C8.31848 14.1014 7.68531 14.1014 7.29479 13.7108L6.05138 12.4674ZM9.8098 8.709C9.41928 8.31848 9.41928 7.68531 9.8098 7.29479L11.0532 6.05138C11.4437 5.66085 12.0769 5.66085 12.4674 6.05138L13.7108 7.29479C14.1014 7.68531 14.1014 8.31848 13.7108 8.709L12.4674 9.95241C12.0769 10.3429 11.4437 10.3429 11.0532 9.95241L9.8098 8.709ZM2.29289 8.709C1.90237 8.31848 1.90237 7.68531 2.29289 7.29479L3.5363 6.05138C3.92683 5.66085 4.55999 5.66085 4.95052 6.05138L6.19393 7.29479C6.58445 7.68531 6.58445 8.31848 6.19393 8.709L4.95052 9.95241C4.55999 10.3429 3.92683 10.3429 3.5363 9.95241L2.29289 8.709Z"/>
      </SIconBase>,
  
  20: <SIconBase width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path className="transparent-stroke solid-fill" fillRule="evenodd" clipRule="evenodd" d="M7.22202 5.77831C6.8315 5.38778 6.8315 4.75462 7.22202 4.36409L9.29323 2.29289C9.68375 1.90237 10.3169 1.90237 10.7074 2.29289L12.7786 4.36409C13.1692 4.75462 13.1692 5.38778 12.7786 5.77831L10.7074 7.84951C10.3169 8.24003 9.68375 8.24003 9.29323 7.84951L7.22202 5.77831ZM7.22202 15.6365C6.8315 15.246 6.8315 14.6128 7.22202 14.2223L9.29323 12.1511C9.68375 11.7606 10.3169 11.7606 10.7074 12.1511L12.7786 14.2223C13.1692 14.6128 13.1692 15.246 12.7786 15.6365L10.7074 17.7077C10.3169 18.0982 9.68375 18.0982 9.29323 17.7077L7.22202 15.6365ZM2.29289 10.7074C1.90237 10.3169 1.90237 9.68375 2.29289 9.29323L4.36409 7.22202C4.75462 6.8315 5.38778 6.8315 5.77831 7.22202L7.84951 9.29323C8.24003 9.68375 8.24003 10.3169 7.84951 10.7074L5.77831 12.7786C5.38778 13.1692 4.75462 13.1692 4.36409 12.7786L2.29289 10.7074ZM12.1511 10.7074C11.7606 10.3169 11.7606 9.68375 12.1511 9.29323L14.2223 7.22202C14.6128 6.8315 15.246 6.8315 15.6365 7.22202L17.7077 9.29323C18.0982 9.68375 18.0982 10.3169 17.7077 10.7074L15.6365 12.7786C15.246 13.1692 14.6128 13.1692 14.2223 12.7786L12.1511 10.7074Z"/>
      </SIconBase>,
  
  24: <SIconBase width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path className="transparent-stroke solid-fill" fillRule="evenodd" clipRule="evenodd" d="M8.3932 6.60648C8.00268 6.21595 8.00268 5.58279 8.3932 5.19226L11.2926 2.29289C11.6831 1.90237 12.3163 1.90237 12.7068 2.29289L15.6062 5.19226C15.9967 5.58279 15.9967 6.21595 15.6062 6.60648L12.7068 9.50585C12.3163 9.89637 11.6831 9.89637 11.2926 9.50585L8.3932 6.60648ZM8.3932 18.8071C8.00268 18.4166 8.00268 17.7834 8.3932 17.3929L11.2926 14.4935C11.6831 14.103 12.3163 14.103 12.7068 14.4935L15.6062 17.3929C15.9967 17.7834 15.9967 18.4166 15.6062 18.8071L12.7068 21.7065C12.3163 22.097 11.6831 22.097 11.2926 21.7065L8.3932 18.8071ZM14.4935 12.7068C14.103 12.3163 14.103 11.6831 14.4935 11.2926L17.3929 8.3932C17.7834 8.00268 18.4166 8.00268 18.8071 8.3932L21.7065 11.2926C22.097 11.6831 22.097 12.3163 21.7065 12.7068L18.8071 15.6062C18.4166 15.9967 17.7834 15.9967 17.3929 15.6062L14.4935 12.7068ZM2.29289 12.7068C1.90237 12.3163 1.90237 11.6831 2.29289 11.2926L5.19226 8.3932C5.58279 8.00268 6.21595 8.00268 6.60648 8.3932L9.50585 11.2926C9.89637 11.6831 9.89637 12.3163 9.50585 12.7068L6.60648 15.6062C6.21595 15.9967 5.58279 15.9967 5.19226 15.6062L2.29289 12.7068Z"/>
      </SIconBase>,

  32: <SIconBase width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path className="transparent-stroke solid-fill" fillRule="evenodd" clipRule="evenodd" d="M11.1507 8.84934C10.7602 8.45882 10.7602 7.82565 11.1507 7.43513L15.2929 3.29289C15.6835 2.90237 16.3166 2.90237 16.7072 3.29289L20.8494 7.43513C21.2399 7.82565 21.2399 8.45882 20.8494 8.84934L16.7072 12.9916C16.3166 13.3821 15.6835 13.3821 15.2929 12.9916L11.1507 8.84934ZM11.1507 24.5653C10.7602 24.1748 10.7602 23.5416 11.1507 23.1511L15.2929 19.0089C15.6835 18.6183 16.3166 18.6183 16.7071 19.0089L20.8494 23.1511C21.2399 23.5416 21.2399 24.1748 20.8494 24.5653L16.7071 28.7075C16.3166 29.0981 15.6835 29.0981 15.2929 28.7075L11.1507 24.5653ZM19.0091 16.7073C18.6186 16.3167 18.6186 15.6836 19.0091 15.2931L23.1513 11.1508C23.5419 10.7603 24.175 10.7603 24.5656 11.1508L28.7078 15.2931C29.0983 15.6836 29.0983 16.3167 28.7078 16.7073L24.5656 20.8495C24.175 21.24 23.5419 21.24 23.1513 20.8495L19.0091 16.7073ZM3.29289 16.7073C2.90237 16.3167 2.90237 15.6836 3.29289 15.2931L7.43513 11.1508C7.82565 10.7603 8.45882 10.7603 8.84934 11.1508L12.9916 15.2931C13.3821 15.6836 13.3821 16.3167 12.9916 16.7073L8.84934 20.8495C8.45882 21.24 7.82565 21.24 7.43513 20.8495L3.29289 16.7073Z"/>
      </SIconBase>
  }

export const IconComponents: FC<IIconSize> = ({ size= 24 }) => IconSize[size];
