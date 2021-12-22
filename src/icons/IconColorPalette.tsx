import React, { FC } from "react";
import { SIconBase } from "./styles/SIconBase";
import { IIconSize } from "../utils/types";

const IconSize = {
  12: (
    <SIconBase width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M7.99949 4.24985C7.89816 4.24985 7.81616 4.33185 7.81749 4.43319C7.81749 4.53452 7.89949 4.61652 8.00082 4.61652C8.10216 4.61652 8.18416 4.53452 8.18416 4.43319C8.18282 4.33185 8.10149 4.24985 7.99949 4.24985" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M4.61594 7.99924C4.61594 7.89791 4.53394 7.81591 4.43328 7.81724C4.33194 7.81724 4.24994 7.89924 4.24994 8.00058C4.24994 8.10191 4.33194 8.18391 4.43328 8.18391C4.53461 8.18391 4.61594 8.10124 4.61594 7.99924" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M10.6515 5.34791C10.5802 5.27658 10.4642 5.27658 10.3935 5.34858C10.3222 5.41991 10.3222 5.53591 10.3935 5.60725C10.4648 5.67858 10.5808 5.67858 10.6522 5.60725C10.7235 5.53525 10.7235 5.41991 10.6515 5.34791" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M5.60657 10.3926C5.53524 10.3213 5.41924 10.3213 5.34857 10.3933C5.27724 10.4646 5.27724 10.5806 5.34857 10.6519C5.41991 10.7233 5.53591 10.7233 5.60724 10.6519C5.67857 10.5806 5.67857 10.4646 5.60657 10.3926" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M5.60757 5.60657C5.67891 5.53524 5.67891 5.41924 5.60691 5.34857C5.53557 5.27724 5.41957 5.27724 5.34824 5.34857C5.27691 5.41991 5.27691 5.53591 5.34824 5.60724C5.41957 5.67857 5.53557 5.67857 5.60757 5.60657" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M8.00019 13.9999C4.63019 13.9999 1.90885 11.2213 2.00285 7.82994C2.08952 4.69927 4.69952 2.08927 7.83019 2.00261C11.2215 1.90861 14.0002 4.62994 14.0002 7.99994V8.66661C14.0002 9.40328 13.4035 9.99994 12.6669 9.99994H11.2915C10.4055 9.99994 9.76619 10.8479 10.0095 11.6993L10.1809 12.2999C10.4249 13.1519 9.78485 13.9999 8.89952 13.9999H8.00019Z" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
  16: (
    <SIconBase width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M7.99949 4.24985C7.89816 4.24985 7.81616 4.33185 7.81749 4.43319C7.81749 4.53452 7.89949 4.61652 8.00082 4.61652C8.10216 4.61652 8.18416 4.53452 8.18416 4.43319C8.18282 4.33185 8.10149 4.24985 7.99949 4.24985" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M4.61594 7.99924C4.61594 7.89791 4.53394 7.81591 4.43328 7.81724C4.33194 7.81724 4.24994 7.89924 4.24994 8.00058C4.24994 8.10191 4.33194 8.18391 4.43328 8.18391C4.53461 8.18391 4.61594 8.10124 4.61594 7.99924" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M10.6515 5.34791C10.5802 5.27658 10.4642 5.27658 10.3935 5.34858C10.3222 5.41991 10.3222 5.53591 10.3935 5.60725C10.4648 5.67858 10.5808 5.67858 10.6522 5.60725C10.7235 5.53525 10.7235 5.41991 10.6515 5.34791" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M5.60657 10.3926C5.53524 10.3213 5.41924 10.3213 5.34857 10.3933C5.27724 10.4646 5.27724 10.5806 5.34857 10.6519C5.41991 10.7233 5.53591 10.7233 5.60724 10.6519C5.67857 10.5806 5.67857 10.4646 5.60657 10.3926" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M5.60757 5.60657C5.67891 5.53524 5.67891 5.41924 5.60691 5.34857C5.53557 5.27724 5.41957 5.27724 5.34824 5.34857C5.27691 5.41991 5.27691 5.53591 5.34824 5.60724C5.41957 5.67857 5.53557 5.67857 5.60757 5.60657" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M8.00019 13.9999C4.63019 13.9999 1.90885 11.2213 2.00285 7.82994C2.08952 4.69927 4.69952 2.08927 7.83019 2.00261C11.2215 1.90861 14.0002 4.62994 14.0002 7.99994V8.66661C14.0002 9.40328 13.4035 9.99994 12.6669 9.99994H11.2915C10.4055 9.99994 9.76619 10.8479 10.0095 11.6993L10.1809 12.2999C10.4249 13.1519 9.78485 13.9999 8.89952 13.9999H8.00019Z" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
  20: (
    <SIconBase width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M9.99899 5.3125C9.87233 5.3125 9.76983 5.415 9.77149 5.54167C9.77149 5.66833 9.87399 5.77083 10.0007 5.77083C10.1273 5.77083 10.2298 5.66833 10.2298 5.54167C10.2282 5.415 10.1265 5.3125 9.99899 5.3125" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M5.76993 9.99924C5.76993 9.87257 5.66743 9.77007 5.5416 9.77174C5.41493 9.77174 5.31243 9.87424 5.31243 10.0009C5.31243 10.1276 5.41493 10.2301 5.5416 10.2301C5.66826 10.2301 5.76993 10.1267 5.76993 9.99924" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M13.3144 6.68495C13.2252 6.59578 13.0802 6.59578 12.9919 6.68578C12.9027 6.77495 12.9027 6.91995 12.9919 7.00912C13.081 7.09828 13.226 7.09828 13.3152 7.00912C13.4044 6.91912 13.4044 6.77495 13.3144 6.68495" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M7.00822 12.9909C6.91905 12.9017 6.77405 12.9017 6.68572 12.9917C6.59655 13.0809 6.59655 13.2259 6.68572 13.315C6.77488 13.4042 6.91988 13.4042 7.00905 13.315C7.09822 13.2259 7.09822 13.0809 7.00822 12.9909" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M7.00898 7.00846C7.09814 6.91929 7.09814 6.77429 7.00814 6.68596C6.91898 6.59679 6.77398 6.59679 6.68481 6.68596C6.59564 6.77513 6.59564 6.92013 6.68481 7.00929C6.77398 7.09846 6.91898 7.09846 7.00898 7.00846" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M10.0001 17.5001C5.78761 17.5001 2.38594 14.0268 2.50344 9.78761C2.61178 5.87428 5.87428 2.61178 9.78761 2.50344C14.0268 2.38594 17.5001 5.78761 17.5001 10.0001V10.8334C17.5001 11.7543 16.7543 12.5001 15.8334 12.5001H14.1143C13.0068 12.5001 12.2076 13.5601 12.5118 14.6243L12.7259 15.3751C13.0309 16.4401 12.2309 17.5001 11.1243 17.5001H10.0001Z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>   
  ),
  24: (
    <SIconBase width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M11.999 6.37515C11.847 6.37515 11.724 6.49815 11.726 6.65015C11.726 6.80215 11.849 6.92515 12.001 6.92515C12.153 6.92515 12.276 6.80215 12.276 6.65015C12.274 6.49815 12.152 6.37515 11.999 6.37515" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M6.92391 11.999C6.92391 11.847 6.80091 11.724 6.64991 11.726C6.49791 11.726 6.37491 11.849 6.37491 12.001C6.37491 12.153 6.49791 12.276 6.64991 12.276C6.80191 12.276 6.92391 12.152 6.92391 11.999" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M15.9772 8.02199C15.8702 7.91499 15.6962 7.91499 15.5902 8.02299C15.4832 8.12999 15.4832 8.30399 15.5902 8.41099C15.6972 8.51799 15.8712 8.51799 15.9782 8.41099C16.0852 8.30299 16.0852 8.12999 15.9772 8.02199" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M8.40986 15.5891C8.30286 15.4821 8.12886 15.4821 8.02286 15.5901C7.91586 15.6971 7.91586 15.8711 8.02286 15.9781C8.12986 16.0851 8.30386 16.0851 8.41086 15.9781C8.51786 15.8711 8.51786 15.6971 8.40986 15.5891" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M8.41087 8.4101C8.51787 8.3031 8.51787 8.1291 8.40987 8.0231C8.30287 7.9161 8.12887 7.9161 8.02187 8.0231C7.91487 8.1301 7.91487 8.3041 8.02187 8.4111C8.12887 8.5181 8.30287 8.5181 8.41087 8.4101" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M12 21C6.94503 21 2.86303 16.832 3.00403 11.745C3.13403 7.04903 7.04903 3.13403 11.745 3.00403C16.832 2.86303 21 6.94503 21 12V13C21 14.105 20.105 15 19 15H16.937C15.608 15 14.649 16.272 15.014 17.549L15.271 18.45C15.637 19.728 14.677 21 13.349 21H12Z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
  28:(
    <SIconBase width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M11.999 6.37515C11.847 6.37515 11.724 6.49815 11.726 6.65015C11.726 6.80215 11.849 6.92515 12.001 6.92515C12.153 6.92515 12.276 6.80215 12.276 6.65015C12.274 6.49815 12.152 6.37515 11.999 6.37515" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M6.92391 11.999C6.92391 11.847 6.80091 11.724 6.64991 11.726C6.49791 11.726 6.37491 11.849 6.37491 12.001C6.37491 12.153 6.49791 12.276 6.64991 12.276C6.80191 12.276 6.92391 12.152 6.92391 11.999" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M15.9772 8.02199C15.8702 7.91499 15.6962 7.91499 15.5902 8.02299C15.4832 8.12999 15.4832 8.30399 15.5902 8.41099C15.6972 8.51799 15.8712 8.51799 15.9782 8.41099C16.0852 8.30299 16.0852 8.12999 15.9772 8.02199" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M8.40986 15.5891C8.30286 15.4821 8.12886 15.4821 8.02286 15.5901C7.91586 15.6971 7.91586 15.8711 8.02286 15.9781C8.12986 16.0851 8.30386 16.0851 8.41086 15.9781C8.51786 15.8711 8.51786 15.6971 8.40986 15.5891" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M8.41087 8.4101C8.51787 8.3031 8.51787 8.1291 8.40987 8.0231C8.30287 7.9161 8.12887 7.9161 8.02187 8.0231C7.91487 8.1301 7.91487 8.3041 8.02187 8.4111C8.12887 8.5181 8.30287 8.5181 8.41087 8.4101" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M12 21C6.94503 21 2.86303 16.832 3.00403 11.745C3.13403 7.04903 7.04903 3.13403 11.745 3.00403C16.832 2.86303 21 6.94503 21 12V13C21 14.105 20.105 15 19 15H16.937C15.608 15 14.649 16.272 15.014 17.549L15.271 18.45C15.637 19.728 14.677 21 13.349 21H12Z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
  32: (
    <SIconBase width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M15.9985 8.49995C15.7958 8.49995 15.6318 8.66395 15.6345 8.86662C15.6345 9.06928 15.7985 9.23328 16.0012 9.23328C16.2038 9.23328 16.3678 9.06928 16.3678 8.86662C16.3652 8.66395 16.2025 8.49995 15.9985 8.49995" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M9.23189 15.9987C9.23189 15.7961 9.06789 15.6321 8.86655 15.6347C8.66389 15.6347 8.49989 15.7987 8.49989 16.0014C8.49989 16.2041 8.66389 16.3681 8.86655 16.3681C9.06922 16.3681 9.23189 16.2027 9.23189 15.9987" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M21.303 10.6961C21.1603 10.5534 20.9283 10.5534 20.787 10.6974C20.6443 10.8401 20.6443 11.0721 20.787 11.2147C20.9297 11.3574 21.1617 11.3574 21.3043 11.2147C21.447 11.0707 21.447 10.8401 21.303 10.6961" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M11.2131 20.7852C11.0705 20.6425 10.8385 20.6425 10.6971 20.7865C10.5545 20.9292 10.5545 21.1612 10.6971 21.3038C10.8398 21.4465 11.0718 21.4465 11.2145 21.3038C11.3571 21.1612 11.3571 20.9292 11.2131 20.7852" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M11.2142 11.2136C11.3568 11.071 11.3568 10.839 11.2128 10.6976C11.0702 10.555 10.8382 10.555 10.6955 10.6976C10.5528 10.8403 10.5528 11.0723 10.6955 11.215C10.8382 11.3576 11.0702 11.3576 11.2142 11.2136" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M15.9999 28.0001C9.25988 28.0001 3.81722 22.4428 4.00522 15.6601C4.17855 9.39879 9.39855 4.17879 15.6599 4.00546C22.4425 3.81746 27.9999 9.26013 27.9999 16.0001V17.3335C27.9999 18.8068 26.8066 20.0001 25.3332 20.0001H22.5826C20.8106 20.0001 19.5319 21.6961 20.0186 23.3988L20.3612 24.6001C20.8492 26.3041 19.5692 28.0001 17.7986 28.0001H15.9999Z" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
  36: (
    <SIconBase width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M15.9985 8.49995C15.7958 8.49995 15.6318 8.66395 15.6345 8.86662C15.6345 9.06928 15.7985 9.23328 16.0012 9.23328C16.2038 9.23328 16.3678 9.06928 16.3678 8.86662C16.3652 8.66395 16.2025 8.49995 15.9985 8.49995" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M9.23189 15.9987C9.23189 15.7961 9.06789 15.6321 8.86655 15.6347C8.66389 15.6347 8.49989 15.7987 8.49989 16.0014C8.49989 16.2041 8.66389 16.3681 8.86655 16.3681C9.06922 16.3681 9.23189 16.2027 9.23189 15.9987" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M21.303 10.6961C21.1603 10.5534 20.9283 10.5534 20.787 10.6974C20.6443 10.8401 20.6443 11.0721 20.787 11.2147C20.9297 11.3574 21.1617 11.3574 21.3043 11.2147C21.447 11.0707 21.447 10.8401 21.303 10.6961" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M11.2131 20.7852C11.0705 20.6425 10.8385 20.6425 10.6971 20.7865C10.5545 20.9292 10.5545 21.1612 10.6971 21.3038C10.8398 21.4465 11.0718 21.4465 11.2145 21.3038C11.3571 21.1612 11.3571 20.9292 11.2131 20.7852" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M11.2142 11.2136C11.3568 11.071 11.3568 10.839 11.2128 10.6976C11.0702 10.555 10.8382 10.555 10.6955 10.6976C10.5528 10.8403 10.5528 11.0723 10.6955 11.215C10.8382 11.3576 11.0702 11.3576 11.2142 11.2136" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M15.9999 28.0001C9.25988 28.0001 3.81722 22.4428 4.00522 15.6601C4.17855 9.39879 9.39855 4.17879 15.6599 4.00546C22.4425 3.81746 27.9999 9.26013 27.9999 16.0001V17.3335C27.9999 18.8068 26.8066 20.0001 25.3332 20.0001H22.5826C20.8106 20.0001 19.5319 21.6961 20.0186 23.3988L20.3612 24.6001C20.8492 26.3041 19.5692 28.0001 17.7986 28.0001H15.9999Z" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
  40: (
    <SIconBase width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M15.9985 8.49995C15.7958 8.49995 15.6318 8.66395 15.6345 8.86662C15.6345 9.06928 15.7985 9.23328 16.0012 9.23328C16.2038 9.23328 16.3678 9.06928 16.3678 8.86662C16.3652 8.66395 16.2025 8.49995 15.9985 8.49995" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M9.23189 15.9987C9.23189 15.7961 9.06789 15.6321 8.86655 15.6347C8.66389 15.6347 8.49989 15.7987 8.49989 16.0014C8.49989 16.2041 8.66389 16.3681 8.86655 16.3681C9.06922 16.3681 9.23189 16.2027 9.23189 15.9987" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M21.303 10.6961C21.1603 10.5534 20.9283 10.5534 20.787 10.6974C20.6443 10.8401 20.6443 11.0721 20.787 11.2147C20.9297 11.3574 21.1617 11.3574 21.3043 11.2147C21.447 11.0707 21.447 10.8401 21.303 10.6961" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M11.2131 20.7852C11.0705 20.6425 10.8385 20.6425 10.6971 20.7865C10.5545 20.9292 10.5545 21.1612 10.6971 21.3038C10.8398 21.4465 11.0718 21.4465 11.2145 21.3038C11.3571 21.1612 11.3571 20.9292 11.2131 20.7852" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M11.2142 11.2136C11.3568 11.071 11.3568 10.839 11.2128 10.6976C11.0702 10.555 10.8382 10.555 10.6955 10.6976C10.5528 10.8403 10.5528 11.0723 10.6955 11.215C10.8382 11.3576 11.0702 11.3576 11.2142 11.2136" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M15.9999 28.0001C9.25988 28.0001 3.81722 22.4428 4.00522 15.6601C4.17855 9.39879 9.39855 4.17879 15.6599 4.00546C22.4425 3.81746 27.9999 9.26013 27.9999 16.0001V17.3335C27.9999 18.8068 26.8066 20.0001 25.3332 20.0001H22.5826C20.8106 20.0001 19.5319 21.6961 20.0186 23.3988L20.3612 24.6001C20.8492 26.3041 19.5692 28.0001 17.7986 28.0001H15.9999Z" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
  48: (
    <SIconBase width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M15.9985 8.49995C15.7958 8.49995 15.6318 8.66395 15.6345 8.86662C15.6345 9.06928 15.7985 9.23328 16.0012 9.23328C16.2038 9.23328 16.3678 9.06928 16.3678 8.86662C16.3652 8.66395 16.2025 8.49995 15.9985 8.49995" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M9.23189 15.9987C9.23189 15.7961 9.06789 15.6321 8.86655 15.6347C8.66389 15.6347 8.49989 15.7987 8.49989 16.0014C8.49989 16.2041 8.66389 16.3681 8.86655 16.3681C9.06922 16.3681 9.23189 16.2027 9.23189 15.9987" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M21.303 10.6961C21.1603 10.5534 20.9283 10.5534 20.787 10.6974C20.6443 10.8401 20.6443 11.0721 20.787 11.2147C20.9297 11.3574 21.1617 11.3574 21.3043 11.2147C21.447 11.0707 21.447 10.8401 21.303 10.6961" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M11.2131 20.7852C11.0705 20.6425 10.8385 20.6425 10.6971 20.7865C10.5545 20.9292 10.5545 21.1612 10.6971 21.3038C10.8398 21.4465 11.0718 21.4465 11.2145 21.3038C11.3571 21.1612 11.3571 20.9292 11.2131 20.7852" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M11.2142 11.2136C11.3568 11.071 11.3568 10.839 11.2128 10.6976C11.0702 10.555 10.8382 10.555 10.6955 10.6976C10.5528 10.8403 10.5528 11.0723 10.6955 11.215C10.8382 11.3576 11.0702 11.3576 11.2142 11.2136" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M15.9999 28.0001C9.25988 28.0001 3.81722 22.4428 4.00522 15.6601C4.17855 9.39879 9.39855 4.17879 15.6599 4.00546C22.4425 3.81746 27.9999 9.26013 27.9999 16.0001V17.3335C27.9999 18.8068 26.8066 20.0001 25.3332 20.0001H22.5826C20.8106 20.0001 19.5319 21.6961 20.0186 23.3988L20.3612 24.6001C20.8492 26.3041 19.5692 28.0001 17.7986 28.0001H15.9999Z" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  )
}

export const IconColorPalette: FC<IIconSize> = ({ size= 24 }) => IconSize[size];
