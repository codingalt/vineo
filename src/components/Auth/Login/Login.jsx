import React, { useMemo, useState } from 'react'
import css from "./Login.module.scss"
import {useNavigate } from "react-router-dom";
import { Button, Input } from "@nextui-org/react";
import { IoEyeOutline } from "react-icons/io5";
import { IoEyeOffOutline } from "react-icons/io5";
import { IoIosArrowBack } from "react-icons/io";
import { FaFacebookF } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { FaApple } from "react-icons/fa";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useDispatch } from 'react-redux';
import { useLoginUserMutation } from '../../../services/api/authApi/authApi';
import { setAuth } from '../../../services/slices/auth/authSlice';
import { useApiErrorHandling } from '../../../hooks/useApiErrors';
import { loginSchema } from '../../../utils/validation/AuthValidation';
import ApiErrorDisplay from '../../../hooks/ApiErrorDisplay';

const Login = () => {
  const navigate = useNavigate();
    const [isVisible, setIsVisible] = useState(false);

     const dispatch = useDispatch();
     const [loginUser, result] = useLoginUserMutation();
     const { isLoading, error, isSuccess } = result;
     const initialValues = {
       email: "",
       password: "",
     };

     const apiErrors = useApiErrorHandling(error);

     const handleSubmit = async (values) => {
       const { data } = await loginUser({
         email: values.email,
         password: values.password,
       });

       console.log(data);
       if (data?.token) {
         dispatch(setAuth(data?.user));
         localStorage.setItem("vineo_authToken", data?.token);

         navigate("/profile");
       }
     };

     const handleChange = (e, setFieldValue) => {
       const { value, name } = e.target;
       setFieldValue(name, value);
     };

    const toggleVisibility = () => setIsVisible(!isVisible);

  return (
    <div className="w-screen h-screen md:max-w-sm overflow-hidden flex justify-center items-center flex-col md:mx-auto">
      <div className={css.container}>
        <header>
          <IoIosArrowBack onClick={() => navigate(-1)} />
        </header>
        <div className={css.heading}>
          <p>Log in to Vinedo</p>
          <span>
            Welcome back! Sign in using your social account or email to continue
          </span>
        </div>

        <div>
          {/* Display Errors  */}
          <ApiErrorDisplay
            apiErrors={apiErrors}
            className="max-w-xs mx-auto -mt-2"
          />
        </div>

        <Formik
          initialValues={initialValues}
          validationSchema={loginSchema}
          onSubmit={handleSubmit}
        >
          {({ errors, setFieldValue, touched }) => (
            <Form>
              <div className={css.inputContainer}>
                <Input
                  type="email"
                  label="Your Email"
                  radius="full"
                  name="email"
                  size="lg"
                  required
                  autoComplete="off"
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
                      errors.email &&
                        touched.email &&
                        "border border-[#FF2D1B]",
                    ],
                  }}
                  onChange={(e) => handleChange(e, setFieldValue)}
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className={css.errorSpan}
                />
              </div>
              <div className={css.inputContainer}>
                <Input
                  type={isVisible ? "text" : "password"}
                  label="Password"
                  radius="full"
                  name="password"
                  size="lg"
                  required
                  autoComplete="off"
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
                      errors.password &&
                        touched.password &&
                        "border border-[#FF2D1B]",
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
                  onChange={(e) => handleChange(e, setFieldValue)}
                />
                <ErrorMessage
                  name="password"
                  component="div"
                  className={css.errorSpan}
                />
              </div>

              <div className={css.actionBtn}>
                <Button
                  isLoading={isLoading}
                  isDisabled={isLoading}
                  type="submit"
                >
                  Login
                </Button>
                <div className={css.forgot}>Forgot password?</div>
              </div>

              <div className={css.divider}>
                <div className={css.line}></div>
                <p>or</p>
                <div className={css.line}></div>
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
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}

export default Login