import React, { useState } from "react";

export default function Image({ index, image, handleRemove, show }) {
  const [isHovering, setisHovering] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setisHovering(true)}
      onMouseLeave={() => setisHovering(false)}
    >
      <i
        className={`fas fa-times absolute right-0 cursor-pointer opacity-25 hover:opacity-100 
                    ${isHovering ? "" : "hidden"}`}
        onClick={() => handleRemove(index)}
      ></i>
      <img onClick={show} src={image} width="100%" height="auto" alt="img ld" />
    </div>
  );
}
