import React, { FC } from "react";
import { SIconBase } from "./styles/SIconBase";
import { IIconSize } from "../utils/types";

const IconSize = {
  12: (
    <SIconBase width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path className="solid-fill transparent-stroke" fillRule="evenodd" clipRule="evenodd" d="M4.6665 1.4C3.23056 1.4 2.0665 2.56406 2.0665 4V8.66667C2.0665 8.99804 2.33513 9.26667 2.6665 9.26667C2.99787 9.26667 3.2665 8.99804 3.2665 8.66667V4C3.2665 3.2268 3.89331 2.6 4.6665 2.6H9.0665V4.33333C9.0665 5.40108 9.93209 6.26667 10.9998 6.26667H12.7332V12C12.7332 12.7732 12.1064 13.4 11.3332 13.4H8.6665C8.33513 13.4 8.0665 13.6686 8.0665 14C8.0665 14.3314 8.33513 14.6 8.6665 14.6H11.3332C12.7691 14.6 13.9332 13.4359 13.9332 12V5.67287C13.9332 5.67116 13.9332 5.66946 13.9332 5.66775C13.9332 5.66739 13.9332 5.66703 13.9332 5.66667C13.9332 5.66503 13.9332 5.6634 13.9331 5.66177C13.9302 4.97622 13.6566 4.31938 13.1716 3.8344L11.4988 2.16152C11.014 1.67677 10.3576 1.40321 9.67236 1.40003M10.2665 2.73805V4.33333C10.2665 4.73834 10.5948 5.06667 10.9998 5.06667H12.5951"/>
    <path className="solid-fill transparent-stroke" fillRule="evenodd" clipRule="evenodd" d="M6.42433 12.4242C6.19001 12.6586 5.81012 12.6586 5.5758 12.4242L5.26667 12.1151L5.26667 14C5.26667 14.3314 4.99804 14.6 4.66667 14.6C4.3353 14.6 4.06667 14.3314 4.06667 14L4.06667 12.1152L3.75766 12.4242C3.52335 12.6586 3.14345 12.6586 2.90913 12.4242C2.67482 12.1899 2.67482 11.81 2.90913 11.5757L4.23787 10.247C4.2541 10.2304 4.27127 10.2148 4.28931 10.2002C4.33103 10.1663 4.37623 10.1389 4.42358 10.1179C4.48733 10.0897 4.55691 10.0722 4.63003 10.0678C4.65973 10.066 4.68953 10.0663 4.71917 10.0689C4.76435 10.0728 4.8081 10.0818 4.84985 10.0951C4.93805 10.1233 5.02101 10.1724 5.091 10.2424L6.42433 11.5757C6.65864 11.81 6.65864 12.1899 6.42433 12.4242Z"/>
    </SIconBase>
  ),
  16: (
    <SIconBase width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path className="solid-fill transparent-stroke" fillRule="evenodd" clipRule="evenodd" d="M4.6665 1.4C3.23056 1.4 2.0665 2.56406 2.0665 4V8.66667C2.0665 8.99804 2.33513 9.26667 2.6665 9.26667C2.99787 9.26667 3.2665 8.99804 3.2665 8.66667V4C3.2665 3.2268 3.89331 2.6 4.6665 2.6H9.0665V4.33333C9.0665 5.40108 9.93209 6.26667 10.9998 6.26667H12.7332V12C12.7332 12.7732 12.1064 13.4 11.3332 13.4H8.6665C8.33513 13.4 8.0665 13.6686 8.0665 14C8.0665 14.3314 8.33513 14.6 8.6665 14.6H11.3332C12.7691 14.6 13.9332 13.4359 13.9332 12V5.67287C13.9332 5.67116 13.9332 5.66946 13.9332 5.66775C13.9332 5.66739 13.9332 5.66703 13.9332 5.66667C13.9332 5.66503 13.9332 5.6634 13.9331 5.66177C13.9302 4.97622 13.6566 4.31938 13.1716 3.8344L11.4988 2.16152C11.014 1.67677 10.3576 1.40321 9.67236 1.40003M10.2665 2.73805V4.33333C10.2665 4.73834 10.5948 5.06667 10.9998 5.06667H12.5951"/>
    <path className="solid-fill transparent-stroke" fillRule="evenodd" clipRule="evenodd" d="M6.42433 12.4242C6.19001 12.6586 5.81012 12.6586 5.5758 12.4242L5.26667 12.1151L5.26667 14C5.26667 14.3314 4.99804 14.6 4.66667 14.6C4.3353 14.6 4.06667 14.3314 4.06667 14L4.06667 12.1152L3.75766 12.4242C3.52335 12.6586 3.14345 12.6586 2.90913 12.4242C2.67482 12.1899 2.67482 11.81 2.90913 11.5757L4.23787 10.247C4.2541 10.2304 4.27127 10.2148 4.28931 10.2002C4.33103 10.1663 4.37623 10.1389 4.42358 10.1179C4.48733 10.0897 4.55691 10.0722 4.63003 10.0678C4.65973 10.066 4.68953 10.0663 4.71917 10.0689C4.76435 10.0728 4.8081 10.0818 4.84985 10.0951C4.93805 10.1233 5.02101 10.1724 5.091 10.2424L6.42433 11.5757C6.65864 11.81 6.65864 12.1899 6.42433 12.4242Z"/>
    </SIconBase>
  ),
  20: (
    <SIconBase width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path className="solid-fill transparent-stroke" fillRule="evenodd" clipRule="evenodd" d="M5.8335 1.75C4.03857 1.75 2.5835 3.20507 2.5835 5V10.8333C2.5835 11.2475 2.91928 11.5833 3.3335 11.5833C3.74771 11.5833 4.0835 11.2475 4.0835 10.8333V5C4.0835 4.0335 4.867 3.25 5.8335 3.25H11.3335V5.41667C11.3335 6.75135 12.4155 7.83333 13.7502 7.83333H15.9168V15C15.9168 15.9665 15.1333 16.75 14.1668 16.75H10.8335C10.4193 16.75 10.0835 17.0858 10.0835 17.5C10.0835 17.9142 10.4193 18.25 10.8335 18.25H14.1668C15.9618 18.25 17.4168 16.7949 17.4168 15V7.09109C17.4168 7.08895 17.4168 7.08682 17.4168 7.08469C17.4168 7.08424 17.4168 7.08378 17.4168 7.08333C17.4168 7.08129 17.4168 7.07925 17.4168 7.07721C17.4131 6.22027 17.0711 5.39922 16.4649 4.793L14.3738 2.7019C13.7679 2.09597 12.9473 1.75401 12.0908 1.75003M12.8335 3.42257V5.41667C12.8335 5.92293 13.2439 6.33333 13.7502 6.33333H15.7443"/>
    <path className="solid-fill transparent-stroke" fillRule="evenodd" clipRule="evenodd" d="M8.03017 15.5303C7.73727 15.8232 7.2624 15.8232 6.96951 15.5303L6.58317 15.144L6.58317 17.5C6.58317 17.9142 6.24738 18.25 5.83317 18.25C5.41896 18.25 5.08317 17.9142 5.08317 17.5L5.08317 15.144L4.69683 15.5303C4.40394 15.8232 3.92907 15.8232 3.63617 15.5303C3.34328 15.2374 3.34328 14.7625 3.63617 14.4696L5.30233 12.8035L5.30253 12.8033L5.30284 12.803C5.44753 12.6583 5.63662 12.5851 5.82625 12.5833C5.82855 12.5833 5.83086 12.5833 5.83317 12.5833C5.8348 12.5833 5.83643 12.5833 5.83806 12.5833C5.93797 12.584 6.03325 12.6041 6.12026 12.6402C6.20671 12.676 6.28782 12.7286 6.35858 12.7981C6.36023 12.7997 6.36187 12.8014 6.3635 12.803M6.364 12.8035L8.03017 14.4696C8.32306 14.7625 8.32306 15.2374 8.03017 15.5303"/>
    </SIconBase>  
  ),
  24: (
    <SIconBase width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path className="solid-fill transparent-stroke" fillRule="evenodd" clipRule="evenodd" d="M7 2.25C4.92893 2.25 3.25 3.92893 3.25 6V13C3.25 13.4142 3.58579 13.75 4 13.75C4.41421 13.75 4.75 13.4142 4.75 13V6C4.75 4.75736 5.75736 3.75 7 3.75H13.75V6.5C13.75 8.01878 14.9812 9.25 16.5 9.25H19.25V18C19.25 19.2426 18.2426 20.25 17 20.25H13C12.5858 20.25 12.25 20.5858 12.25 21C12.25 21.4142 12.5858 21.75 13 21.75H17C19.0711 21.75 20.75 20.0711 20.75 18V8.50931C20.75 8.50717 20.75 8.50504 20.75 8.5029C20.75 8.50193 20.75 8.50097 20.75 8.5C20.75 8.49783 20.75 8.49566 20.75 8.49349C20.7458 7.50464 20.3512 6.5572 19.6516 5.85767L17.1423 3.34835C16.4431 2.6491 15.4961 2.25451 14.5077 2.25004M15.25 3.882V6.5C15.25 7.19036 15.8096 7.75 16.5 7.75H19.118"/>
    <path className="solid-fill transparent-stroke" fillRule="evenodd" clipRule="evenodd" d="M9.53033 18.5303C9.23744 18.8232 8.76256 18.8232 8.46967 18.5303L7.75 17.8107L7.75 21C7.75 21.4142 7.41421 21.75 7 21.75C6.58579 21.75 6.25 21.4142 6.25 21L6.25 17.8107L5.53033 18.5303C5.23744 18.8232 4.76256 18.8232 4.46967 18.5303C4.17678 18.2374 4.17678 17.7626 4.46967 17.4697L6.46936 15.47L6.46945 15.4699L6.46967 15.4697C6.54158 15.3978 6.62445 15.3435 6.71291 15.3069C6.80134 15.2702 6.89831 15.25 7 15.25C7.10153 15.25 7.19835 15.2702 7.28667 15.3067C7.37364 15.3427 7.45523 15.3956 7.52631 15.4657M7.53083 15.4702L9.53033 17.4697C9.82322 17.7626 9.82322 18.2374 9.53033 18.5303"/>
    </SIconBase>
  ),
  28: (
    <SIconBase width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path className="solid-fill transparent-stroke" fillRule="evenodd" clipRule="evenodd" d="M7 2.25C4.92893 2.25 3.25 3.92893 3.25 6V13C3.25 13.4142 3.58579 13.75 4 13.75C4.41421 13.75 4.75 13.4142 4.75 13V6C4.75 4.75736 5.75736 3.75 7 3.75H13.75V6.5C13.75 8.01878 14.9812 9.25 16.5 9.25H19.25V18C19.25 19.2426 18.2426 20.25 17 20.25H13C12.5858 20.25 12.25 20.5858 12.25 21C12.25 21.4142 12.5858 21.75 13 21.75H17C19.0711 21.75 20.75 20.0711 20.75 18V8.50931C20.75 8.50717 20.75 8.50504 20.75 8.5029C20.75 8.50193 20.75 8.50097 20.75 8.5C20.75 8.49783 20.75 8.49566 20.75 8.49349C20.7458 7.50464 20.3512 6.5572 19.6516 5.85767L17.1423 3.34835C16.4431 2.6491 15.4961 2.25451 14.5077 2.25004M15.25 3.882V6.5C15.25 7.19036 15.8096 7.75 16.5 7.75H19.118"/>
    <path className="solid-fill transparent-stroke" fillRule="evenodd" clipRule="evenodd" d="M9.53033 18.5303C9.23744 18.8232 8.76256 18.8232 8.46967 18.5303L7.75 17.8107L7.75 21C7.75 21.4142 7.41421 21.75 7 21.75C6.58579 21.75 6.25 21.4142 6.25 21L6.25 17.8107L5.53033 18.5303C5.23744 18.8232 4.76256 18.8232 4.46967 18.5303C4.17678 18.2374 4.17678 17.7626 4.46967 17.4697L6.46936 15.47L6.46945 15.4699L6.46967 15.4697C6.54158 15.3978 6.62445 15.3435 6.71291 15.3069C6.80134 15.2702 6.89831 15.25 7 15.25C7.10153 15.25 7.19835 15.2702 7.28667 15.3067C7.37364 15.3427 7.45523 15.3956 7.52631 15.4657M7.53083 15.4702L9.53033 17.4697C9.82322 17.7626 9.82322 18.2374 9.53033 18.5303"/>
    </SIconBase>
  ),
  32: (
    <SIconBase width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path className="solid-fill transparent-stroke" fillRule="evenodd" clipRule="evenodd" d="M9.3335 3.1C6.6273 3.1 4.4335 5.2938 4.4335 8V17.3333C4.4335 17.8304 4.83644 18.2333 5.3335 18.2333C5.83055 18.2333 6.2335 17.8304 6.2335 17.3333V8C6.2335 6.28792 7.62141 4.9 9.3335 4.9H18.4335V8.66667C18.4335 10.6365 20.0303 12.2333 22.0002 12.2333H25.7668V24C25.7668 25.7121 24.3789 27.1 22.6668 27.1H17.3335C16.8364 27.1 16.4335 27.5029 16.4335 28C16.4335 28.4971 16.8364 28.9 17.3335 28.9H22.6668C25.373 28.9 27.5668 26.7062 27.5668 24V11.3457C27.5668 11.343 27.5668 11.3402 27.5668 11.3374C27.5668 11.336 27.5668 11.3347 27.5668 11.3333C27.5668 11.3306 27.5668 11.3279 27.5668 11.3252C27.5614 10.0331 27.0457 8.79502 26.1317 7.88094L22.7859 4.53518C21.8721 3.62142 20.6346 3.10582 19.343 3.10005C19.3398 3.10002 19.3367 3.1 19.3335 3.1C19.3322 3.1 19.331 3.1 19.3297 3.10001C19.3269 3.1 19.324 3.1 19.3211 3.1H9.3335ZM20.2335 5.03731V8.66667C20.2335 9.64237 21.0245 10.4333 22.0002 10.4333H25.6295C25.4821 9.9547 25.2195 9.51436 24.8589 9.15373L21.5131 5.80797C21.1525 5.44734 20.7121 5.18474 20.2335 5.03731Z"/>
    <path className="solid-fill transparent-stroke" fillRule="evenodd" clipRule="evenodd" d="M8.43333 28C8.43333 28.4971 8.83628 28.9 9.33333 28.9C9.83039 28.9 10.2333 28.4971 10.2333 28L10.2333 23.2941L11.4695 24.5303C11.7624 24.8232 12.2373 24.8232 12.5302 24.5303C12.8231 24.2374 12.8231 23.7625 12.5302 23.4696L10.2157 21.1552C10.133 20.7435 9.7694 20.4333 9.33333 20.4333C8.89741 20.4333 8.53388 20.7433 8.45105 21.1548L6.13617 23.4696C5.84328 23.7625 5.84328 24.2374 6.13617 24.5303C6.42907 24.8232 6.90394 24.8232 7.19683 24.5303L8.43333 23.2938L8.43333 28Z"/>
    </SIconBase>
  ),
  36: (
    <SIconBase width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path className="solid-fill transparent-stroke" fillRule="evenodd" clipRule="evenodd" d="M9.3335 3.1C6.6273 3.1 4.4335 5.2938 4.4335 8V17.3333C4.4335 17.8304 4.83644 18.2333 5.3335 18.2333C5.83055 18.2333 6.2335 17.8304 6.2335 17.3333V8C6.2335 6.28792 7.62141 4.9 9.3335 4.9H18.4335V8.66667C18.4335 10.6365 20.0303 12.2333 22.0002 12.2333H25.7668V24C25.7668 25.7121 24.3789 27.1 22.6668 27.1H17.3335C16.8364 27.1 16.4335 27.5029 16.4335 28C16.4335 28.4971 16.8364 28.9 17.3335 28.9H22.6668C25.373 28.9 27.5668 26.7062 27.5668 24V11.3457C27.5668 11.343 27.5668 11.3402 27.5668 11.3374C27.5668 11.336 27.5668 11.3347 27.5668 11.3333C27.5668 11.3306 27.5668 11.3279 27.5668 11.3252C27.5614 10.0331 27.0457 8.79502 26.1317 7.88094L22.7859 4.53518C21.8721 3.62142 20.6346 3.10582 19.343 3.10005C19.3398 3.10002 19.3367 3.1 19.3335 3.1C19.3322 3.1 19.331 3.1 19.3297 3.10001C19.3269 3.1 19.324 3.1 19.3211 3.1H9.3335ZM20.2335 5.03731V8.66667C20.2335 9.64237 21.0245 10.4333 22.0002 10.4333H25.6295C25.4821 9.9547 25.2195 9.51436 24.8589 9.15373L21.5131 5.80797C21.1525 5.44734 20.7121 5.18474 20.2335 5.03731Z"/>
    <path className="solid-fill transparent-stroke" fillRule="evenodd" clipRule="evenodd" d="M8.43333 28C8.43333 28.4971 8.83628 28.9 9.33333 28.9C9.83039 28.9 10.2333 28.4971 10.2333 28L10.2333 23.2941L11.4695 24.5303C11.7624 24.8232 12.2373 24.8232 12.5302 24.5303C12.8231 24.2374 12.8231 23.7625 12.5302 23.4696L10.2157 21.1552C10.133 20.7435 9.7694 20.4333 9.33333 20.4333C8.89741 20.4333 8.53388 20.7433 8.45105 21.1548L6.13617 23.4696C5.84328 23.7625 5.84328 24.2374 6.13617 24.5303C6.42907 24.8232 6.90394 24.8232 7.19683 24.5303L8.43333 23.2938L8.43333 28Z"/>
    </SIconBase>
  ),
  40: (
    <SIconBase width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path className="solid-fill transparent-stroke" fillRule="evenodd" clipRule="evenodd" d="M9.3335 3.1C6.6273 3.1 4.4335 5.2938 4.4335 8V17.3333C4.4335 17.8304 4.83644 18.2333 5.3335 18.2333C5.83055 18.2333 6.2335 17.8304 6.2335 17.3333V8C6.2335 6.28792 7.62141 4.9 9.3335 4.9H18.4335V8.66667C18.4335 10.6365 20.0303 12.2333 22.0002 12.2333H25.7668V24C25.7668 25.7121 24.3789 27.1 22.6668 27.1H17.3335C16.8364 27.1 16.4335 27.5029 16.4335 28C16.4335 28.4971 16.8364 28.9 17.3335 28.9H22.6668C25.373 28.9 27.5668 26.7062 27.5668 24V11.3457C27.5668 11.343 27.5668 11.3402 27.5668 11.3374C27.5668 11.336 27.5668 11.3347 27.5668 11.3333C27.5668 11.3306 27.5668 11.3279 27.5668 11.3252C27.5614 10.0331 27.0457 8.79502 26.1317 7.88094L22.7859 4.53518C21.8721 3.62142 20.6346 3.10582 19.343 3.10005C19.3398 3.10002 19.3367 3.1 19.3335 3.1C19.3322 3.1 19.331 3.1 19.3297 3.10001C19.3269 3.1 19.324 3.1 19.3211 3.1H9.3335ZM20.2335 5.03731V8.66667C20.2335 9.64237 21.0245 10.4333 22.0002 10.4333H25.6295C25.4821 9.9547 25.2195 9.51436 24.8589 9.15373L21.5131 5.80797C21.1525 5.44734 20.7121 5.18474 20.2335 5.03731Z"/>
    <path className="solid-fill transparent-stroke" fillRule="evenodd" clipRule="evenodd" d="M8.43333 28C8.43333 28.4971 8.83628 28.9 9.33333 28.9C9.83039 28.9 10.2333 28.4971 10.2333 28L10.2333 23.2941L11.4695 24.5303C11.7624 24.8232 12.2373 24.8232 12.5302 24.5303C12.8231 24.2374 12.8231 23.7625 12.5302 23.4696L10.2157 21.1552C10.133 20.7435 9.7694 20.4333 9.33333 20.4333C8.89741 20.4333 8.53388 20.7433 8.45105 21.1548L6.13617 23.4696C5.84328 23.7625 5.84328 24.2374 6.13617 24.5303C6.42907 24.8232 6.90394 24.8232 7.19683 24.5303L8.43333 23.2938L8.43333 28Z"/>
    </SIconBase>
  ),
  48: (
    <SIconBase width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path className="solid-fill transparent-stroke" fillRule="evenodd" clipRule="evenodd" d="M9.3335 3.1C6.6273 3.1 4.4335 5.2938 4.4335 8V17.3333C4.4335 17.8304 4.83644 18.2333 5.3335 18.2333C5.83055 18.2333 6.2335 17.8304 6.2335 17.3333V8C6.2335 6.28792 7.62141 4.9 9.3335 4.9H18.4335V8.66667C18.4335 10.6365 20.0303 12.2333 22.0002 12.2333H25.7668V24C25.7668 25.7121 24.3789 27.1 22.6668 27.1H17.3335C16.8364 27.1 16.4335 27.5029 16.4335 28C16.4335 28.4971 16.8364 28.9 17.3335 28.9H22.6668C25.373 28.9 27.5668 26.7062 27.5668 24V11.3457C27.5668 11.343 27.5668 11.3402 27.5668 11.3374C27.5668 11.336 27.5668 11.3347 27.5668 11.3333C27.5668 11.3306 27.5668 11.3279 27.5668 11.3252C27.5614 10.0331 27.0457 8.79502 26.1317 7.88094L22.7859 4.53518C21.8721 3.62142 20.6346 3.10582 19.343 3.10005C19.3398 3.10002 19.3367 3.1 19.3335 3.1C19.3322 3.1 19.331 3.1 19.3297 3.10001C19.3269 3.1 19.324 3.1 19.3211 3.1H9.3335ZM20.2335 5.03731V8.66667C20.2335 9.64237 21.0245 10.4333 22.0002 10.4333H25.6295C25.4821 9.9547 25.2195 9.51436 24.8589 9.15373L21.5131 5.80797C21.1525 5.44734 20.7121 5.18474 20.2335 5.03731Z"/>
    <path className="solid-fill transparent-stroke" fillRule="evenodd" clipRule="evenodd" d="M8.43333 28C8.43333 28.4971 8.83628 28.9 9.33333 28.9C9.83039 28.9 10.2333 28.4971 10.2333 28L10.2333 23.2941L11.4695 24.5303C11.7624 24.8232 12.2373 24.8232 12.5302 24.5303C12.8231 24.2374 12.8231 23.7625 12.5302 23.4696L10.2157 21.1552C10.133 20.7435 9.7694 20.4333 9.33333 20.4333C8.89741 20.4333 8.53388 20.7433 8.45105 21.1548L6.13617 23.4696C5.84328 23.7625 5.84328 24.2374 6.13617 24.5303C6.42907 24.8232 6.90394 24.8232 7.19683 24.5303L8.43333 23.2938L8.43333 28Z"/>
    </SIconBase>
  ),
};

export const IconPublishDocuments: FC<IIconSize> = ({ size = 24 }) => IconSize[size];
