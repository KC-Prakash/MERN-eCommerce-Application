import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  return (
    <section className="section py-10">
      <div className="container">
        <div className="card shadow-md w-[500px] m-auto rounded-md bg-white p-5 px-8">
          <h3 className="text-center text-[20px] font-[500]">
            Login to your Account
          </h3>
          <form className="w-full">
            <div className="form-group w-full my-5">
              <TextField
                type="email"
                id="email"
                label="Email"
                variant="outlined"
                sx={{
                  "& label.Mui-focused": {
                    color: "#ff5252",
                    transition: "all 0.3s",
                  },
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: "#ccc",
                      transition: "all 0.3s",
                    },
                    "&:hover fieldset": {
                      borderColor: "#ff5252",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "#ff5252",
                    },
                  },
                }}
                className="w-full"
              />
            </div>
            <div className="form-group w-full mb-3 relative">
              <TextField
                type="password"
                id="password"
                label="Password"
                variant="outlined"
                sx={{
                  "& label.Mui-focused": {
                    color: "#ff5252",
                    transition: "all 0.3s",
                  },
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: "#ccc",
                      transition: "all 0.3s",
                    },
                    "&:hover fieldset": {
                      borderColor: "#ff5252",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "#ff5252",
                    },
                  },
                }}
                className="w-full"
              />
            </div>
            <Link to={"/"}>
              <a className="transition-all duration-300 text-[14px] pl-1 text-[#ff5252] font-[500]">
                Forgot Password?
              </a>
            </Link>
            <div className="flex items-center gap-3 justify-center my-3">
              <Button className="btn-org !w-full !py-2 !font-bold hover:!bg-black hover:!text-white transition-all duration-300">
                LOGIN
              </Button>
            </div>
            <p className="transition-all duration-300 text-[14px] pl-1 pb-5 pt-[0.8] text-black font-[500]">
              Not Registered?
              <Link to={"/register"} className="text-[#ff5252] pl-2">
                Sign Up Now
              </Link>
            </p>
            <hr className="text-gray-300" />
            <p className="text-center transition-all duration-300 text-[14px] py-4 text-gray-600 font-[500]">
              Or Continue with Social Account
            </p>
            <Link to={"/"}>
              <div className="socialLogin transition-all duration-300 bg-blue-50 flex items-center justify-center p-1 py-2 rounded-sm cursor-pointer hover:bg-[#ffdbdb]">
                <FcGoogle className="text-[25px] mr-1.5"></FcGoogle>
                <h3 className="pb-0.5 font-[500]">Sign in With Google</h3>
              </div>
            </Link>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Login;
