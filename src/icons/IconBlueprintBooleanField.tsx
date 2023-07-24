import React, { FC } from "react";
import { IIconSize } from "../utils/types";
import { SIconBase } from "./styles/SIconBase";

const IconSize = {
  16: (
    <SIconBase width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M5.33366 3.33337H10.667C13.2443 3.33337 15.3337 5.42271 15.3337 8.00004C15.3337 10.5774 13.2443 12.6667 10.667 12.6667H5.33366C2.75633 12.6667 0.666992 10.5774 0.666992 8.00004C0.666992 5.42271 2.75633 3.33337 5.33366 3.33337ZM10.667 10C11.7716 10 12.667 9.10464 12.667 8.00004C12.667 6.89544 11.7716 6.00004 10.667 6.00004C9.56239 6.00004 8.66699 6.89544 8.66699 8.00004C8.66699 9.10464 9.56239 10 10.667 10Z"
        fill="currentColor"
      />
    </SIconBase>
  ),
  20: (
    <SIconBase width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M6.99935 4.16663H13.666C16.8877 4.16663 19.4993 6.7783 19.4993 9.99996C19.4993 13.2216 16.8877 15.8333 13.666 15.8333H6.99935C3.77769 15.8333 1.16602 13.2216 1.16602 9.99996C1.16602 6.7783 3.77769 4.16663 6.99935 4.16663ZM13.666 12.5C15.0468 12.5 16.166 11.3807 16.166 9.99996C16.166 8.61921 15.0468 7.49996 13.666 7.49996C12.2853 7.49996 11.166 8.61921 11.166 9.99996C11.166 11.3807 12.2853 12.5 13.666 12.5Z"
        fill="currentColor"
      />
    </SIconBase>
  ),
  24: (
    <SIconBase width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M8.66699 5H16.667C20.533 5 23.667 8.13401 23.667 12C23.667 15.866 20.533 19 16.667 19H8.66699C4.801 19 1.66699 15.866 1.66699 12C1.66699 8.13401 4.801 5 8.66699 5ZM16.667 15C18.3239 15 19.667 13.6569 19.667 12C19.667 10.3431 18.3239 9 16.667 9C15.0101 9 13.667 10.3431 13.667 12C13.667 13.6569 15.0101 15 16.667 15Z"
        fill="currentColor"
      />
    </SIconBase>
  ),

  32: (
    <SIconBase width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M10.6663 6.66663H21.333C26.4877 6.66663 30.6663 10.8453 30.6663 16C30.6663 21.1546 26.4877 25.3333 21.333 25.3333H10.6663C5.51169 25.3333 1.33301 21.1546 1.33301 16C1.33301 10.8453 5.51169 6.66663 10.6663 6.66663ZM21.333 20C23.5422 20 25.333 18.2092 25.333 16C25.333 13.7908 23.5422 12 21.333 12C19.1238 12 17.333 13.7908 17.333 16C17.333 18.2092 19.1238 20 21.333 20Z"
        fill="currentColor"
      />
    </SIconBase>
  ),
};

export const IconBlueprintBooleanField: FC<IIconSize> = ({ size = 20 }) => IconSize[size];