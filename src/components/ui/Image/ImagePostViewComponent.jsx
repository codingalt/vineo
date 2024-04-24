import React, { useEffect, useState } from "react";
import { Blurhash } from "react-blurhash";
import blankImage from "../../../assets/blank-img.jpg";
import {RotateSpinner} from "react-spinners-kit"
import {ClipLoader} from "react-spinners"

const ImagePostViewComponent = ({ src, className, radius }) => {
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
        <div className="h-full w-full -mt-6 flex items-center justify-center">
          <ClipLoader color="#3632FF" size={45} speedMultiplier={0.9} />
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

export default ImagePostViewComponent;
