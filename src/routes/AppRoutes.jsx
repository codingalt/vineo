import React from "react";
import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../pages/ErrorPage";
import Root from "../pages/Root";
import OnboardingPage from "../pages/OnboardingPage";
import SignupHomePage from "../pages/SignupHomePage";
import SignupFormPage from "../pages/SignupFormPage";
import LoginPage from "../pages/LoginPage";
import ProfilePage from "../pages/ProfilePage";
import ViewPostPage from "../pages/ViewPostPage";
import SearchCreatorsPage from "../pages/SearchCreatorsPage";
import CreatorsToolPage from "../pages/CreatorsToolPage";
import PostPreviewPage from "../pages/PostPreviewPage";
import ViewVideoPostPage from "../pages/ViewVideoPostPage";
import EditProfilePage from "../pages/EditProfilePage";
import EditName from "../components/EditProfile/EditFields/EditName";
import EditUserName from "../components/EditProfile/EditFields/EditUsername";
import EditPrice from "../components/EditProfile/EditFields/EditPrice";
import OnboardingSubscribePage from "../pages/OnboardingSubscribePage";
import Protected from "../components/Protected/Protected";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,

    children: [
      { index: true, element: <SignupHomePage /> },
      {
        path: "getStarted",
        element: <Protected Component={OnboardingPage} />,
      },
      {
        path: "signup",
        element: <SignupFormPage />,
      },
      {
        path: "login",
        element: <LoginPage />,
      },
      {
        path: "profile",
        element: <Protected Component={ProfilePage} />,
      },
      {
        path: "profile/edit",
        element: <Protected Component={EditProfilePage} />,
      },
      {
        path: "edit/name/:value",
        element: <Protected Component={EditName} />,
      },
      {
        path: "edit/username/:value",
        element: <Protected Component={EditUserName} />,
      },
      {
        path: "edit/price/:value",
        element: <Protected Component={EditPrice} />,
      },
      {
        path: "posts/:postId",
        element: <Protected Component={ViewPostPage} />,
      },
      {
        path: "videos/:postId",
        element: <Protected Component={ViewVideoPostPage} />,
      },
      {
        path: "search/creators",
        element: <Protected Component={SearchCreatorsPage} />,
      },
      {
        path: "/creators-tool",
        element: <Protected Component={CreatorsToolPage} />,
      },
      {
        path: "/postPreview",
        element: <Protected Component={PostPreviewPage} />,
      },
      {
        path: "/subscription",
        element: <Protected Component={OnboardingSubscribePage} />,
      },
    ],
  },
]);
