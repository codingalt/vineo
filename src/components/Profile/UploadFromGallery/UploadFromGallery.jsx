import React from 'react'
import css from "./UploadFromGallery.module.scss";
import { BsPlusLg } from "react-icons/bs";

const UploadFromGallery = () => {
  return (
    <div className={css.uploadWrapper}>
      <button className={css.uploadGalleryBtn}>
        <BsPlusLg />
      </button>
    </div>
  );
}

export default UploadFromGallery