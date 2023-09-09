import React, { useState } from "react";
import { Popover } from "@headlessui/react";
import { ChevronDownIcon, UserIcon } from "@heroicons/react/20/solid";

function MinimalistNav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <header className="bg-slate-50">
        <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-6 pb-6">
          <div className="flex lg:flex-1">
            {" "}
            {/* Div for company logo */}
            <a href="#">
              <span className="sr-only">Your Company</span>
              <img
                className="h-8 w-auto"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                alt=""
              />
            </a>
          </div>
          <div className="flex lg:hidden">
            {" "}
            {/* Div for mobile menu */}
            <button
              type="button"
              className="inline-flex justify-center items-center"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 22 22"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </button>
          </div>
          <div className="hidden lg:flex items-center justify-evenly px-2">
            <ul className="flex items-center justify-center">
              <li className="flextext-md font-semibold leading-6 text-gray-900 px-2">
                <Popover className="relative">
                  <Popover.Button className="flex items-center gap-x-1 text-md font-semibold leading-6 text-gray-900">
                    Templates
                    <ChevronDownIcon
                      className="h-5 w-5 flex-none text-gray-400"
                      aria-hidden="true"
                    />
                  </Popover.Button>
                </Popover>
              </li>
              <li className="flex text-md font-semibold leading-6 text-gray-900 px-2">
                <a href="/">About</a>
              </li>
              <li className="flex text-md font-semibold leading-6 text-gray-900 px-2">
                <a href="/">
                  <UserIcon
                    className="h-6 w-6 flex-none text-gray-400 border-solid border-2 rounded-xl"
                    aria-hidden="true"
                  />
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
}

export default MinimalistNav;
