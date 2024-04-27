import React from 'react'
import css from "./EditUserProfile.module.scss";
import { IoChevronForward } from "react-icons/io5";
import { IoCopyOutline } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';

const Fields = ({data, isLoading}) => {
    const navigate = useNavigate();
    
  return (
    <div className={css.fields}>
      <div className={css.heading}>About You</div>

      <div
        className={css.input}
        onClick={() => data && navigate(`/edit/name/${data?.user?.name}`)}
      >
        <p>Name</p>
        <div className={css.right}>
          <p>{data?.user?.name}</p>
          <IoChevronForward />
        </div>
      </div>

      <div
        className={css.input}
        onClick={() =>
          data && navigate(`/edit/username/${data?.user?.username}`)
        }
      >
        <p>Username</p>
        <div className={css.right}>
          <p>{data?.user?.username}</p>
          <IoChevronForward />
        </div>
      </div>

      <div className={css.copyToClipboard}>
        <span>vinedo.com/@christine_hay</span>
        <IoCopyOutline />
      </div>

      <div
        className={css.input}
        onClick={() => data && navigate(`/edit/price/${data?.user?.rate}`)}
      >
        <p>Set Your Price</p>
        <div className={css.right}>
          <p>{data?.user?.rate}</p>
          <IoChevronForward />
        </div>
      </div>

      <div
        className={css.input}
        onClick={() => data && navigate("/creators-tool")}
      >
        <p>Creator’s Tool</p>
        <div className={css.right}>
          <p>Earnings</p>
          <IoChevronForward />
        </div>
      </div>
    </div>
  );
}

export default Fields