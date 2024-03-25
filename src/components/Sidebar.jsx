import React from "react";
import { Link } from "react-router-dom";

function Sidebar({ isOpen, setIsOpen }) {
  return (
    <div
      className={`block lg:hidden fixed inset-0 h-screen w-full bg-dark text-white z-50 transition-transform ease duration-200 ${
        isOpen ? "" : "translate-x-[48rem]"
      }`}
    >
      <img
        src="/icons/close_white.svg"
        alt=""
        className="w-10 absolute right-0 mx-8 my-6"
        onClick={() => setIsOpen(false)}
      />
      <div className="flex flex-col h-full">
        <aside className="flex-grow flex justify-center items-center">
          <ul className="text-3xl font-semibold flex flex-col gap-16">
            <li>
              <div className="flex gap-2 cursor-pointer">
                Industries
                <img
                  src="/icons/arrow_forward_white.svg"
                  alt=""
                  className="mt-1"
                />
              </div>
            </li>
            <li>
              <div className="flex gap-2 cursor-pointer">
                Product
                <img
                  src="/icons/arrow_forward_white.svg"
                  alt=""
                  className="mt-1"
                />
              </div>
            </li>
            <li>
              <a href="#calculator" onClick={() => setIsOpen(false)}>
                Calculator
              </a>
            </li>
          </ul>
        </aside>
        <aside className="flex justify-evenly items-center w-full px-8 py-16">
          <Link to="login">LOGIN IN</Link>
          <Link
            to="contact"
            className="border-[1.5px] border-white px-6 py-3 rounded-full flex gap-1.5"
          >
            Request A Demo
            <img src="/icons/arrow_forward_white.svg" alt="arrow" />
          </Link>
        </aside>
      </div>
    </div>
  );
}

export default Sidebar;
