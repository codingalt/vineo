import React from 'react'
import css from "./Onboarding.module.scss";
import logo from "../../assets/logo.png";
import camera from "../../assets/camera.png";

const UploadPicture = () => {
  return (
    <div className={css.wrapper}>
      <div className={css.logo}>
        <img src={logo} alt="" />
      </div>

      <div className={css.upload}>
        <p>Upload profile picture</p>
        <div className={css.uploadBox}>
          <img src={camera} alt="" />
        </div>
      </div>
    </div>
  );
}

export default UploadPicture