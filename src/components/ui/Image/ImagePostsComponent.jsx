import React, { useEffect, useState } from "react";
import { Blurhash } from "react-blurhash";
import blankImage from "../../../assets/blank-img.jpg";

const ImageComponent = ({ src, className, radius }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.onload = () => {
      setImageLoaded(true);
    };

    img.onerror = () => {
      console.error("Error loading image:", src);
      setIsError(true);
    };
    img.src = src;
  }, [src]);

  return (
    <>
      <div
        style={{
          display: imageLoaded || isError ? "none" : "inline",
          borderRadius: radius ? radius : "0px",
        }}
        className="h-full w-full"
      >
        <div
          role="status"
          class=" animate-pulse rtl:space-x-reverse w-full h-full"
        >
          <div class="flex border-1 border-gray-800 items-center justify-center w-full h-full bg-gray-300 sm:w-96 dark:bg-gray-700">
            <svg
              class="w-[60%] h-[60%] rounded-none text-gray-200 dark:text-gray-600"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 18"
              style={{ borderRadius: "0" }}
            >
              <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
            </svg>
          </div>
        </div>
      </div>

      <div
        style={{
          display: !isError ? "none" : "inline",
          borderRadius: radius ? radius : "0px",
        }}
      >
        <img
          src={blankImage}
          className={className}
          alt=""
          style={{
            overflow: "hidden",
          }}
        />
      </div>

      <img
        src={src}
        className={className}
        alt=""
        style={{ display: !imageLoaded ? "none" : "inline" }}
      />
    </>
  );
};

export default ImageComponent;