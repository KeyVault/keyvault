import React from "react";
import TextIcon from "./TextIcon";
import { FiCopy } from "react-icons/fi";
import { FiPaperclip } from "react-icons/fi";
import Tooltip from "./Tooltip";
import { toast } from "react-toastify";

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

  const notifySuccess = (text: string) => {
    toast.info(`${text}`, {
      position: "top-center",
      autoClose: 70,
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
     
      <div className="text-neutral-50 mb-2">
        <TextIcon
        LeftIcon={FiPaperclip}
        iconClassName="w-8 h-8 mx-8 w-8 h-8 mx-8 mt-2" />
      </div>
     
     <div className="flex flex-row justify-between">
       <div className="flex flex-col mr-24">
         <h2 className="cursor-text">{note.name}</h2>
         <p></p>
       </div>

       <div className="absolute right-20">
          <div className="flex flex-row space-x-7">
              <Tooltip text={"Copy Text"}>
                <button onClick={() => handleCopyText(note.content, "Copied!")} className="cursor-pointer btn hover:bg-dark hover:border-neutral-50 border rounded ease-in-out p-3 bg-neutral-800 border-neutral-800 text-neutral-50">
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
