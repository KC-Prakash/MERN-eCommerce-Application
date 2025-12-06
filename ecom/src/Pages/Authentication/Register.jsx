import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";

const Register = () => {
  return (
    <section className="section min-h-screen flex justify-center items-center">
      <div className="container flex justify-center">
        <div className="card shadow-md w-[400px] md:w-[600px] lg:w-[900px] m-auto rounded-md bg-white p-5 px-8">
          <h3 className="text-center text-[20px] font-[500]">
            Register with new Account
          </h3>
          <form className="w-full">
            <div className="form-group w-full my-5">
              <TextField
                type="text"
                id="name"
                label="Full Name"
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
                className="w-full !mb-5"
              />
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
            <div className="form-group w-full relative">
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
                className="w-full !mb-5"
              />
            </div>
            <div className="form-group w-full relative">
              <TextField
                type="password"
                id="password"
                label="Confirm Password"
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
            <div className="flex items-center gap-3 justify-center my-4 mt-5">
              <Button className="btn-org !w-full !py-2 !font-bold hover:!bg-black hover:!text-white transition-all duration-300">
                REGISTER
              </Button>
            </div>
            <p className="transition-all duration-300 text-[14px] pl-1 pb-5 pt-[0.8] text-black font-[500]">
              Already have an Account?
              <Link to={"/login"} className="text-[#ff5252] pl-2">
                Log In Now
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

export default Register;
