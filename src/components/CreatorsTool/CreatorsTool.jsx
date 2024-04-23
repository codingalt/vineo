import React from "react";
import css from "./CreatorsTool.module.scss";
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const CreatorsTool = () => {
    const navigate = useNavigate();

  return (
    <div className={css.wrapper}>
      <header>
        <IoIosArrowBack onClick={()=> navigate(-1)} />
        <p>Creator’s tool</p>
      </header>

      <div className={css.card}>
        <p>Balance</p>
        <div className={css.amount}>
          <span>€</span>
          <p>12.04</p>
          <span>K</span>
        </div>
        <button>WITHDRAW</button>
      </div>
    </div>
  );
};

export default CreatorsTool;
