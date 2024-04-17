import React from "react";
import css from "./SignupHome.module.scss"
import logo from "../../../assets/logo.png";
import { FaFacebookF } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { FaApple } from "react-icons/fa";
import { Link } from "react-router-dom";

const SignupHome = () => {
  return (
    <div className="w-screen h-screen max-w-sm overflow-hidden flex justify-center items-center flex-col mx-auto">
      <div className={css.container}>
        <header>
          <img src={logo} alt="" />
        </header>

        <div className={css.content}>
          <div className={css.heading}>
            <p>Unleash Desire & Forge Instant Connections.</p>
            <span>Unlock instant, passionate interactions effortlessly.</span>
          </div>

          <div className={css.socials}>
            <div className={css.icon}>
              <FaFacebookF />
            </div>
            <div className={css.icon}>
              <FaGoogle />
            </div>
            <div className={css.icon}>
              <FaApple />
            </div>
          </div>

          <div className={css.divider}>
            <div className={css.line}></div>
            <p>or</p>
            <div className={css.line}></div>
          </div>

          <div className={css.buttons}>
            <button className={css.firstBtn}>Sign up with email</button>
            <p>Existing account? <Link to={"#"}>Log in</Link></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupHome;
