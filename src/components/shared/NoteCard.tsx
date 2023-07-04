import React from "react";
import TextIcon from "./TextIcon";
import { FiCopy } from "react-icons/fi";
import { FiPaperclip } from "react-icons/fi";

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
    <div className="my-2 py-4 bg-neutral-800 max-w rounded-md flex flex-row justify-start">
     
      <div className="text-neutral-50">
        <TextIcon
        LeftIcon={FiPaperclip}
        iconClassName="w-8 h-8 mx-8" />
        </div>
      
      <div className="flex flex-row justify-between">
        <div className="flex flex-col mr-24">
          <h2 className="">{note.name}</h2>
         
        </div>

        <div className="absolute right-12">
          <button className="cursor-pointer btn btn-neutral text-neutral-50">
            <TextIcon
            LeftIcon={FiCopy}/>
          </button>
        </div>
      </div>
    </div>
    </>
  );
};

export default React.memo(NoteCard);
