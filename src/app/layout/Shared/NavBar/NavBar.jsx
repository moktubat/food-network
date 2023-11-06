import React from "react";
import Image from "next/image";
import logo from "../../../assets/logo.svg";

const Navbar = () => {
  return (
    <header>
      <nav className="w-full h-16 flex items-center justify-between pl-6 pr-4 sticky z-10">
        <Image src={logo} alt="logo"></Image>

        <div className="w-96 h-10 flex items-center rounded-lg border-2 border-[#F0F2F4] px-2 py-1">
          <input
            type="text"
            name=""
            id=""
            className="w-full h-full text-sm font-normal pl-4 pr-1 outline-none placeholder:text-[#101010]"
            placeholder="Search Best Food"
          />

          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="24"
              viewBox="0 0 25 24"
              fill="none"
              className="w-8 h-8 bg-[#e65527] bg-opacity-20 p-1 rounded-md border-2 border-[#e65527] border-opacity-30"
            >
              <path
                d="M19.5 18L15.8333 14.3333M17.3889 10.4444C17.3889 11.1594 17.2481 11.8674 16.9745 12.5279C16.7008 13.1885 16.2998 13.7887 15.7942 14.2942C15.2887 14.7998 14.6885 15.2008 14.0279 15.4745C13.3674 15.7481 12.6594 15.8889 11.9444 15.8889C11.2295 15.8889 10.5215 15.7481 9.86095 15.4745C9.2004 15.2008 8.6002 14.7998 8.09464 14.2942C7.58908 13.7887 7.18804 13.1885 6.91443 12.5279C6.64082 11.8674 6.5 11.1594 6.5 10.4444C6.5 9.00049 7.07361 7.61567 8.09464 6.59464C9.11567 5.57361 10.5005 5 11.9444 5C13.3884 5 14.7732 5.57361 15.7942 6.59464C16.8153 7.61567 17.3889 9.00049 17.3889 10.4444Z"
                stroke="#E65527"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
        </div>

        <div className="flex gap-5 items-center">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              className="w-8 h-8 bg-[#e65527] bg-opacity-20 p-1 rounded-md border-2 border-[#e65527] border-opacity-30"
            >
              <path
                d="M14.1673 10.0007C14.1673 12.3018 12.3018 14.1673 10.0007 14.1673C7.69947 14.1673 5.83398 12.3018 5.83398 10.0007C5.83398 7.69947 7.69947 5.83398 10.0007 5.83398C12.3018 5.83398 14.1673 7.69947 14.1673 10.0007Z"
                fill="#E65527"
                stroke="#E65527"
                stroke-width="1.5"
                stroke-linecap="square"
              />
              <path
                d="M9.99625 2.5H10.0038M9.99675 17.5H10.0043M15.299 4.69666H15.3065M4.69507 15.3033H4.70256M4.69507 4.69706H4.70256M15.2985 15.3037H15.306M17.4925 10.0005H17.5M2.5 10.0005H2.50748"
                stroke="#E65527"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="20"
              viewBox="0 0 22 22"
              fill="none"
              className="w-8 h-8 bg-[#e65527] bg-opacity-20 p-1 rounded-md border-2 border-[#e65527] border-opacity-30"
            >
              <path
                d="M9.62498 3.95831V14.375C9.62498 15.0744 9.62498 15.4241 9.50068 15.6962C9.36336 15.9971 9.12205 16.2384 8.82117 16.3757C8.54909 16.5 8.19939 16.5 7.49998 16.5C5.63489 16.5 4.70234 16.5 3.97679 16.1686C3.17445 15.8022 2.53108 15.1588 2.16466 14.3565C1.83331 13.6309 1.83331 12.6984 1.83331 10.8333V7.49998C1.83331 5.63489 1.83331 4.70234 2.16466 3.97679C2.53108 3.17445 3.17445 2.53108 3.97679 2.16466C4.70234 1.83331 5.63489 1.83331 7.49998 1.83331C8.19939 1.83331 8.54909 1.83331 8.82117 1.95757C9.12205 2.09498 9.36336 2.33624 9.50068 2.63712C9.62498 2.9092 9.62498 3.2589 9.62498 3.95831Z"
                stroke="#101010"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M5.72936 12.8333H5.72113"
                stroke="#101010"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M16.271 9.16669H16.2628"
                stroke="#101010"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M5.72919 5.04169V7.79169M4.35419 6.41669H7.10419"
                stroke="#101010"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M12.375 18.0417V7.625C12.375 6.92559 12.375 6.57588 12.4993 6.30381C12.6366 6.00293 12.8779 5.76166 13.1788 5.62425C13.4509 5.5 13.8006 5.5 14.5 5.5C16.3651 5.5 17.2976 5.5 18.0232 5.83135C18.8255 6.19777 19.4689 6.84114 19.8353 7.64348C20.1667 8.36903 20.1667 9.3016 20.1667 11.1667V14.5C20.1667 16.3651 20.1667 17.2976 19.8353 18.0232C19.4689 18.8255 18.8255 19.4689 18.0232 19.8353C17.2976 20.1667 16.3651 20.1667 14.5 20.1667C13.8006 20.1667 13.4509 20.1667 13.1788 20.0424C12.8779 19.905 12.6366 19.6638 12.4993 19.3628C12.375 19.0908 12.375 18.7411 12.375 18.0417Z"
                stroke="#101010"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M16.2708 16.9583V14.2083M17.6458 15.5833H14.8958"
                stroke="#101010"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              className="w-8 h-8 bg-[#101010] bg-opacity-20 p-1 rounded-md"
            >
              <path
                d="M3.33301 4.16602H16.6663"
                stroke="#101010"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M3.33301 10H16.6663"
                stroke="#101010"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M3.33301 15.834H16.6663"
                stroke="#101010"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
