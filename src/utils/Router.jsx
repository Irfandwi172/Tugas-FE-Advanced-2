import Header from "../components/Header";
import App from "../App";
import LoginPage from "../pages/Login";
import RegisterPage from "../pages/Register";
import HomePage from "../pages/Home";
import CourseForm from "../pages/CourseForm";
import { createBrowserRouter } from "react-router-dom";
import Page404 from "../pages/Page404";
import Product from "../pages/Product";
import Desain from "../pages/Desain";
import Checkout from "../pages/Checkout";
import Pay from "../pages/Pay";
import ChangeMethode from "../pages/ChangeMethode";
import PaymentDone from "../pages/PaymentDone";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Header showProfile={true} />,
    children: [
      { path: "home", element: <HomePage /> },
      { path: "product", element: <Product /> },
      { path: "desain", element: <Desain /> },
      { path: "course/add", element: <CourseForm /> },
      { path: "course/edit/:id", element: <CourseForm /> },
      { path: "*", element: <Page404 /> },
    ],
  },
  {
    path: "/",
    element: <Header showProfile={false} />,
    children: [
      { index: true, element: <App /> },
      { path: "login", element: <LoginPage /> },
      { path: "register", element: <RegisterPage /> },
    ],
  },
  {
  path: "/",
  element: <Header showMethod={true} currentStep={1} />,
  children: [
    { path: "checkout", element: <Checkout /> },
    { path: "change", element: <ChangeMethode /> },
  ],
},
{
  path: "/",
  element: <Header showMethod={true} currentStep={2} />,
  children: [
    { path: "pay", element: <Pay /> },
  ],
},
{
  path: "/",
  element: <Header showMethod={true} currentStep={3} />,
  children: [
    { path: "selesai", element: <PaymentDone /> },
  ],
},
]);

export default router;
