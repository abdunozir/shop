import React from "react";
import { useRef } from "react";
import { useState } from "react";

export default function ItemCounter({ setCount, count }) {
  let inputRef = useRef(null);

  let Add = () => {
    setCount((prev) => {
      return prev + 1;
    });
    inputRef.current.value = count;
  };
  let Separate = () => {
    if (count !== 0) setCount(count - 1);
    inputRef.current.value = count;
  };
  let Change = (e) => {
    setCount(+e.target.value);
  };
  return (
    <div className="d-flex">
      <input
        onChange={Change}
        className="violet__input-place"
        type="text"
        defaultValue={count}
        ref={inputRef}
      />
      <div className="violet__range-btns">
        <button className="violet__range-btn" onClick={Add}>
          +
        </button>
        <button className="violet__range-btn" onClick={Separate}>
          -
        </button>
      </div>
    </div>
  );
}
