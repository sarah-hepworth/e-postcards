"use client";

import { ReactElement } from "react";

interface Props {
  open: boolean;
  setOpen: (open: boolean) => void;
}

export const HamburgerMenuCssAnimationOnly = (props: Props): ReactElement => {
  return (
    <button className="z-[2]" onClick={(): void => props.setOpen(!props.open)}>
      <svg width="23" height="23" viewBox="0 0 23 23">
        <path
          className="ease-in duration-300"
          strokeWidth="3"
          stroke="black"
          d={props.open ? "M 3 16.5 L 17 2.5" : "M 2 2.5 L 20 2.5"}
          strokeLinecap="round"
        />
        <path
          strokeWidth="3"
          stroke="black"
          strokeLinecap="round"
          className={`ease-in duration-300 ${props.open ? "opacity-0" : "opacity-100"}`}
          d="M 2 9.423 L 20 9.423"
        />
        <path
          className="ease-in duration-300"
          strokeWidth="3"
          stroke="black"
          strokeLinecap="round"
          d={props.open ? "M 3 2.5 L 17 16.346" : "M 2 16.346 L 20 16.346"}
        />
      </svg>
      <p className={`text-xs ease-in duration-300 ${props.open ? "opacity-0" : "opacity-100"}`}>menu</p>
    </button>
  );
};
