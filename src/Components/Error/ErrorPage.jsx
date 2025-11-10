import React from "react";
import Lottie from "lottie-react";
import error from "../../../public/Error 404.json";
import { Link } from "react-router";
const ErrorPage = () => {
  return (
    <div>
      <div className="flex flex-col justify-center items-center">
        <div className="w-[800px]">
          <Lottie animationData={error} loop={true} />
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-6xl font-bold text-center">Page Not Found!</h1>
        <p className="text-[16px] font-medium text-center mt-8 ">
          Oops! The page you are looking for does not exist. It might have been
          moved or deleted.
        </p>
      </div>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
