import React, { useEffect, useState } from "react";
import TextIcon from "../../shared/TextIcon";
import { FiRefreshCcw } from "react-icons/fi";
import { calculateAndSetCrackTime } from "../../../utils";

interface PassGeneratorProps {
  length: number;
  lowercaseOn: boolean;
  uppercaseOn: boolean;
  numbersOn: boolean;
  specialCharsOn: boolean;
}

const PassGenerator: React.FC<PassGeneratorProps> = ({
    length,
    lowercaseOn,
    uppercaseOn,
    numbersOn,
    specialCharsOn,
  }) => {
    const [generatedPassword, setGeneratedPassword] = useState<string>("");
    const [crackTime, setCrackTime] = useState<string>("");
    

    const generatePassword = () => {
      const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
      const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      const numberChars = "0123456789";
      const specialChars = "!@#$%^&*()_+-=[]{}|;:,.<>?";
  
      let charset = "";
      let password = "";
  
      if (lowercaseOn) charset += lowercaseChars;
      if (uppercaseOn) charset += uppercaseChars;
      if (numbersOn) charset += numberChars;
      if (specialCharsOn) charset += specialChars;
  
      if (charset.length === 0) {
        alert("Please select at least one option.");
        return;
      }
  
      for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        password += charset[randomIndex];
      }
  
      setGeneratedPassword(password);
      setCrackTime(calculateAndSetCrackTime(password));
    };

    
    
    useEffect(() => {
      generatePassword();
    },[length])
    return (
      <div>
        {generatedPassword && (
          <div className="flex flex-col">
            <div className="relative flex items-center justify-center ">
            <input
                type="text"
                id="password"
                value={generatedPassword}
                className="bg-neutral-800 border rounded-sm  text-3xl font-bold  py-6 tracking-wider pr-10  text-white w-full pl-3 mt-1"
            />
            <div className="absolute right-2 top-0 bottom-0 flex items-center pr-2 cursor-pointer" onClick={generatePassword}>
                <TextIcon 
                    LeftIcon={FiRefreshCcw}
                    className="text-white h-12 w-8 hover:text-blue-600 ease-in-out duration-75"
                />
            </div>
          </div>
            <div className="text-center select-none	">{crackTime}</div>
          </div>
        )}

      </div>
    );
  };
  
  export default PassGenerator;

