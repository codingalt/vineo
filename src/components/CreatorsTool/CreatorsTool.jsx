import React, { useState } from "react";
import css from "./CreatorsTool.module.scss";
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate, useParams } from "react-router-dom";
import { useGetCreatorDetailsByIdQuery } from "../../services/api/creatorsApi/creatorsApi";
import { ClipLoader } from "react-spinners";
import ConfirmModal from "./ConfirmModal";

const CreatorsTool = () => {
  const navigate = useNavigate();
  const { creatorId } = useParams();
  const { data, isLoading } = useGetCreatorDetailsByIdQuery(creatorId);
  const [isConfirmModal, setIsConfirmModal] = useState();

  return (
    <div className={css.wrapper}>
      {/* Confirmation Modal  */}
      <ConfirmModal
        isConfirmModal={isConfirmModal}
        setIsConfirmModal={setIsConfirmModal}
        creatorId={creatorId}
        text={"Are you sure you want to withdraw?"}
        withdraw={true}
      />
      <header>
        <IoIosArrowBack onClick={() => navigate(-1)} />
        <p>Creator’s tool</p>
      </header>

      <div className={css.card}>
        <p>Balance</p>
        <div className={css.amount} style={{ height: "30px" }}>
          {isLoading ? (
            <ClipLoader color="#3632FF" size={20} speedMultiplier={0.95} />
          ) : (
            <>
              <span>€</span>
              <p>{data?.user.rate}</p>
              <span>K</span>
            </>
          )}
        </div>
        <button onClick={() => setIsConfirmModal(true)}>WITHDRAW</button>
      </div>
    </div>
  );
};

export default CreatorsTool;
