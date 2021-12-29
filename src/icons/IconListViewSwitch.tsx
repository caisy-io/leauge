import React, { FC } from "react";
import { SIconBase } from "./styles/SIconBase";
import { IIconSize } from "../utils/types";

const IconSize = {
  12: (
    <SIconBase width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path className="solid-fill transparent-stroke" fillRule="evenodd" clipRule="evenodd" d="M2.4999 2.16689C1.94776 2.16689 1.4999 2.61475 1.4999 3.16689V4.16689C1.4999 4.71904 1.94776 5.16689 2.4999 5.16689H3.4999C4.05204 5.16689 4.4999 4.71904 4.4999 4.16689V3.16689C4.4999 2.61475 4.05204 2.16689 3.4999 2.16689H2.4999ZM2.4999 3.16689L3.4999 3.16689V4.16689H2.4999V3.16689ZM2.4999 6.50023C1.94776 6.50023 1.4999 6.94809 1.4999 7.50023V8.50023C1.4999 9.05237 1.94776 9.50023 2.4999 9.50023H3.4999C4.05204 9.50023 4.4999 9.05237 4.4999 8.50023V7.50023C4.4999 6.94809 4.05204 6.50023 3.4999 6.50023H2.4999ZM2.4999 7.50023H3.4999V8.50023H2.4999V7.50023ZM5.54801 8.00023C5.54801 7.66886 5.81664 7.40023 6.14801 7.40023H14C14.3314 7.40023 14.6 7.66886 14.6 8.00023C14.6 8.3316 14.3314 8.60023 14 8.60023H6.14801C5.81664 8.60023 5.54801 8.3316 5.54801 8.00023ZM6.14801 3.06689C5.81664 3.06689 5.54801 3.33552 5.54801 3.66689C5.54801 3.99827 5.81664 4.26689 6.14801 4.26689H14C14.3314 4.26689 14.6 3.99827 14.6 3.66689C14.6 3.33552 14.3314 3.06689 14 3.06689H6.14801ZM1.4999 11.8336C1.4999 11.2814 1.94776 10.8336 2.4999 10.8336H3.4999C4.05204 10.8336 4.4999 11.2814 4.4999 11.8336V12.8336C4.4999 13.3857 4.05204 13.8336 3.4999 13.8336H2.4999C1.94776 13.8336 1.4999 13.3857 1.4999 12.8336V11.8336ZM3.4999 11.8336H2.4999V12.8336H3.4999V11.8336ZM6.14801 11.7336C5.81664 11.7336 5.54801 12.0022 5.54801 12.3336C5.54801 12.6649 5.81664 12.9336 6.14801 12.9336H14C14.3314 12.9336 14.6 12.6649 14.6 12.3336C14.6 12.0022 14.3314 11.7336 14 11.7336H6.14801Z"/>
    </SIconBase>
  ),
  16: (
    <SIconBase width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path className="solid-fill transparent-stroke" fillRule="evenodd" clipRule="evenodd" d="M2.4999 2.16689C1.94776 2.16689 1.4999 2.61475 1.4999 3.16689V4.16689C1.4999 4.71904 1.94776 5.16689 2.4999 5.16689H3.4999C4.05204 5.16689 4.4999 4.71904 4.4999 4.16689V3.16689C4.4999 2.61475 4.05204 2.16689 3.4999 2.16689H2.4999ZM2.4999 3.16689L3.4999 3.16689V4.16689H2.4999V3.16689ZM2.4999 6.50023C1.94776 6.50023 1.4999 6.94809 1.4999 7.50023V8.50023C1.4999 9.05237 1.94776 9.50023 2.4999 9.50023H3.4999C4.05204 9.50023 4.4999 9.05237 4.4999 8.50023V7.50023C4.4999 6.94809 4.05204 6.50023 3.4999 6.50023H2.4999ZM2.4999 7.50023H3.4999V8.50023H2.4999V7.50023ZM5.54801 8.00023C5.54801 7.66886 5.81664 7.40023 6.14801 7.40023H14C14.3314 7.40023 14.6 7.66886 14.6 8.00023C14.6 8.3316 14.3314 8.60023 14 8.60023H6.14801C5.81664 8.60023 5.54801 8.3316 5.54801 8.00023ZM6.14801 3.06689C5.81664 3.06689 5.54801 3.33552 5.54801 3.66689C5.54801 3.99827 5.81664 4.26689 6.14801 4.26689H14C14.3314 4.26689 14.6 3.99827 14.6 3.66689C14.6 3.33552 14.3314 3.06689 14 3.06689H6.14801ZM1.4999 11.8336C1.4999 11.2814 1.94776 10.8336 2.4999 10.8336H3.4999C4.05204 10.8336 4.4999 11.2814 4.4999 11.8336V12.8336C4.4999 13.3857 4.05204 13.8336 3.4999 13.8336H2.4999C1.94776 13.8336 1.4999 13.3857 1.4999 12.8336V11.8336ZM3.4999 11.8336H2.4999V12.8336H3.4999V11.8336ZM6.14801 11.7336C5.81664 11.7336 5.54801 12.0022 5.54801 12.3336C5.54801 12.6649 5.81664 12.9336 6.14801 12.9336H14C14.3314 12.9336 14.6 12.6649 14.6 12.3336C14.6 12.0022 14.3314 11.7336 14 11.7336H6.14801Z"/>
    </SIconBase>
  ),
  20: (
    <SIconBase width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path className="solid-fill transparent-stroke" fillRule="evenodd" clipRule="evenodd" d="M3.15 5.1835V3.9835H4.35V5.1835H3.15ZM3.125 2.6835C2.42102 2.6835 1.85 3.25451 1.85 3.9585V5.2085C1.85 5.91248 2.42102 6.4835 3.125 6.4835H4.375C5.07898 6.4835 5.65 5.91248 5.65 5.2085V3.9585C5.65 3.25451 5.07898 2.6835 4.375 2.6835H3.125ZM3.15 10.6002V9.40016H4.35V10.6002H3.15ZM3.125 8.10016C2.42101 8.10016 1.85 8.67118 1.85 9.37516V10.6252C1.85 11.3291 2.42101 11.9002 3.125 11.9002H4.375C5.07898 11.9002 5.65 11.3291 5.65 10.6252V9.37516C5.65 8.67118 5.07898 8.10016 4.375 8.10016H3.125ZM6.93514 10.0002C6.93514 9.58595 7.27093 9.25016 7.68514 9.25016H17.5001C17.9144 9.25016 18.2501 9.58595 18.2501 10.0002C18.2501 10.4144 17.9144 10.7502 17.5001 10.7502H7.68514C7.27093 10.7502 6.93514 10.4144 6.93514 10.0002ZM7.68514 3.8335C7.27093 3.8335 6.93514 4.16928 6.93514 4.5835C6.93514 4.99771 7.27093 5.3335 7.68514 5.3335H17.5001C17.9144 5.3335 18.2501 4.99771 18.2501 4.5835C18.2501 4.16928 17.9144 3.8335 17.5001 3.8335H7.68514ZM3.15 14.8168V16.0168H4.35V14.8168H3.15ZM1.85 14.7918C1.85 14.0878 2.42101 13.5168 3.125 13.5168H4.375C5.07898 13.5168 5.65 14.0878 5.65 14.7918V16.0418C5.65 16.7458 5.07898 17.3168 4.375 17.3168H3.125C2.42101 17.3168 1.85 16.7458 1.85 16.0418V14.7918ZM7.68514 14.6668C7.27093 14.6668 6.93514 15.0026 6.93514 15.4168C6.93514 15.831 7.27093 16.1668 7.68514 16.1668H17.5001C17.9144 16.1668 18.2501 15.831 18.2501 15.4168C18.2501 15.0026 17.9144 14.6668 17.5001 14.6668H7.68514Z"/>
    </SIconBase>  
  ),
  24: (
    <SIconBase width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path className="solid-fill transparent-stroke" fillRule="evenodd" clipRule="evenodd" d="M3.65 4.75C3.65 4.69499 3.69499 4.65 3.75 4.65H5.25C5.30501 4.65 5.35 4.69499 5.35 4.75V6.25C5.35 6.30501 5.30501 6.35 5.25 6.35H3.75C3.69499 6.35 3.65 6.30501 3.65 6.25V4.75ZM3.75 3.35C2.97701 3.35 2.35 3.97701 2.35 4.75V6.25C2.35 7.02298 2.97701 7.65 3.75 7.65H5.25C6.02298 7.65 6.65 7.02298 6.65 6.25V4.75C6.65 3.97701 6.02298 3.35 5.25 3.35H3.75ZM3.65 11.25C3.65 11.195 3.69499 11.15 3.75 11.15H5.25C5.30501 11.15 5.35 11.195 5.35 11.25V12.75C5.35 12.805 5.30501 12.85 5.25 12.85H3.75C3.69499 12.85 3.65 12.805 3.65 12.75V11.25ZM3.75 9.85C2.97701 9.85 2.35 10.477 2.35 11.25V12.75C2.35 13.523 2.97701 14.15 3.75 14.15H5.25C6.02298 14.15 6.65 13.523 6.65 12.75V11.25C6.65 10.477 6.02298 9.85 5.25 9.85H3.75ZM8.47217 12C8.47217 11.5858 8.80795 11.25 9.22217 11.25H21.0002C21.4144 11.25 21.7502 11.5858 21.7502 12C21.7502 12.4142 21.4144 12.75 21.0002 12.75H9.22217C8.80795 12.75 8.47217 12.4142 8.47217 12ZM9.22217 4.75C8.80795 4.75 8.47217 5.08579 8.47217 5.5C8.47217 5.91421 8.80795 6.25 9.22217 6.25H21.0002C21.4144 6.25 21.7502 5.91421 21.7502 5.5C21.7502 5.08579 21.4144 4.75 21.0002 4.75H9.22217ZM3.75 17.65C3.69499 17.65 3.65 17.695 3.65 17.75V19.25C3.65 19.305 3.69499 19.35 3.75 19.35H5.25C5.30501 19.35 5.35 19.305 5.35 19.25V17.75C5.35 17.695 5.30501 17.65 5.25 17.65H3.75ZM2.35 17.75C2.35 16.977 2.97701 16.35 3.75 16.35H5.25C6.02298 16.35 6.65 16.977 6.65 17.75V19.25C6.65 20.023 6.02298 20.65 5.25 20.65H3.75C2.97701 20.65 2.35 20.023 2.35 19.25V17.75ZM9.22217 17.75C8.80795 17.75 8.47217 18.0858 8.47217 18.5C8.47217 18.9142 8.80795 19.25 9.22217 19.25H21.0002C21.4144 19.25 21.7502 18.9142 21.7502 18.5C21.7502 18.0858 21.4144 17.75 21.0002 17.75H9.22217Z"/>
    </SIconBase>
  ),
  28:(
    <SIconBase width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path className="solid-fill transparent-stroke" fillRule="evenodd" clipRule="evenodd" d="M3.65 4.75C3.65 4.69499 3.69499 4.65 3.75 4.65H5.25C5.30501 4.65 5.35 4.69499 5.35 4.75V6.25C5.35 6.30501 5.30501 6.35 5.25 6.35H3.75C3.69499 6.35 3.65 6.30501 3.65 6.25V4.75ZM3.75 3.35C2.97701 3.35 2.35 3.97701 2.35 4.75V6.25C2.35 7.02298 2.97701 7.65 3.75 7.65H5.25C6.02298 7.65 6.65 7.02298 6.65 6.25V4.75C6.65 3.97701 6.02298 3.35 5.25 3.35H3.75ZM3.65 11.25C3.65 11.195 3.69499 11.15 3.75 11.15H5.25C5.30501 11.15 5.35 11.195 5.35 11.25V12.75C5.35 12.805 5.30501 12.85 5.25 12.85H3.75C3.69499 12.85 3.65 12.805 3.65 12.75V11.25ZM3.75 9.85C2.97701 9.85 2.35 10.477 2.35 11.25V12.75C2.35 13.523 2.97701 14.15 3.75 14.15H5.25C6.02298 14.15 6.65 13.523 6.65 12.75V11.25C6.65 10.477 6.02298 9.85 5.25 9.85H3.75ZM8.47217 12C8.47217 11.5858 8.80795 11.25 9.22217 11.25H21.0002C21.4144 11.25 21.7502 11.5858 21.7502 12C21.7502 12.4142 21.4144 12.75 21.0002 12.75H9.22217C8.80795 12.75 8.47217 12.4142 8.47217 12ZM9.22217 4.75C8.80795 4.75 8.47217 5.08579 8.47217 5.5C8.47217 5.91421 8.80795 6.25 9.22217 6.25H21.0002C21.4144 6.25 21.7502 5.91421 21.7502 5.5C21.7502 5.08579 21.4144 4.75 21.0002 4.75H9.22217ZM3.75 17.65C3.69499 17.65 3.65 17.695 3.65 17.75V19.25C3.65 19.305 3.69499 19.35 3.75 19.35H5.25C5.30501 19.35 5.35 19.305 5.35 19.25V17.75C5.35 17.695 5.30501 17.65 5.25 17.65H3.75ZM2.35 17.75C2.35 16.977 2.97701 16.35 3.75 16.35H5.25C6.02298 16.35 6.65 16.977 6.65 17.75V19.25C6.65 20.023 6.02298 20.65 5.25 20.65H3.75C2.97701 20.65 2.35 20.023 2.35 19.25V17.75ZM9.22217 17.75C8.80795 17.75 8.47217 18.0858 8.47217 18.5C8.47217 18.9142 8.80795 19.25 9.22217 19.25H21.0002C21.4144 19.25 21.7502 18.9142 21.7502 18.5C21.7502 18.0858 21.4144 17.75 21.0002 17.75H9.22217Z"/>
    </SIconBase>
  ),
  32: (
    <SIconBase width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path className="solid-fill transparent-stroke" fillRule="evenodd" clipRule="evenodd" d="M4.7501 6.33359C4.7501 6.19581 4.86231 6.08359 5.0001 6.08359H7.0001C7.13788 6.08359 7.2501 6.19581 7.2501 6.33359V8.33359C7.2501 8.47138 7.13788 8.58359 7.0001 8.58359H5.0001C4.86231 8.58359 4.7501 8.47138 4.7501 8.33359V6.33359ZM5.0001 4.58359C4.03388 4.58359 3.2501 5.36738 3.2501 6.33359V8.33359C3.2501 9.29981 4.03388 10.0836 5.0001 10.0836H7.0001C7.96631 10.0836 8.7501 9.29981 8.7501 8.33359V6.33359C8.7501 5.36738 7.96631 4.58359 7.0001 4.58359H5.0001ZM4.7501 15.0001C4.7501 14.8623 4.86231 14.7501 5.0001 14.7501H7.0001C7.13788 14.7501 7.2501 14.8623 7.2501 15.0001V17.0001C7.2501 17.1379 7.13788 17.2501 7.0001 17.2501H5.0001C4.86231 17.2501 4.7501 17.1379 4.7501 17.0001V15.0001ZM5.0001 13.2501C4.03388 13.2501 3.2501 14.0339 3.2501 15.0001V17.0001C3.2501 17.9663 4.03388 18.7501 5.0001 18.7501H7.0001C7.96631 18.7501 8.7501 17.9663 8.7501 17.0001V15.0001C8.7501 14.0339 7.96631 13.2501 7.0001 13.2501H5.0001ZM11.3965 16.0003C11.3965 15.5032 11.7994 15.1003 12.2965 15.1003H28.0005C28.4975 15.1003 28.9005 15.5032 28.9005 16.0003C28.9005 16.4973 28.4975 16.9003 28.0005 16.9003H12.2965C11.7994 16.9003 11.3965 16.4973 11.3965 16.0003ZM12.2965 6.43327C11.7994 6.43327 11.3965 6.83621 11.3965 7.33327C11.3965 7.83032 11.7994 8.23327 12.2965 8.23327H28.0005C28.4975 8.23327 28.9005 7.83032 28.9005 7.33327C28.9005 6.83621 28.4975 6.43327 28.0005 6.43327H12.2965ZM5.0001 23.4166C4.86231 23.4166 4.7501 23.5288 4.7501 23.6666V25.6666C4.7501 25.8044 4.86231 25.9166 5.0001 25.9166H7.0001C7.13788 25.9166 7.2501 25.8044 7.2501 25.6666V23.6666C7.2501 23.5288 7.13788 23.4166 7.0001 23.4166H5.0001ZM3.2501 23.6666C3.2501 22.7004 4.03388 21.9166 5.0001 21.9166H7.0001C7.96631 21.9166 8.7501 22.7004 8.7501 23.6666V25.6666C8.7501 26.6328 7.96631 27.4166 7.0001 27.4166H5.0001C4.03388 27.4166 3.2501 26.6328 3.2501 25.6666V23.6666ZM12.2965 23.7668C11.7994 23.7668 11.3965 24.1697 11.3965 24.6668C11.3965 25.1638 11.7994 25.5668 12.2965 25.5668H28.0005C28.4975 25.5668 28.9005 25.1638 28.9005 24.6668C28.9005 24.1697 28.4975 23.7668 28.0005 23.7668H12.2965Z"/>
    </SIconBase>
  ),
  36: (
    <SIconBase width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path className="solid-fill transparent-stroke" fillRule="evenodd" clipRule="evenodd" d="M4.7501 6.33359C4.7501 6.19581 4.86231 6.08359 5.0001 6.08359H7.0001C7.13788 6.08359 7.2501 6.19581 7.2501 6.33359V8.33359C7.2501 8.47138 7.13788 8.58359 7.0001 8.58359H5.0001C4.86231 8.58359 4.7501 8.47138 4.7501 8.33359V6.33359ZM5.0001 4.58359C4.03388 4.58359 3.2501 5.36738 3.2501 6.33359V8.33359C3.2501 9.29981 4.03388 10.0836 5.0001 10.0836H7.0001C7.96631 10.0836 8.7501 9.29981 8.7501 8.33359V6.33359C8.7501 5.36738 7.96631 4.58359 7.0001 4.58359H5.0001ZM4.7501 15.0001C4.7501 14.8623 4.86231 14.7501 5.0001 14.7501H7.0001C7.13788 14.7501 7.2501 14.8623 7.2501 15.0001V17.0001C7.2501 17.1379 7.13788 17.2501 7.0001 17.2501H5.0001C4.86231 17.2501 4.7501 17.1379 4.7501 17.0001V15.0001ZM5.0001 13.2501C4.03388 13.2501 3.2501 14.0339 3.2501 15.0001V17.0001C3.2501 17.9663 4.03388 18.7501 5.0001 18.7501H7.0001C7.96631 18.7501 8.7501 17.9663 8.7501 17.0001V15.0001C8.7501 14.0339 7.96631 13.2501 7.0001 13.2501H5.0001ZM11.3965 16.0003C11.3965 15.5032 11.7994 15.1003 12.2965 15.1003H28.0005C28.4975 15.1003 28.9005 15.5032 28.9005 16.0003C28.9005 16.4973 28.4975 16.9003 28.0005 16.9003H12.2965C11.7994 16.9003 11.3965 16.4973 11.3965 16.0003ZM12.2965 6.43327C11.7994 6.43327 11.3965 6.83621 11.3965 7.33327C11.3965 7.83032 11.7994 8.23327 12.2965 8.23327H28.0005C28.4975 8.23327 28.9005 7.83032 28.9005 7.33327C28.9005 6.83621 28.4975 6.43327 28.0005 6.43327H12.2965ZM5.0001 23.4166C4.86231 23.4166 4.7501 23.5288 4.7501 23.6666V25.6666C4.7501 25.8044 4.86231 25.9166 5.0001 25.9166H7.0001C7.13788 25.9166 7.2501 25.8044 7.2501 25.6666V23.6666C7.2501 23.5288 7.13788 23.4166 7.0001 23.4166H5.0001ZM3.2501 23.6666C3.2501 22.7004 4.03388 21.9166 5.0001 21.9166H7.0001C7.96631 21.9166 8.7501 22.7004 8.7501 23.6666V25.6666C8.7501 26.6328 7.96631 27.4166 7.0001 27.4166H5.0001C4.03388 27.4166 3.2501 26.6328 3.2501 25.6666V23.6666ZM12.2965 23.7668C11.7994 23.7668 11.3965 24.1697 11.3965 24.6668C11.3965 25.1638 11.7994 25.5668 12.2965 25.5668H28.0005C28.4975 25.5668 28.9005 25.1638 28.9005 24.6668C28.9005 24.1697 28.4975 23.7668 28.0005 23.7668H12.2965Z"/>
    </SIconBase>
  ),
  40: (
    <SIconBase width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path className="solid-fill transparent-stroke" fillRule="evenodd" clipRule="evenodd" d="M4.7501 6.33359C4.7501 6.19581 4.86231 6.08359 5.0001 6.08359H7.0001C7.13788 6.08359 7.2501 6.19581 7.2501 6.33359V8.33359C7.2501 8.47138 7.13788 8.58359 7.0001 8.58359H5.0001C4.86231 8.58359 4.7501 8.47138 4.7501 8.33359V6.33359ZM5.0001 4.58359C4.03388 4.58359 3.2501 5.36738 3.2501 6.33359V8.33359C3.2501 9.29981 4.03388 10.0836 5.0001 10.0836H7.0001C7.96631 10.0836 8.7501 9.29981 8.7501 8.33359V6.33359C8.7501 5.36738 7.96631 4.58359 7.0001 4.58359H5.0001ZM4.7501 15.0001C4.7501 14.8623 4.86231 14.7501 5.0001 14.7501H7.0001C7.13788 14.7501 7.2501 14.8623 7.2501 15.0001V17.0001C7.2501 17.1379 7.13788 17.2501 7.0001 17.2501H5.0001C4.86231 17.2501 4.7501 17.1379 4.7501 17.0001V15.0001ZM5.0001 13.2501C4.03388 13.2501 3.2501 14.0339 3.2501 15.0001V17.0001C3.2501 17.9663 4.03388 18.7501 5.0001 18.7501H7.0001C7.96631 18.7501 8.7501 17.9663 8.7501 17.0001V15.0001C8.7501 14.0339 7.96631 13.2501 7.0001 13.2501H5.0001ZM11.3965 16.0003C11.3965 15.5032 11.7994 15.1003 12.2965 15.1003H28.0005C28.4975 15.1003 28.9005 15.5032 28.9005 16.0003C28.9005 16.4973 28.4975 16.9003 28.0005 16.9003H12.2965C11.7994 16.9003 11.3965 16.4973 11.3965 16.0003ZM12.2965 6.43327C11.7994 6.43327 11.3965 6.83621 11.3965 7.33327C11.3965 7.83032 11.7994 8.23327 12.2965 8.23327H28.0005C28.4975 8.23327 28.9005 7.83032 28.9005 7.33327C28.9005 6.83621 28.4975 6.43327 28.0005 6.43327H12.2965ZM5.0001 23.4166C4.86231 23.4166 4.7501 23.5288 4.7501 23.6666V25.6666C4.7501 25.8044 4.86231 25.9166 5.0001 25.9166H7.0001C7.13788 25.9166 7.2501 25.8044 7.2501 25.6666V23.6666C7.2501 23.5288 7.13788 23.4166 7.0001 23.4166H5.0001ZM3.2501 23.6666C3.2501 22.7004 4.03388 21.9166 5.0001 21.9166H7.0001C7.96631 21.9166 8.7501 22.7004 8.7501 23.6666V25.6666C8.7501 26.6328 7.96631 27.4166 7.0001 27.4166H5.0001C4.03388 27.4166 3.2501 26.6328 3.2501 25.6666V23.6666ZM12.2965 23.7668C11.7994 23.7668 11.3965 24.1697 11.3965 24.6668C11.3965 25.1638 11.7994 25.5668 12.2965 25.5668H28.0005C28.4975 25.5668 28.9005 25.1638 28.9005 24.6668C28.9005 24.1697 28.4975 23.7668 28.0005 23.7668H12.2965Z"/>
    </SIconBase>
  ),
  48: (
    <SIconBase width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path className="solid-fill transparent-stroke" fillRule="evenodd" clipRule="evenodd" d="M4.7501 6.33359C4.7501 6.19581 4.86231 6.08359 5.0001 6.08359H7.0001C7.13788 6.08359 7.2501 6.19581 7.2501 6.33359V8.33359C7.2501 8.47138 7.13788 8.58359 7.0001 8.58359H5.0001C4.86231 8.58359 4.7501 8.47138 4.7501 8.33359V6.33359ZM5.0001 4.58359C4.03388 4.58359 3.2501 5.36738 3.2501 6.33359V8.33359C3.2501 9.29981 4.03388 10.0836 5.0001 10.0836H7.0001C7.96631 10.0836 8.7501 9.29981 8.7501 8.33359V6.33359C8.7501 5.36738 7.96631 4.58359 7.0001 4.58359H5.0001ZM4.7501 15.0001C4.7501 14.8623 4.86231 14.7501 5.0001 14.7501H7.0001C7.13788 14.7501 7.2501 14.8623 7.2501 15.0001V17.0001C7.2501 17.1379 7.13788 17.2501 7.0001 17.2501H5.0001C4.86231 17.2501 4.7501 17.1379 4.7501 17.0001V15.0001ZM5.0001 13.2501C4.03388 13.2501 3.2501 14.0339 3.2501 15.0001V17.0001C3.2501 17.9663 4.03388 18.7501 5.0001 18.7501H7.0001C7.96631 18.7501 8.7501 17.9663 8.7501 17.0001V15.0001C8.7501 14.0339 7.96631 13.2501 7.0001 13.2501H5.0001ZM11.3965 16.0003C11.3965 15.5032 11.7994 15.1003 12.2965 15.1003H28.0005C28.4975 15.1003 28.9005 15.5032 28.9005 16.0003C28.9005 16.4973 28.4975 16.9003 28.0005 16.9003H12.2965C11.7994 16.9003 11.3965 16.4973 11.3965 16.0003ZM12.2965 6.43327C11.7994 6.43327 11.3965 6.83621 11.3965 7.33327C11.3965 7.83032 11.7994 8.23327 12.2965 8.23327H28.0005C28.4975 8.23327 28.9005 7.83032 28.9005 7.33327C28.9005 6.83621 28.4975 6.43327 28.0005 6.43327H12.2965ZM5.0001 23.4166C4.86231 23.4166 4.7501 23.5288 4.7501 23.6666V25.6666C4.7501 25.8044 4.86231 25.9166 5.0001 25.9166H7.0001C7.13788 25.9166 7.2501 25.8044 7.2501 25.6666V23.6666C7.2501 23.5288 7.13788 23.4166 7.0001 23.4166H5.0001ZM3.2501 23.6666C3.2501 22.7004 4.03388 21.9166 5.0001 21.9166H7.0001C7.96631 21.9166 8.7501 22.7004 8.7501 23.6666V25.6666C8.7501 26.6328 7.96631 27.4166 7.0001 27.4166H5.0001C4.03388 27.4166 3.2501 26.6328 3.2501 25.6666V23.6666ZM12.2965 23.7668C11.7994 23.7668 11.3965 24.1697 11.3965 24.6668C11.3965 25.1638 11.7994 25.5668 12.2965 25.5668H28.0005C28.4975 25.5668 28.9005 25.1638 28.9005 24.6668C28.9005 24.1697 28.4975 23.7668 28.0005 23.7668H12.2965Z"/>
    </SIconBase>
  )
}

export const IconListViewSwitch: FC<IIconSize> = ({ size= 24 }) => IconSize[size];
