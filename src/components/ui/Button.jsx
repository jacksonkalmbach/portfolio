import React from "react";

export default function Button({ text, path }) {
  const handleButtonClick = () => {
    window.open(path, "_blank");
  };

  return (
    <button
      className="px-3 py-2 flex justify-center items-center rounded-xl bg-gray-200 active:scale-95"
      onClick={handleButtonClick}
    >
      {text}
    </button>
  );
}
