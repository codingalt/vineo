import React, { useState } from "react";
import css from "./Onboarding.module.scss";
import logo from "../../assets/logo.png";
import { Input } from "@nextui-org/react";
import { Form } from "react-router-dom";
import warning from "../../assets/warning.png"

const EnterName = () => {
   const [inputValue, setInputValue] = useState("");
   const maxLength = 30;

   const handleChange = (e) => {
     const value = e.target.value;
     if (value.length <= maxLength) {
       setInputValue(value);
     }
   };

  return (
    <div className={css.wrapper}>
      <div className={css.logo}>
        <img src={logo} alt="" />
      </div>

      <Form>
        <div className={css.input}>
          <Input
            label="Name"
            radius="full"
            onChange={handleChange}
            maxLength={maxLength}
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
            endContent={
              <div className="pointer-events-none flex items-center">
                <span className="text-[#A1A3A7] text-tiny">{`${inputValue.length}/${maxLength}`}</span>
              </div>
            }
          />
          <div className="error text-[10px] flex items-center justify-center text-center mx-auto mt-1 text-[#FF0000]">
            <img src={warning} className="mr-1" alt="" />
            <span className="mt-0.5">
            Only letters, numbers, underscores, or periods are allowed
            </span>
          </div>
        </div>
      </Form>
    </div>
  );
};

export default EnterName;
