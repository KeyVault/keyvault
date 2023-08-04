import React, { useState } from 'react';
import BaseLayout from '../components/layouts/BaseLayout';
import NoteCard, { NoteProps } from '../components/shared/NoteCard';
import TextIcon from '../components/shared/TextIcon';
import { IoMdNotifications } from 'react-icons/io';
import LoginCard from '../components/shared/LoginCard';
import SearchComponent from '../components/shared/Search';


const LoginData: LoginProps[] = [
  {username: "FrostyFox92", password: "FrostyFox92", providerName: "Google", providerIcon: ""},
  {username: "CrimsonDragon18", password: "SilverWings42", providerName: "Adobe", providerIcon: ""},
  {username: "StarlightDreamer", password: "Moonbeam2023", providerName: "American Express", providerIcon: ""},
  {username: "AzureWave99", password: "OceanBreeze71", providerName: "LinkedIn", providerIcon: ""},
  {username: "ElectricJaguar", password: "Thunderbolt55", providerName: "GitHub", providerIcon: ""},
];

const NoteData: NoteProps[] = [
  {  note: {name: "Exodus Wallet Code", content: "d6ff5c4375a9b050ab44f2d7ec267b75a63c8f407eefeb5a61c6cad93b0a80dabb50f93a9b1eb0222e041ee77eec48ebd596e6b3bbfc63dbbc77297de41eda74676414c398da981b66b9a79ca3ab57ffc1890db3b3ada4bdca56fd57797afade30f42831f6f3dfb584eddbb102a40e2b9ef4faf4b38e2485603a070fa752a32cc195e9153c90a33d09af317bbdbf9aaf18eab746f5f5cd0515d374cb31d05d43de3ac08faaca37e12fdae72f2ddc5180c0b928f610da7fe4774e88954e9f66f3ea9be61f9549c6d0d9f2ff723760e1904baea5c34f3b7ba8029a462902bde8f5268c72ce8165b24acf36dd628997bc0bed661282d54cf673e60ff872784386cb"}, attachements: [{fileName: "", fileType: "", fileSize: 0, fileIcon: ""}], audioAttachement: {fileName: "", fileType: "", fileSize: 0, fileIcon: ""}},
  {  note: {name: "Gym Locker", content: "21 6 1"}, attachements: [{fileName: "", fileType: "", fileSize: 0, fileIcon: ""}], audioAttachement: {fileName: "", fileType: "", fileSize: 0, fileIcon: ""}},
  {  note: {name: "Ramen recipe", content: "Fox Tear drops"}, attachements: [{fileName: "", fileType: "", fileSize: 0, fileIcon: ""}], audioAttachement: {fileName: "", fileType: "", fileSize: 0, fileIcon: ""}},
  {  note: {name: "Backup codes render", content: "69696969"}, attachements: [{fileName: "", fileType: "", fileSize: 0, fileIcon: ""}], audioAttachement: {fileName: "", fileType: "", fileSize: 0, fileIcon: ""}},
]

const Vault = ({}) => {
 
  const [activeCategorieButton, setActiveCategorieButton] = useState("logins");

  const handleCategorieOnClick = (buttonID: string) => {
    setActiveCategorieButton(buttonID);
  };

  return (
    <>
    <BaseLayout  showNavBar={true}> </BaseLayout>
      <div className='flex flex-col py-5 px-4 pb-24 '>
        
        <div className='flex flex-row'>
          <SearchComponent />
          <div className='ml-4 bg-neutral-800 rounded-full cursor-pointer hover:text-[#469BDF]'>
            <TextIcon
              iconClassName="w-6 h-6 m-3.5"
              LeftIcon={IoMdNotifications}
            >
              <span className=" inline-flex rounded-full h-2.5 w-2.5 bg-blue-600 absolute ml-7 mb-2 "></span>
            </TextIcon>

          </div>
        </div>

        <div className='mt-4'>
          <div className='bold text-lg'>Categories</div>
          <div className='flex flex-row mt-2'>
            <button 
              onClick={() => handleCategorieOnClick("logins")}
              className={activeCategorieButton === "logins" ? "bg-blue-700 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" : "ease-in duration-100 bg-neutral-700 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" }>
              Logins {LoginData.length}
            </button>
            <button
              onClick={() => handleCategorieOnClick("notes")} 
              className={activeCategorieButton === "notes" ? "ml-4 bg-blue-700 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" : " ease-in duration-100 ml-4 bg-neutral-700 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" }>
              Notes {NoteData.length}
            </button>
          </div>
        </div>

        <div className='mt-4'>
          <div className='bold text-lg'>Recently Added</div>
          {activeCategorieButton === "logins" ? (
            LoginData.map((item:LoginProps) => (
              <LoginCard 
                username={item.username} 
                password={item.password}
                providerName={item.providerName}
                providerIcon={item.providerIcon}
              />
            ))
          ) : (
            NoteData.map((item:NoteProps) => (
              <NoteCard 
                note={item.note}
                attachements={item.attachements}
                audioAttachement={item.audioAttachement}                
              />
            ))
          )}
        </div>

      </div>
    </>
  );
}

export default Vault;
