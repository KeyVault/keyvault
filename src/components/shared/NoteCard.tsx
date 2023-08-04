import React from "react";
import TextIcon from "./TextIcon";
import { FiCopy } from "react-icons/fi";
import { FiPaperclip } from "react-icons/fi";
import Tooltip from "./Tooltip";

export interface NoteText {
    name: string;
    content: string;
}

export interface Attachement {
    fileName: string;
    fileType: string;
    fileSize: number;
    fileIcon: string;
}

export interface NoteProps {
    note: NoteText;
    attachements: Attachement[];
    audioAttachement: Attachement
}

const NoteCard: React.FC<NoteProps> = ({ 
    note,
    attachements,
    audioAttachement
}) => {


  return (  
    <>
    <div className="my-2 py-4 ease-in duration-50 hover:bg-blue-700 cursor-pointer bg-neutral-800 max-w rounded-md flex flex-row justify-start">
     
      <div className="text-neutral-50 mt-2">
        <TextIcon
        LeftIcon={FiPaperclip}
        iconClassName="w-8 h-8 mx-8" />
      </div>
     
     <div className="flex flex-row justify-between">
       <div className="flex flex-col mr-24">
         <h2 className="cursor-text">{note.name}</h2>
         <p></p>
       </div>

       <div className="absolute right-20">
          <div className="flex flex-row space-x-7">
              <Tooltip text={"Copy Password"}>
                <button className="cursor-pointer btn hover:bg-dark hover:border-neutral-50 border rounded ease-in-out p-3 bg-neutral-800 border-neutral-800 text-neutral-50">
                <TextIcon
                  LeftIcon={FiCopy}/>
                </button>
              </Tooltip>
          </div>
        </div>


     </div>
   </div>
    </>
  );
};

export default React.memo(NoteCard);
