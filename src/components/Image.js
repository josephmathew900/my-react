import React, { useState } from "react";
import PropTypes from "prop-types";

function Image({ index, image, handleRemove, show }) {
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

const types = {
  function(props, propName) {
    if (typeof props[propName] !== "function") {
      return new Error(
        `'${propName}' must be a function but you have provided ${typeof props[
          propName
        ]}`
      );
    }
  },
  number(props, propName) {
    if (typeof props[propName] !== "number") {
      return new Error(
        `'${propName}' must be a number but you have provided ${typeof props[
          propName
        ]}`
      );
    }
  },
};

Image.propTypes = {
  show: types.function,
  index: types.number,
};

export default Image;
