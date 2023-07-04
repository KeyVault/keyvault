import React from "react";
import TextIcon from "./TextIcon";
import { AiOutlineUser } from 'react-icons/ai';
import { BsKey } from "react-icons/bs";

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
    <div className="my-2 py-4 bg-neutral-800 max-w rounded-md flex flex-row justify-start">
     
      <figure className=""><img className="w-8 h-8 mx-8 mt-2" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="Provider Icon"/></figure>
      
      <div className="flex flex-row justify-between">
        <div className="flex flex-col mr-24">
          <h2 className="">{providerName}</h2>
          <p>{username}</p>
        </div>

        <div className="absolute right-12">
          <button className="cursor-pointer btn bg-neutral-800 border-neutral-800 text-neutral-50 hover:bg-neutral-800">
            <TextIcon
            LeftIcon={AiOutlineUser}/>
          </button>
          <button className="ml-4 cursor-pointer btn bg-neutral-800 border-neutral-800 text-neutral-50 hover:bg-neutral-800">
            <TextIcon
            LeftIcon={BsKey}/>
          </button>

        </div>
      </div>
    </div>
    </>
  );
};

export default React.memo(LoginCard);
