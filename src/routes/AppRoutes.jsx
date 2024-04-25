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

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,

    children: [
      { index: true, element: <SignupHomePage /> },
      {
        path: "getStarted",
        element: <OnboardingPage />,
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
        element: <ProfilePage />,
      },
      {
        path: "profile/edit",
        element: <EditProfilePage />,
      },
      {
        path: "edit/name/:value",
        element: <EditName />,
      },
      {
        path: "edit/username/:value",
        element: <EditUserName />,
      },
      {
        path: "edit/price/:value",
        element: <EditPrice />,
      },
      {
        path: "posts/:postId",
        element: <ViewPostPage />,
      },
      {
        path: "videos/:videoId",
        element: <ViewVideoPostPage />,
      },
      {
        path: "search/creators",
        element: <SearchCreatorsPage />,
      },
      {
        path: "/creators-tool",
        element: <CreatorsToolPage />,
      },
      {
        path: "/postPreview",
        element: <PostPreviewPage />,
      },
    ],
  },
]);
