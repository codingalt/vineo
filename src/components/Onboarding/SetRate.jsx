import React, { useState } from 'react'
import css from "./Onboarding.module.scss";
import logo from "../../assets/logo.png";
import { Input } from '@nextui-org/react';

const SetRate = () => {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
      setInputValue(value);
  };

  return (
    <div className={css.wrapper}>
      <div className={css.logo}>
        <img src={logo} alt="" />
      </div>

      <div className={css.rate}>
        <p>Set your rate</p>
        <div className={css.inputRate}>
          <Input
            type="number"
            label="Price"
            radius="full"
            onChange={handleChange}
            classNames={{
              label: "text-[#A1A3A7]",
              input: [
                "bg-[#292734]",
                "text-white/90",
                "placeholder:text-[#A1A3A7]",
                "hover:bg-[#292734]",
                "group[data-has-value=true] group-data-[has-value=true]:text-white",
              ],
              innerWrapper: "bg-[#292734] text-white hover:bg-[#292734]",
              inputWrapper: [
                "bg-[#292734]",
                "group-data-[focused=true]:bg-[#292734]",
                "group-data-[hover=true]:bg-[#292734]",
                "hover:bg-[#292734]",
                "focus-within:!bg-[#292734] text-white",
                "text-white",
                "group[data-has-value=true] group-data-[has-value=true]:text-white",
                "!cursor-text",
              ],
            }}
            startContent={
              <div className="pointer-events-none flex items-center">
                <span className="text-white text-[12px]">
                  <span className='mr-2'>€</span>61,99v
                </span>
              </div>
            }
            endContent={
              <div className="pointer-events-none flex items-center">
                <span className="text-white text-tiny">/month</span>
              </div>
            }
          />

          <div className={css.rateValue}>€ 61,99 / month</div>
        </div>
      </div>
    </div>
  );
}

export default SetRate