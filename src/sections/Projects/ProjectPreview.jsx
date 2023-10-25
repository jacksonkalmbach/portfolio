import React from "react";

export default function ProjectPreview() {
  return (
    <div className="min-w-[80%] rounded-xl flex flex-col justify-center items-center shadow">
      <img src="https://via.placeholder.com/350" alt="placeholder" />
      <h1>Project Name</h1>
      <p>Project Description</p>
      <p>Project Tech</p>
    </div>
  );
}
