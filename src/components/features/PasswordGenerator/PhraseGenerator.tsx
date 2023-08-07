import React, { useEffect, useState } from "react";
import { wordlist } from "./wordlist";
import { calculateAndSetCrackTime, randomNumberBetweenZeroAndOne } from "../../../utils";
import TextIcon from "../../shared/TextIcon";
import { FiRefreshCcw } from "react-icons/fi";

interface PhraseGeneratorProps {
    numWords: number;
}
export const PhraseGenerator: React.FC<PhraseGeneratorProps> = ( { numWords }) => {
    const [generatedPhrase, setGeneratedPhrase] = useState<string>("");
    const [crackTime, setCrackTime] = useState<string>("");

    function generatePhrase() {

      const maxIndex = wordlist.length - 1;

      const generatedPhraseArray: string[] = Array.from({ length: numWords }, () => {
          const index = Math.floor(randomNumberBetweenZeroAndOne() * maxIndex);
          return wordlist[index];
      });
    
      const phrase = generatedPhraseArray.join('-');
      
       setGeneratedPhrase(phrase);
       setCrackTime(calculateAndSetCrackTime(phrase))
          
      }

     
      useEffect(() => {
        generatePhrase();
      },[numWords])
      return (
        <>
        <div className="relative flex items-center justify-center ease-in-out">

          <input
                spellCheck={false}
                type="text"
                id="password"
                value={generatedPhrase}
                className="bg-neutral-800 border rounded-sm  text-3xl font-bold  py-6 tracking-wider pr-10  text-white w-full pl-3 mt-1"
            />

          <div className="absolute right-2 top-0 bottom-0 flex items-center pr-2 cursor-pointer" onClick={generatePhrase}>
            <TextIcon 
              LeftIcon={FiRefreshCcw}
              className="text-white h-12 w-8 hover:text-blue-600 ease-in-out duration-75"
            />
          </div>
        </div>
          <div className="text-center select-none	">{crackTime}</div>
        </>
      );
};

export default PhraseGenerator;
