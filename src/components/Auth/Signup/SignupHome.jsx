import React, { useEffect, useState } from "react";
import css from "./SignupHome.module.scss"
import logo from "../../../assets/logo.png";
import { Link, useNavigate } from "react-router-dom";
import signupBg from "../../../assets/signupBg.png";
import { motion } from "framer-motion";
import { FcGoogle } from "react-icons/fc";

const SignupHome = () => {
    const navigate = useNavigate();
    const [imageLoaded, setImageLoaded] = useState(false);

     const handleImageLoad = () => {
       setImageLoaded(true);
     };

  return (
    <div className="w-screen h-screen md:max-w-sm overflow-hidden flex justify-center items-center flex-col md:mx-auto">
      <div
        className={css.container}
      >
        <header>
          <img src={logo} alt="" />
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
            <p>Unleash Desire & Forge Instant Connections.</p>
            <span>Unlock instant, passionate interactions effortlessly.</span>
          </div>

          {/* <div className={css.socials}>
            <div className={css.icon}>
              <FaFacebookF />
            </div>
            <div className={css.icon}>
              <FaGoogle />
            </div>
            <div className={css.icon}>
              <FaApple />
            </div>
          </div> */}

          <div className={css.signupWithGoogle}>
            <button>
              <FcGoogle fontSize={23} />
              <span>Continue with Google</span>
            </button>
          </div>

          <div className={css.divider}>
            <div className={css.line}></div>
            <p>or</p>
            <div className={css.line}></div>
          </div>

          <div className={css.buttons}>
            <button
              onClick={() => navigate("/signup")}
              className={css.firstBtn}
            >
              Sign up with email
            </button>
            <p>
              Existing account? <Link to={"#"}>Log in</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupHome;
