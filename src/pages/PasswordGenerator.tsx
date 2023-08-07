import React, { useState } from "react";
import BaseLayout from "../components/layouts/BaseLayout";
import PassGenerator from "../components/features/PasswordGenerator/PassGenerator";
import ToggleButtonGroup from "../components/features/PasswordGenerator/ToggleButtonGroup";
import PhraseGenerator from "../components/features/PasswordGenerator/PhraseGenerator";
import TextIcon from "../components/shared/TextIcon";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

interface SliderComponentProps {
  value: number;
  onChange: (value: number) => void;
  type: boolean;
}

const SliderComponent: React.FC<SliderComponentProps> = ({ value, onChange, type }) => {

  return (
    <div className="flex w-full flex-col">
      <div className="my-2">
        <div>{type ? 'Words' : 'Characters'}: {value}</div>
      </div>
      <div className="flex items-center w-full">
        <button 
          className="bg-neutral-700 ease-in duration-75 hover:bg-blue-700 text-white font-bold py-3 px-5 rounded"
          onClick={() => {
            const newValue = value - 1;
            onChange(newValue);
          }}
        >
          <TextIcon 
            LeftIcon={AiOutlineMinus}
          />
        </button>
        <div className="flex flex-col justify-center mx-4 w-full relative">
          <input 
            id="large-range" 
            type="range" 
            min="0" 
            max="100" 
            value={value} 
            onChange={(e) => {
              const newValue = Number(e.target.value);
              onChange(newValue);
            }}
            className="slider w-full h-4 bg-gray-200 rounded-lg appearance-none cursor-pointer range-lg dark:bg-gray-700"
            style={{
              background: `linear-gradient(to right, #60A5FA 0%, #60A5FA ${value}%, #E5E7EB ${value}%, #E5E7EB 100%)`
            }}
          />
        </div>
        <button 
          className="bg-neutral-700 ease-in duration-75 hover:bg-blue-700 text-white font-bold py-3 px-5 rounded"
          onClick={() => {
            const newValue = value + 1;
            onChange(newValue);
          }}
        >
          <TextIcon 
            LeftIcon={AiOutlinePlus}
          />
        </button>
      </div>
    </div>
  );
}


function PasswordGenerator() {

  const [settings, setSettings] = useState({
    length: 18,
    lowercaseOn: true,
    uppercaseOn: true,
    numbersOn: true,
    specialCharsOn: true,
    showPhraseGenerator: false,
  });
  

  const handleToggleChange = (label: string, active: boolean) => {
    switch (label) {
      case "abc":
        setSettings(prev => ({ ...prev, lowercaseOn: active }));
        break;
      case "ABC":
        setSettings(prev => ({ ...prev, uppercaseOn: active }));
        break;
      case "123":
        setSettings(prev => ({ ...prev, numbersOn: active }));
        break;
      case "#$&":
        setSettings(prev => ({ ...prev, specialCharsOn: active }));
        break;
      case "Passphrases":
        setSettings(prev => ({ ...prev, showPhraseGenerator: active }));
        break;
      default:
        break;
    }
  };


  const handleSliderChange = (value: number) => {
    setSettings(prev => ({ ...prev, length: value }));
  };

  return (
    <>
    <BaseLayout showNavBar={true}> </BaseLayout>
       
    <div className="mx-4 mt-8">
      <div className="transition-all duration-500 ease-in-out relative">
        {settings.showPhraseGenerator ? (
          <div className="absolute w-full">
            <PhraseGenerator numWords={settings.length} />
          </div>
        ) : (
          <div className="absolute w-full">
            <PassGenerator {...settings} />
          </div>
        )}
      </div>

      <div className="flex justify-center items-center h-screen flex-col">
        <ToggleButtonGroup onToggleChange={handleToggleChange} />
        <div className="w-full">
          <SliderComponent type={settings.showPhraseGenerator} value={settings.length} onChange={handleSliderChange} />
        </div>
      </div>
    </div>
  </>
  );
}

export default PasswordGenerator;
