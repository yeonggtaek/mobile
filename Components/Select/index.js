import React, { useState } from "react";
import style from "./select.module.css";

export const Select = ({ selected, options, onChange }) => {
  const [open, setOpen] = useState(false);
  const handleOpenClick = () => setOpen(!open);
  const handleOptionClick = (option) => {
    onChange(option);
    setOpen(false);
  };
  return (
    <div className={style.selectContainer}>
      <div className={style.selected} onClick={handleOpenClick}>
        {selected.label}
      </div>
      <ul className={`${style.options} ${open ? style.open : style.hide}`}>
        {options.map((option) => (
          <li
            key={option.value}
            onClick={() => {
              handleOptionClick(option);
            }}
          >
            {option.label}
          </li>
        ))}
      </ul>
    </div>
  );
};