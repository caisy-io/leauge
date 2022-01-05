import React, { FC } from "react";
import { SIconBase } from "./styles/SIconBase";
import { IIconSize } from "../utils/types";

const IconSize = {
  12: (
    <SIconBase width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4.66529 13.3357C3.74443 13.3357 2.99793 12.5892 2.99793 11.6683V9.66747C2.99793 9.22526 2.82226 8.80116 2.50957 8.48847C2.19688 8.17577 1.77278 8.00011 1.33057 8.00011C1.77278 8.00011 2.19688 7.82444 2.50957 7.51175C2.82226 7.19906 2.99793 6.77496 2.99793 6.33275V4.33191C2.99793 3.41105 3.74443 2.66455 4.66529 2.66455" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M11.3345 2.66455C12.2553 2.66455 13.0018 3.41105 13.0018 4.33191V6.33275C13.0018 7.2536 13.7483 8.00011 14.6692 8.00011C13.7483 8.00011 13.0018 8.74661 13.0018 9.66747V11.6683C13.0018 12.5892 12.2553 13.3357 11.3345 13.3357" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M5.78235 8.05466C5.78235 8.03625 5.76742 8.02132 5.749 8.02132C5.73058 8.02132 5.71565 8.03625 5.71565 8.05466C5.71565 8.07308 5.73058 8.08801 5.749 8.08801C5.76742 8.08801 5.78235 8.07308 5.78235 8.05466" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M8.03332 8.0488C8.03332 8.03039 8.01839 8.01546 7.99998 8.01546C7.98156 8.01546 7.96663 8.03039 7.96663 8.0488C7.96663 8.06722 7.98156 8.08215 7.99998 8.08215C8.01839 8.08215 8.03332 8.06722 8.03332 8.0488" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M10.0343 8.0488C10.0343 8.03039 10.0194 8.01546 10.001 8.01546C9.98254 8.01546 9.96761 8.03039 9.96761 8.0488C9.96761 8.06722 9.98254 8.08215 10.001 8.08215C10.0194 8.08215 10.0343 8.06722 10.0343 8.0488" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
  16: (
    <SIconBase width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4.66529 13.3357C3.74443 13.3357 2.99793 12.5892 2.99793 11.6683V9.66747C2.99793 9.22526 2.82226 8.80116 2.50957 8.48847C2.19688 8.17577 1.77278 8.00011 1.33057 8.00011C1.77278 8.00011 2.19688 7.82444 2.50957 7.51175C2.82226 7.19906 2.99793 6.77496 2.99793 6.33275V4.33191C2.99793 3.41105 3.74443 2.66455 4.66529 2.66455" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M11.3345 2.66455C12.2553 2.66455 13.0018 3.41105 13.0018 4.33191V6.33275C13.0018 7.2536 13.7483 8.00011 14.6692 8.00011C13.7483 8.00011 13.0018 8.74661 13.0018 9.66747V11.6683C13.0018 12.5892 12.2553 13.3357 11.3345 13.3357" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M5.78235 8.05466C5.78235 8.03625 5.76742 8.02132 5.749 8.02132C5.73058 8.02132 5.71565 8.03625 5.71565 8.05466C5.71565 8.07308 5.73058 8.08801 5.749 8.08801C5.76742 8.08801 5.78235 8.07308 5.78235 8.05466" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M8.03332 8.0488C8.03332 8.03039 8.01839 8.01546 7.99998 8.01546C7.98156 8.01546 7.96663 8.03039 7.96663 8.0488C7.96663 8.06722 7.98156 8.08215 7.99998 8.08215C8.01839 8.08215 8.03332 8.06722 8.03332 8.0488" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M10.0343 8.0488C10.0343 8.03039 10.0194 8.01546 10.001 8.01546C9.98254 8.01546 9.96761 8.03039 9.96761 8.0488C9.96761 8.06722 9.98254 8.08215 10.001 8.08215C10.0194 8.08215 10.0343 8.06722 10.0343 8.0488" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
  20: (
    <SIconBase width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M5.83149 16.6695C4.68042 16.6695 3.74729 15.7363 3.74729 14.5853V12.0842C3.74729 11.5314 3.5277 11.0013 3.13684 10.6105C2.74598 10.2196 2.21585 10 1.66309 10C2.21585 10 2.74598 9.78043 3.13684 9.38956C3.5277 8.9987 3.74729 8.46857 3.74729 7.91581V5.41477C3.74729 4.2637 4.68042 3.33057 5.83149 3.33057" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M14.168 3.33057C15.319 3.33057 16.2522 4.2637 16.2522 5.41477V7.91581C16.2522 9.06688 17.1853 10 18.3364 10C17.1853 10 16.2522 10.9331 16.2522 12.0842V14.5853C16.2522 15.7363 15.319 16.6695 14.168 16.6695" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M7.22757 10.0682C7.22757 10.0452 7.2089 10.0265 7.18588 10.0265C7.16286 10.0265 7.1442 10.0452 7.1442 10.0682C7.1442 10.0912 7.16286 10.1099 7.18588 10.1099C7.2089 10.1099 7.22757 10.0912 7.22757 10.0682" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M10.0415 10.0604C10.0415 10.0374 10.0229 10.0187 9.99985 10.0187C9.97683 10.0187 9.95816 10.0374 9.95816 10.0604C9.95816 10.0834 9.97683 10.1021 9.99985 10.1021C10.0229 10.1021 10.0415 10.0834 10.0415 10.0604" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12.5425 10.0604C12.5425 10.0374 12.5238 10.0187 12.5008 10.0187C12.4778 10.0187 12.4591 10.0374 12.4591 10.0604C12.4591 10.0834 12.4778 10.1021 12.5008 10.1021C12.5238 10.1021 12.5425 10.0834 12.5425 10.0604" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
  24: (
    <SIconBase width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M7.99818 20.0032C6.61689 20.0032 5.49714 18.8835 5.49714 17.5022V14.501C5.49714 13.8376 5.23363 13.2015 4.7646 12.7325C4.29556 12.2634 3.65941 11.9999 2.99609 11.9999C3.65941 11.9999 4.29556 11.7364 4.7646 11.2674C5.23363 10.7983 5.49714 10.1622 5.49714 9.49887V6.49762C5.49714 5.11634 6.61689 3.99658 7.99818 3.99658" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M18.0024 3.99658C19.3837 3.99658 20.5035 5.11634 20.5035 6.49762V9.49887C20.5035 10.8802 21.6232 11.9999 23.0045 11.9999C21.6232 11.9999 20.5035 13.1197 20.5035 14.501V17.5022C20.5035 18.8835 19.3837 20.0032 18.0024 20.0032" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M9.67376 12.0822C9.67376 12.0546 9.65137 12.0322 9.62374 12.0322C9.59612 12.0322 9.57372 12.0546 9.57372 12.0822C9.57372 12.1099 9.59612 12.1323 9.62374 12.1323C9.65137 12.1323 9.67376 12.1099 9.67376 12.0822" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M13.0502 12.073C13.0502 12.0453 13.0278 12.0229 13.0002 12.0229C12.9726 12.0229 12.9502 12.0453 12.9502 12.073C12.9502 12.1006 12.9726 12.123 13.0002 12.123C13.0278 12.123 13.0502 12.1006 13.0502 12.073" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M16.0512 12.073C16.0512 12.0453 16.0288 12.0229 16.0012 12.0229C15.9736 12.0229 15.9512 12.0453 15.9512 12.073C15.9512 12.1006 15.9736 12.123 16.0012 12.123C16.0288 12.123 16.0512 12.1006 16.0512 12.073" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>    
  ),
  28: (
    <SIconBase width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M7.99818 20.0032C6.61689 20.0032 5.49714 18.8835 5.49714 17.5022V14.501C5.49714 13.8376 5.23363 13.2015 4.7646 12.7325C4.29556 12.2634 3.65941 11.9999 2.99609 11.9999C3.65941 11.9999 4.29556 11.7364 4.7646 11.2674C5.23363 10.7983 5.49714 10.1622 5.49714 9.49887V6.49762C5.49714 5.11634 6.61689 3.99658 7.99818 3.99658" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M18.0024 3.99658C19.3837 3.99658 20.5035 5.11634 20.5035 6.49762V9.49887C20.5035 10.8802 21.6232 11.9999 23.0045 11.9999C21.6232 11.9999 20.5035 13.1197 20.5035 14.501V17.5022C20.5035 18.8835 19.3837 20.0032 18.0024 20.0032" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M9.67376 12.0822C9.67376 12.0546 9.65137 12.0322 9.62374 12.0322C9.59612 12.0322 9.57372 12.0546 9.57372 12.0822C9.57372 12.1099 9.59612 12.1323 9.62374 12.1323C9.65137 12.1323 9.67376 12.1099 9.67376 12.0822" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M13.0502 12.073C13.0502 12.0453 13.0278 12.0229 13.0002 12.0229C12.9726 12.0229 12.9502 12.0453 12.9502 12.073C12.9502 12.1006 12.9726 12.123 13.0002 12.123C13.0278 12.123 13.0502 12.1006 13.0502 12.073" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M16.0512 12.073C16.0512 12.0453 16.0288 12.0229 16.0012 12.0229C15.9736 12.0229 15.9512 12.0453 15.9512 12.073C15.9512 12.1006 15.9736 12.123 16.0012 12.123C16.0288 12.123 16.0512 12.1006 16.0512 12.073" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>    
  ),
  32: (
    <SIconBase width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M9.33058 26.6708C7.48886 26.6708 5.99585 25.1778 5.99585 23.3361V19.3344C5.99585 18.45 5.64452 17.6018 5.01914 16.9764C4.39376 16.3511 3.54556 15.9997 2.66113 15.9997C3.54556 15.9997 4.39376 15.6484 5.01914 15.023C5.64452 14.3976 5.99585 13.5494 5.99585 12.665V8.66334C5.99585 6.82162 7.48886 5.32861 9.33058 5.32861" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M22.6694 5.32861C24.5111 5.32861 26.0042 6.82162 26.0042 8.66334V12.665C26.0042 14.5067 27.4972 15.9997 29.3389 15.9997C27.4972 15.9997 26.0042 17.4927 26.0042 19.3344V23.3361C26.0042 25.1778 24.5111 26.6708 22.6694 26.6708" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M11.5647 16.1093C11.5647 16.0725 11.5348 16.0426 11.498 16.0426C11.4612 16.0426 11.4313 16.0725 11.4313 16.1093C11.4313 16.1462 11.4612 16.176 11.498 16.176C11.5348 16.176 11.5647 16.1462 11.5647 16.1093" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M16.0666 16.0971C16.0666 16.0603 16.0368 16.0304 16 16.0304C15.9631 16.0304 15.9333 16.0603 15.9333 16.0971C15.9333 16.134 15.9631 16.1638 16 16.1638C16.0368 16.1638 16.0666 16.134 16.0666 16.0971" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M20.0681 16.0971C20.0681 16.0603 20.0383 16.0304 20.0014 16.0304C19.9646 16.0304 19.9347 16.0603 19.9347 16.0971C19.9347 16.134 19.9646 16.1638 20.0014 16.1638C20.0383 16.1638 20.0681 16.134 20.0681 16.0971" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
  36: (
    <SIconBase width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M9.33058 26.6708C7.48886 26.6708 5.99585 25.1778 5.99585 23.3361V19.3344C5.99585 18.45 5.64452 17.6018 5.01914 16.9764C4.39376 16.3511 3.54556 15.9997 2.66113 15.9997C3.54556 15.9997 4.39376 15.6484 5.01914 15.023C5.64452 14.3976 5.99585 13.5494 5.99585 12.665V8.66334C5.99585 6.82162 7.48886 5.32861 9.33058 5.32861" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M22.6694 5.32861C24.5111 5.32861 26.0042 6.82162 26.0042 8.66334V12.665C26.0042 14.5067 27.4972 15.9997 29.3389 15.9997C27.4972 15.9997 26.0042 17.4927 26.0042 19.3344V23.3361C26.0042 25.1778 24.5111 26.6708 22.6694 26.6708" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M11.5647 16.1093C11.5647 16.0725 11.5348 16.0426 11.498 16.0426C11.4612 16.0426 11.4313 16.0725 11.4313 16.1093C11.4313 16.1462 11.4612 16.176 11.498 16.176C11.5348 16.176 11.5647 16.1462 11.5647 16.1093" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M16.0666 16.0971C16.0666 16.0603 16.0368 16.0304 16 16.0304C15.9631 16.0304 15.9333 16.0603 15.9333 16.0971C15.9333 16.134 15.9631 16.1638 16 16.1638C16.0368 16.1638 16.0666 16.134 16.0666 16.0971" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M20.0681 16.0971C20.0681 16.0603 20.0383 16.0304 20.0014 16.0304C19.9646 16.0304 19.9347 16.0603 19.9347 16.0971C19.9347 16.134 19.9646 16.1638 20.0014 16.1638C20.0383 16.1638 20.0681 16.134 20.0681 16.0971" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
  40: (
    <SIconBase width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M9.33058 26.6708C7.48886 26.6708 5.99585 25.1778 5.99585 23.3361V19.3344C5.99585 18.45 5.64452 17.6018 5.01914 16.9764C4.39376 16.3511 3.54556 15.9997 2.66113 15.9997C3.54556 15.9997 4.39376 15.6484 5.01914 15.023C5.64452 14.3976 5.99585 13.5494 5.99585 12.665V8.66334C5.99585 6.82162 7.48886 5.32861 9.33058 5.32861" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M22.6694 5.32861C24.5111 5.32861 26.0042 6.82162 26.0042 8.66334V12.665C26.0042 14.5067 27.4972 15.9997 29.3389 15.9997C27.4972 15.9997 26.0042 17.4927 26.0042 19.3344V23.3361C26.0042 25.1778 24.5111 26.6708 22.6694 26.6708" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M11.5647 16.1093C11.5647 16.0725 11.5348 16.0426 11.498 16.0426C11.4612 16.0426 11.4313 16.0725 11.4313 16.1093C11.4313 16.1462 11.4612 16.176 11.498 16.176C11.5348 16.176 11.5647 16.1462 11.5647 16.1093" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M16.0666 16.0971C16.0666 16.0603 16.0368 16.0304 16 16.0304C15.9631 16.0304 15.9333 16.0603 15.9333 16.0971C15.9333 16.134 15.9631 16.1638 16 16.1638C16.0368 16.1638 16.0666 16.134 16.0666 16.0971" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M20.0681 16.0971C20.0681 16.0603 20.0383 16.0304 20.0014 16.0304C19.9646 16.0304 19.9347 16.0603 19.9347 16.0971C19.9347 16.134 19.9646 16.1638 20.0014 16.1638C20.0383 16.1638 20.0681 16.134 20.0681 16.0971" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
  48: (
    <SIconBase width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M9.33058 26.6708C7.48886 26.6708 5.99585 25.1778 5.99585 23.3361V19.3344C5.99585 18.45 5.64452 17.6018 5.01914 16.9764C4.39376 16.3511 3.54556 15.9997 2.66113 15.9997C3.54556 15.9997 4.39376 15.6484 5.01914 15.023C5.64452 14.3976 5.99585 13.5494 5.99585 12.665V8.66334C5.99585 6.82162 7.48886 5.32861 9.33058 5.32861" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M22.6694 5.32861C24.5111 5.32861 26.0042 6.82162 26.0042 8.66334V12.665C26.0042 14.5067 27.4972 15.9997 29.3389 15.9997C27.4972 15.9997 26.0042 17.4927 26.0042 19.3344V23.3361C26.0042 25.1778 24.5111 26.6708 22.6694 26.6708" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M11.5647 16.1093C11.5647 16.0725 11.5348 16.0426 11.498 16.0426C11.4612 16.0426 11.4313 16.0725 11.4313 16.1093C11.4313 16.1462 11.4612 16.176 11.498 16.176C11.5348 16.176 11.5647 16.1462 11.5647 16.1093" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M16.0666 16.0971C16.0666 16.0603 16.0368 16.0304 16 16.0304C15.9631 16.0304 15.9333 16.0603 15.9333 16.0971C15.9333 16.134 15.9631 16.1638 16 16.1638C16.0368 16.1638 16.0666 16.134 16.0666 16.0971" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M20.0681 16.0971C20.0681 16.0603 20.0383 16.0304 20.0014 16.0304C19.9646 16.0304 19.9347 16.0603 19.9347 16.0971C19.9347 16.134 19.9646 16.1638 20.0014 16.1638C20.0383 16.1638 20.0681 16.134 20.0681 16.0971" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
};

export const IconVariablesCode: FC<IIconSize> = ({ size = 24 }) => IconSize[size];
