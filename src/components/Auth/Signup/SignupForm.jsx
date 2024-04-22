import React, { useState } from "react";
import css from "./SignupForm.module.scss";
import { Form, useNavigate } from "react-router-dom";
import { Input } from "@nextui-org/react";
import { IoEyeOutline } from "react-icons/io5";
import { IoEyeOffOutline } from "react-icons/io5";
import { IoIosArrowBack } from "react-icons/io";

const SignupForm = () => {
    const navigate = useNavigate();
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => setIsVisible(!isVisible);

  return (
    <div className="w-screen h-screen md:max-w-sm overflow-hidden flex justify-center items-center flex-col md:mx-auto">
      <div className={css.container}>
        <header>
          <IoIosArrowBack onClick={()=> navigate(-1)} />
        </header>
        <div className={css.heading}>
          <p>Sign up with Email</p>
          <span>
            Start experiencing freedom today by signing up for our app!
          </span>
        </div>

        <Form>
          <div className={css.inputContainer}>
            <Input
              type="email"
              label="Your Email"
              radius="full"
              size="lg"
              classNames={{
                label: "text-[#A1A3A7] text-small",
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
                  "border border-[#FF2D1B]",
                ],
              }}
            />
            <div className={css.errorSpan}>Invalid email address</div>
          </div>
          <div className={css.inputContainer}>
            <Input
              type={isVisible ? "text" : "password"}
              label="Password"
              radius="full"
              size="lg"
              classNames={{
                label: "text-[#A1A3A7] text-small",
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
                <button
                  className="focus:outline-none"
                  type="button"
                  onClick={toggleVisibility}
                >
                  {isVisible ? (
                    <IoEyeOffOutline className="text-2xl text-default-400 pointer-events-none" />
                  ) : (
                    <IoEyeOutline className="text-2xl text-default-400 pointer-events-none" />
                  )}
                </button>
              }
            />
          </div>
          <div className={css.inputContainer}>
            <Input
              type={isVisible ? "text" : "password"}
              label="Confirm Password"
              radius="full"
              size="lg"
              classNames={{
                label: "text-[#A1A3A7] text-small",
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
                <button
                  className="focus:outline-none"
                  type="button"
                  onClick={toggleVisibility}
                >
                  {isVisible ? (
                    <IoEyeOffOutline className="text-2xl text-default-400 pointer-events-none" />
                  ) : (
                    <IoEyeOutline className="text-2xl text-default-400 pointer-events-none" />
                  )}
                </button>
              }
            />
          </div>
          <div className={css.actionBtn}>
            <button onClick={() => navigate("/login")}>
              Create on account
            </button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default SignupForm;
