import React from "react";
import TextIcon from "./TextIcon";
import { AiOutlineUser } from "react-icons/ai";
import { BsKey } from "react-icons/bs";
import Tooltip from "./Tooltip";
import { toast } from "react-toastify";

export interface LoginProps {
  username: string;
  password: string;
  providerName: string;
  providerIcon: string;
}

const LoginCard: React.FC<LoginProps> = ({
  username,
  password,
  providerName,
}) => {
  const notifySuccess = (text: string) => {
    toast.info(`${text}`, {
      position: "top-center",
      autoClose: 50,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: false,
      progress: 0,
      theme: "dark",
    });
  };

  const handleCopyText = (content:string, message: string) => {
    navigator.clipboard.writeText(content);
    notifySuccess(message);
  }

  return (
    <>
      <div className="my-2 py-4 ease-in duration-50 hover:bg-blue-700 cursor-pointer bg-neutral-800 max-w rounded-md flex flex-row justify-start">
        <figure>
          <img
            className="w-8 h-8 mx-8 mt-2"
            src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
            alt="Provider Icon"
          />
        </figure>

        <div className="flex flex-row justify-between">
          <div className="flex flex-col mr-24">
            <h2 className="cursor-text">{providerName}</h2>
            <p className="cursor-text">{username}</p>
          </div>

          <div className="absolute right-20">
            <div className="flex flex-row space-x-4">
              <Tooltip text={"Copy Username"}>
                <button onClick={() => handleCopyText(username, "Copied Username!")} className="cursor-pointer btn hover:bg-dark hover:border-neutral-50 border rounded ease-in-out p-3 bg-neutral-800 border-neutral-800 text-neutral-50">
                  <TextIcon LeftIcon={AiOutlineUser} />
                </button>
              </Tooltip>
              <Tooltip text={"Copy Password"}>
                <button onClick={() => handleCopyText(password, "Copied Password!")} className="cursor-pointer btn hover:bg-dark hover:border-neutral-50 border rounded ease-in-out p-3 bg-neutral-800 border-neutral-800 text-neutral-50">
                  <TextIcon LeftIcon={BsKey} />
                </button>
              </Tooltip>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default React.memo(LoginCard);
