import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthProvider";
import { BsDiscord, BsFacebook, BsSlack, BsTwitter } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { SiKakaotalk, SiNotion } from "react-icons/si"; 
import BaseLayout from "../components/layouts/BaseLayout";
import { AiFillGithub } from "react-icons/ai";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const { 
    login, 
    signInWithDiscord,
    signInWithGoogle,
    signInWithTwitter,
    signInWithFacebook,
    signInWithGithub,
    signInWithNotion,
    signInWithSlack  } = useAuth();
  
  const handleLoginWithProvider =async (signInMethod: any, providerName: string) => {
    try {
      setErrorMsg("");
      setLoading(true);

      const {
        data: { session, user },
        error
      } = await signInMethod();

      if (error) setErrorMsg(error);

      if (user && session) navigate("/");
    } catch (error) {
      setErrorMsg(`Error ${providerName} login failed!`);
    }
  }

  const handleLogin = async () => {

    try {
      setErrorMsg("");
      setLoading(true);

      const {
        data: { session, user },
        error,
      } = await login(email, password);

      if (error) {
        setErrorMsg(error.message);
      }

      if (user && session) navigate("/");
    } catch (error) {
      setErrorMsg("Email or Password Incorrect");
    }

    setLoading(false);
  };

  return (
    <>
      <BaseLayout showNavBar={false}> </BaseLayout>

      <div className="w-full">
          <div className="flex flex-col items-center justify-center">
            <div className="bg-white shadow rounded   md:w-1/2 w-full p-10 mt-16">
              <button
                onClick={() => handleLoginWithProvider(signInWithGoogle, "google")}
                aria-label="Continue with google"
                className="shadow-lg relative bg-neutral-50 font-bold  justify-center ease-in-out  hover:!bg-neutral-100 py-3.5 px-2 border-0 rounded-lg border-gray-500 flex items-center w-full mt-5"
              >
                <FcGoogle />
                <p className="text-base font-medium ml-4 text-slate-900">
                  Sign in with Google
                </p>
              </button>
              <button
                onClick={() => handleLoginWithProvider(signInWithDiscord, "discord")}
                aria-label="Continue with Discord"
                className="shadow-lg relative bg-[#5865F2] font-bold justify-center ease-in-out hover:!bg-opacity-90 py-3.5 px-4 border-0 rounded-lg border-gray-500 flex items-center w-full mt-5"
              >
                <BsDiscord className="text-white" />
                <p className="text-base font-medium ml-4 text-white">
                  Sign in with Discord
                </p>
              </button>
              <button
                  onClick={() => handleLoginWithProvider(signInWithFacebook, "facebook")}
                  aria-label="Continue with Facebook"
                  className="shadow-lg relative bg-[#3b5998] font-bold justify-center ease-in-out hover:!bg-opacity-90 py-3.5 px-4 border-0 rounded-lg border-gray-500 flex items-center w-full mt-5"
                >
                  <BsFacebook className="text-base font-medium ml-4 text-white" />
                  <p className="text-base font-medium ml-4 text-white">
                  Sign in with Facebook
                </p>
                </button>

              <div className="flex flex-row justify-between space-x-4 md:space-x-2 w-full">
                <button
                  onClick={() => handleLoginWithProvider(signInWithTwitter, "twitter")}
                  aria-label="Continue with Twitter"
                  className="flex-1 shadow-lg relative bg-[#1DA1F2] font-bold justify-center ease-in-out hover:!bg-opacity-90 py-4 px-3.5 md:px-8 border-0 rounded-lg border-gray-500 flex items-center mt-5"
                >
                  <BsTwitter className="text-white" />
                </button>
                <button
                  onClick={() => handleLoginWithProvider(signInWithGithub, "github")}
                  aria-label="Continue with GitHub"
                  className="flex-1 shadow-lg relative bg-[#333] font-bold justify-center ease-in-out hover:!bg-opacity-60 py-4 px-3.5 md:px-8 border-0 rounded-lg border-gray-500 flex items-center mt-5"
                >
                  <AiFillGithub className="text-white mx-auto" />
                </button>
                
                <button
                  onClick={() => handleLoginWithProvider(signInWithSlack, "slack")}
                  aria-label="Continue with Slack"
                  className="flex-1 shadow-lg relative bg-[#4A154B] font-bold justify-center ease-in-out hover:!bg-opacity-90 py-4 px-3.5 md:px-8 border-0 rounded-lg border-gray-500 flex items-center mt-5"
                >
                  <BsSlack className="text-white mx-auto" />
                </button>
              </div>

              <div className="w-full flex items-center justify-between py-2 mt-3">
                <hr className="h-px bg-gray-400 border-1 dark:bg-gray-700 w-36" />
                <p className="text-base font-medium leading-4 px-2.5 text-gray-400">
                  or
                </p>
                <hr className="h-px bg-gray-400 border dark:bg-gray-700 w-36" />
              </div>
              <div>
                <label
                  id="email"
                  className="text-sm font-medium leading-none text-gray-800"
                >
                  Email
                </label>
                <input
                  aria-labelledby="email"
                  type="email"
                  id="email"
                  value={email}
                  onChange={handleEmailChange}
                  className="bg-gray-200 border-1 rounded  text-md font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-1"
                />
              </div>
              <div className="mt-2  w-full">
                <label
                  htmlFor="pass"
                  className="text-sm font-medium leading-none text-gray-800"
                >
                  Password
                </label>
                <div className="relative flex items-center justify-center">
                  <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={handlePasswordChange}
                    className="bg-gray-200 border rounded  text-md font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-1"
                  />
                  <div className="absolute right-0 mt-2 mr-3 cursor-pointer"></div>
                </div>
              </div>
              <div className="mt-8">
                <div className="h-8  text-center text-red-600">{errorMsg}</div>
                <button
                  className={
                    "button block focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 text-sm font-semibold leading-none text-white focus:outline-none bg-indigo-700 border rounded hover:bg-indigo-600 py-4 w-full"
                  }
                  disabled={loading}
                  onClick={handleLogin}
                >
                  {loading ? <span>Loading</span> : <span>Login</span>}
                </button>
              </div>
              <div className="mt-4 flex justify-evenly text-sm">
                <Link to={"/signup"}>
                  <div className="hover:text-blue-800 text-blue-600 py-2 px-4">
                    Register
                  </div>
                </Link>
                <Link to={"/forgot-password"}>
                  <div className="hover:text-blue-800 text-blue-600 py-2 px-4">
                    Forgot password?
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
    </>
  );
};

export default LoginPage;
