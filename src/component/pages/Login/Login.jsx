import { GoogleAuthProvider } from "firebase/auth";
import React, { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider";
import { UseTitle } from "../../Hooks/UseTitle";
import "./Login.css";

const googleProvider = new GoogleAuthProvider();

const Login = () => {
  const { singIn, signInWithGoogle } = useContext(AuthContext);
  const [loginError, setLoginError] = useState("");
  const location = useLocation();
  const navigate = useNavigate();
  const from2 = location.state?.from?.pathname || "/";
  UseTitle("Loging");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const logInHandle = (data) => {
    console.log(data);
    setLoginError("");
    singIn(data.email, data.password)
      .then((result) => {
        const user = result.user;
        toast.success("Login success!!!");
        navigate(from2, { replace: true });
        console.log(user);
      })
      .catch((error) => {
        console.log(error.message);
        setLoginError(error.message);
      });
  };
  const UserGoogle = () => {
    signInWithGoogle(googleProvider)
      .then((resul) => {
        const user = resul.user;
        navigate(from2, { replace: true });
        toast.success("Login success with Google!!!");
      })
      .catch((e) => console.error(e));
  };
  return (
    <div className="h-[800px] flex justify-center items-center">
      <div className="bg-slate-100 rounded-xl boxColor">
        <div className="w-96 p-7">
          <h3 className="text-xl text-center">Login</h3>
          <form className="" onSubmit={handleSubmit(logInHandle)}>
            <div className="form-control w-full ">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                className="input input-bordered w-full "
                {...register("email", { required: true })}
              />
              {errors.email && (
                <p className="text-red-500">Email is required</p>
              )}
            </div>
            <div className="form-control w-full ">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                className="input input-bordered w-full "
                {...register("password", { required: true })}
              />
              {errors.password && (
                <p className="text-red-500">Password is required</p>
              )}
            </div>

            <input
              className="btn  bg-sky-400 hover:bg-sky-600 border-none duration-500 w-full text-white mt-5"
              type="submit"
              value={`LogIn`}
            />
            <div>
              {loginError && <p className="text-red-600">{loginError}</p>}
            </div>
          </form>
          <p className="mt-5">
            New to Health Serves{" "}
            <Link className="text-secondary" to={"/register"}>
              Creat new Account
            </Link>
          </p>
          <div className="divider"></div>
          <button
            onClick={UserGoogle}
            className="btn btn-outline btn-info w-full"
          >
            CONTINUE WITH GOOGLE
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
