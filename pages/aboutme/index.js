
import React from "react";

function aboutme({}) {
  return (
    <div>
      <div
        className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row
    max-w-full justify-evenly mx-auto items-center z-0"
      >
        <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
          About me
        </h3>
      </div>
    </div>
  );
}

export default aboutme;