import React from "react";
import item2 from "../assets/items/item8.png";
import item5 from "../assets/items/item9.png";

function Card({ isOpen, toggleCard, onShortClick, onLongClick }) {
  return (
    <div className={`card py-7 px-7 w-49 ${isOpen ? "block" : "hidden"}`}>
      <div className="card-body bg-white border border-black">
        <div className=" bg-black flex flex-row justify-between">
          <div>
            <p className=" px-2 text-white">Sleeve</p>
          </div>
          <div className="card-actions">
            <button
              className="btn btn-square btn-sm text-white "
              onClick={toggleCard}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>

        <div className="flex flex-col ">
          <button
            className="flex flex-row items-center hover:bg-[#E2EFFF] focus:bg-[#E2EFFF]"
            onClick={onShortClick}
          >
            <img className=" w-16" src={item5} alt="" />
            <p className=" py-6 px-10 items-center">Short Sleeve</p>
          </button>
          <button
            className="flex flex-row items-center hover:bg-[#E2EFFF] focus:bg-[#E2EFFF]"
            onClick={onLongClick}
          >
            <img className=" w-16" src={item2} alt="" />
            <p className=" py-6 px-10 items-center ">Long Sleeve</p>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
