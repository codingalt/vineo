import React, { useEffect, useMemo, useRef, useState } from "react";
import css from "./CreatorsTool.module.scss";
import { motion, AnimatePresence } from "framer-motion";
import useClickOutside from "../../hooks/useClickOutside";
import { useRefundSubscriptionMutation } from "../../services/api/creatorsApi/creatorsApi";
import { useNavigate, useParams } from "react-router-dom";
import {Button} from "@nextui-org/react";
import { useApiErrorHandling } from "../../hooks/useApiErrors";
import { toastSuccess } from "../Toast/Toast";

const ConfirmModal = ({
  isConfirmModal,
  setIsConfirmModal,
  creatorId,
  text,
  withdraw,
}) => {
  const navigate = useNavigate();
  const modalRef = useRef(null);
  const [refundSubscription, res] = useRefundSubscriptionMutation({
    creatorId: creatorId,
  });
  const { isLoading, error, isSuccess } = res;

  const apiErrors = useApiErrorHandling(error);

  useEffect(() => {
    const handleBeforeUnload = () => {
      localStorage.setItem("isPageRefreshed", "true");
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);

  useEffect(() => {
    const isPageRefreshed = localStorage.getItem("isPageRefreshed");
    if (isPageRefreshed) {

      if(withdraw){
        navigate(-1);
      }
      localStorage.removeItem("isPageRefreshed"); 
    }
  }, []);

  useMemo(() => {
    if (isSuccess) {
      setIsConfirmModal(false);
      window.location.reload(false);
    }
  }, [isSuccess]);

  const handleConfirm = async () => {
    await refundSubscription({ creatorId: creatorId });
  };

  useClickOutside(modalRef, () => setIsConfirmModal(false));
  return (
    <div className={css.ratingWrapper}>
      {/* Select Modal  */}
      <AnimatePresence>
        {isConfirmModal && (
          <motion.div
            className={`${css.selectModal} md:max-w-sm md:mx-auto`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
          >
            <motion.div
              className={css.selectCard}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              transition={{ duration: 0.3 }}
              ref={modalRef}
            >
              <p>{text}</p>
              <div className={css.buttons}>
                <button onClick={() => setIsConfirmModal(false)}>Cancel</button>
                <Button onClick={handleConfirm} isLoading={isLoading} size="sm">
                  Confirm
                </Button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ConfirmModal