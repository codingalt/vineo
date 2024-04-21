import React, { useState } from "react";
import "./HeartButton.scss";
import { FaHeart } from "react-icons/fa";

const HeartButton = () => {
  const [liked, setLiked] = useState(false);

  return (
    <>
      <div className="h-[40px] w-7 flex items-center justify-center">
        <input id="toggle-heart" type="checkbox" />
        {/* <label htmlFor="toggle-heart">❤</label> */}
        <label htmlFor="toggle-heart">
          <FaHeart />
        </label>
      </div>
    </>
  );
};

export default HeartButton;
