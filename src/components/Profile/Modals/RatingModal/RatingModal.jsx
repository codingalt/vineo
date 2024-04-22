import React, { useEffect, useRef, useState } from "react";
import css from "./RatingModal.module.scss";
import { motion, AnimatePresence } from "framer-motion";
import useClickOutside from "../../../../hooks/useClickOutside";
import Rating from "@mui/material/Rating";
import StarBorderIcon from '@mui/icons-material/StarBorder';

const RatingModal = ({ isRatingModal, setIsRatingModal }) => {
  const modalRef = useRef(null);
   const [ratingValue, setRatingValue] = useState(3);

  useClickOutside(modalRef, () => setIsRatingModal(false));

  return (
    <div className={css.ratingWrapper}>
      {/* Select Modal  */}
      <AnimatePresence>
        {isRatingModal && (
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
              <p>Rate your experience!</p>
              <div>
                <Rating
                  name="simple-controlled"
                  size="large"
                  emptyIcon={
                    <StarBorderIcon
                      style={{ color: "rgba(255,255,255,0.4)" }}
                      color="#BDC5CD"
                      fontSize="inherit"
                    />
                  }
                  value={ratingValue}
                  onChange={(event, newValue) => {
                    setRatingValue(newValue);
                  }}
                />
              </div>
              <button onClick={() => setIsRatingModal(false)}>Cancel</button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default RatingModal;
