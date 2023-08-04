import React from "react";
import TextIcon from "./TextIcon";
import { AiOutlineUser } from 'react-icons/ai';
import { BsKey } from "react-icons/bs";
import Tooltip from "./Tooltip";

export interface LoginProps {
    username: string;
    password: string
    providerName: string;
    providerIcon: string;
}

const LoginCard: React.FC<LoginProps> = ({ 
    username,
    password,
    providerName,
    providerIcon
}) => {


  return (  
    <>
    <div className="my-2 py-4 ease-in duration-50 hover:bg-blue-700 cursor-pointer bg-neutral-800 max-w rounded-md flex flex-row justify-start">
     
      <figure >
        <img className="w-8 h-8 mx-8 mt-2" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="Provider Icon"/>
      </figure>
      
      <div className="flex flex-row justify-between">
        <div className="flex flex-col mr-24">
          <h2 className="cursor-text">{providerName}</h2>
          <p className="cursor-text">{username}</p>
        </div>

        <div className="absolute right-20">
          <div className="flex flex-row space-x-7">
              <Tooltip text={"Copy Username"} >
                <button  className="cursor-pointer btn hover:bg-dark hover:border-neutral-50 border rounded ease-in-out p-3 bg-neutral-800 border-neutral-800 text-neutral-50">
                  <TextIcon
                  LeftIcon={AiOutlineUser}/>
                </button>
              </Tooltip>
              <Tooltip text={"Copy Password"}>
                <button className="cursor-pointer btn hover:bg-dark hover:border-neutral-50 border rounded ease-in-out p-3 bg-neutral-800 border-neutral-800 text-neutral-50">
                  <TextIcon
                  LeftIcon={BsKey}/>
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
