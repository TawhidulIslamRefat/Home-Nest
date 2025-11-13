import React, { use, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../../Contexts/AuthContext";

const ForgetPassword = () => {
  const navigate = useNavigate();
  const { forgetPassword } = use(AuthContext);
  const location = useLocation();
  const preEmail = location.state?.email || "";
  const [email, setEmail] = useState(preEmail);

  const handleForgetPassword = (event) => {
    event.preventDefault();
    if (!email) {
      alert("Please Enter Your Email First");
      return;
    }
    forgetPassword(email)
      .then(() => {
        alert("Password Reset email sent! Check your Inbox", {
          onClose: () => navigate("/login"),
        });
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="card bg-base-100 w-[95%]   md:w-[80%] lg:w-[60%]  2xl:w-[35%] rounded-[5px] shadow-2xl ">
        <div className="card-body px-15 flex-1">
          <h1 className=" text-xl md:text-2xl lg:text-4xl font-semibold text-center mt-[30px] pb-10 border-b border-base-300 px-5">
            Forget Your Password
          </h1>
          <form onSubmit={handleForgetPassword}>
            <fieldset className="fieldset">
              <label className="label text-sm font-semibold text-[#403F3F] mb-3 dark:text-gray-300">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="input w-full text-[16px] font-normal mb-5 bg-[#F3F3F3] text-gray-500"
                placeholder="Enter your email address"
              />
              <p className="text-xs md:text-[16px] font-semibold text-[#706F6F] text-center">
                Go Login?
                <Link
                  className="ml-1 text-[#F75B5F] hover:underline"
                  to="/login"
                >
                  Login
                </Link>
              </p>

              <button
                type="submit"
                className="btn bg-[#FF5A3C] hover:bg-orange-700 text-white mt-4 mb-2"
              >
                Forget Password
              </button>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ForgetPassword;
