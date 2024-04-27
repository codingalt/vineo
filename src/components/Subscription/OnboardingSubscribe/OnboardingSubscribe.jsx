import React, { useState } from 'react'
import css from "./OnboardingSubscribe.module.scss";
import {Link, useNavigate } from 'react-router-dom';
import signupBg from "../../../assets/subscribeBg.png";
import logo from "../../../assets/logo.png";
import { motion } from "framer-motion";
import { IoMdClose } from "react-icons/io";
import { FaBars } from "react-icons/fa";

const OnboardingSubscribe = () => {
    const navigate = useNavigate();
    const [imageLoaded, setImageLoaded] = useState(false);

    const handleImageLoad = () => {
      setImageLoaded(true);
    };

  return (
    <div className="w-screen h-full md:max-w-sm scrollbar-hide overflow-x-hidden flex justify-center items-center flex-col md:mx-auto">
      <div className={css.container}>
        <header>
          <img src={logo} alt="" />
          <FaBars />
        </header>

        {/* Conditional rendering for background image */}
        <motion.div
          className={css.backgroundImage}
          style={{
            backgroundImage: `url(${signupBg})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            zIndex: 0,
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: imageLoaded ? 1 : 0 }}
          transition={{ duration: 0.5 }}
        ></motion.div>
        {/* This div is used to load the background image */}
        <div className={css.hiddenImage}>
          <img src={signupBg} onLoad={handleImageLoad} alt="" />
        </div>

        <div className={css.content}>
          <div className={css.heading}>
            <p>Subscribe to Ava Skyler</p>
            <span>
              Support your favorite people on vine o for bonus content{" "}
            </span>
          </div>

          <div className={css.subscribeContent}>
            <p>By unsubscribing you won’t </p>
            <ul>
              <li>
                <div className={css.icon}>
                  <IoMdClose />
                </div>
                <span>see user’s posts</span>
              </li>
              <li>
                <div className={css.icon}>
                  <IoMdClose />
                </div>
                <span>rate user’s content</span>
              </li>
              <li>
                <div className={css.icon}>
                  <IoMdClose />
                </div>
                <span>participate in user’s activiy</span>
              </li>
            </ul>
            <div className={css.buttons}>
              <button>Subscribe</button>
              <button>Cancel</button>
            </div>
          </div>

          <div className={css.footer}>
            <p>
              By clicking below to make this purchase, you agree to be bond by
              the <Link to={"#"}>vine o.</Link> cancel anytime Auto- renews
              monthly.
            </p>
            <button>Subscribe 14,99/month</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OnboardingSubscribe