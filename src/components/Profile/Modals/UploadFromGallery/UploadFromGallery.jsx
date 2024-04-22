import React, { useEffect, useRef, useState } from "react";
import css from "./UploadFromGallery.module.scss";
import { BsPlusLg } from "react-icons/bs";
import { motion, AnimatePresence } from "framer-motion";
import useClickOutside from "../../../../hooks/useClickOutside";

const UploadFromGallery = () => {
  const [isOpen, setIsOpen] = useState(false);
  const modalRef = useRef(null);

 useClickOutside(modalRef, () => setIsOpen(false));

  return (
    <div className={css.uploadWrapper}>
      <button className={css.uploadGalleryBtn} onClick={() => setIsOpen(true)}>
        <BsPlusLg />
      </button>

      {/* Select Modal  */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className={`${css.selectModal} md:max-w-sm md:mx-auto`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
          >
            <motion.div
              className={css.selectCard}
              initial={{ opacity: 0, y: "100%" }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: "100%" }}
              transition={{ duration: 0.3 }}
              ref={modalRef}
            >
              <button>Select from Gallery</button>
              <button onClick={() => setIsOpen(false)}>Cancel</button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default UploadFromGallery;
