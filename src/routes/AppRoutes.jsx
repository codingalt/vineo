import React from "react";
import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../pages/ErrorPage";
import Root from "../pages/Root";
import OnboardingPage from "../pages/OnboardingPage";
import SignupHomePage from "../pages/SignupHomePage";
import SignupFormPage from "../pages/SignupFormPage";
import LoginPage from "../pages/LoginPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,

    children: [
      { index: true, element: <OnboardingPage /> },
      {
        path: "getStarted",
        element: <SignupHomePage />,
      },
      {
        path: "signup",
        element: <SignupFormPage />,
      },
      {
        path: "login",
        element: <LoginPage />,
      },
    ],
  },
]);
