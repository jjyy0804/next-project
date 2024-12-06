'use client';
import React, { MouseEventHandler } from 'react'
interface CustomeButtonProps {
  title: string;
  containerStyles?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  btnType?: "button" | "submit";
  textStyle?: string;
  isDisabled?: boolean;
}

const CustomeButton = ({ title, containerStyles, handleClick, btnType, textStyle, isDisabled }: CustomeButtonProps) => {
  return (
    <button
      disabled={false}
      type={btnType || "button"}
      className={`custom-btn ${containerStyles}`}
      onClick={handleClick}>
      <span className={`flex-1 ${textStyle}`}>
        {title}
      </span>
    </button>
  )

}

export default CustomeButton