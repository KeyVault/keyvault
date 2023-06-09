import { useState } from "react";
import { Link } from "react-router-dom";
import { supabase } from "../supabase/client";
import { BsDiscord } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
import BaseLayout from "../components/layouts/BaseLayout";

const RegisterPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSignup = async (event) => {
    event.preventDefault();

    setLoading(true);

    const { error } = await supabase.auth.signUp({
      email: email,
      password: password,
    });

    if (error) {
      alert(error.message);
    } else {
      alert("Successfully signed up");
      navigate("/login");
    }
    setLoading(false);
  };

  return (
    <>
      <BaseLayout showNavBar={false}> </BaseLayout>

      <div className="w-full">
        <div className="flex flex-col items-center justify-center">
          <div className="bg-white shadow rounded lg:w-1/3  md:w-1/2 w-full p-10 mt-16">
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
                className="bg-gray-200 border-1 rounded  text-md font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2"
              />
            </div>
            <div className="mt-6  w-full">
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
                  className="bg-gray-200 border rounded  text-md font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2"
                />
                <div className="absolute right-0 mt-2 mr-3 cursor-pointer"></div>
              </div>
            </div>
            <div className="mt-8">
              <button
                className={
                  "button block focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 text-sm font-semibold leading-none text-white focus:outline-none bg-indigo-700 border rounded hover:bg-indigo-600 py-4 w-full"
                }
                disabled={loading}
                onClick={handleSignup}
              >
                {loading ? <span>Loading</span> : <span>Sign up</span>}
              </button>
            </div>

            <div className="w-full flex items-center justify-between py-4">
              <hr className="h-px bg-gray-400 border-1 dark:bg-gray-700 w-36" />
              <p className="text-base font-medium leading-4 px-2.5 text-gray-400">
                or
              </p>
              <hr className="h-px bg-gray-400 border dark:bg-gray-700 w-36" />
            </div>
            <button
              aria-label="Continue with google"
              className="shadow-lg relative bg-white font-bold  justify-center ease-in-out  hover:!bg-neutral-100 py-3.5 px-4 border rounded-lg border-gray-500 flex items-center w-full mt-2"
            >
              <FcGoogle />
              <p className="text-base font-medium ml-4 text-slate-900">
                Continue with Google
              </p>
            </button>
            <button
              aria-label="Continue with Discord"
              className="shadow-lg relative bg-[#5865F2] font-bold justify-center ease-in-out hover:!bg-opacity-90 py-3.5 px-4 border rounded-lg border-gray-500 flex items-center w-full mt-5"
            >
              <BsDiscord className="text-white" />
              <p className="text-base font-medium ml-4 text-white">
                Continue with Discord
              </p>
            </button>

            <div className="mt-8 flex justify-evenly text-sm">
              <div className="hover:text-blue-800 text-blue-600">
                <Link to={"/login"}>
                  <div className="hover:text-blue-800 text-blue-600 py-2 px-8">
                    Already a User? Login
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegisterPage;
