import React from "react";
import { toast } from "react-toastify";
import { Tabs } from 'flowbite-react';
import { BsFillPenFill } from "react-icons/bs";
import { ImAttachment } from "react-icons/im";
import { AiFillAudio } from "react-icons/ai";
import NoteComponent from "./Note";
import FilesComponent from "./Files";
import AudioComponent from "./Audio";

interface NoteAddModalProps {
    closeModal: () => void;
    className?: string;
}


const NoteAddModal: React.FC<NoteAddModalProps> = ({ className, closeModal }) => {

    return (
    <>     
        <div className="flex flex-col space-y-3">
            <Tabs.Group
                aria-label="Default tabs"
                style="fullWidth"
                className="flex justify-evenly text-neutral-900"
                >
                <Tabs.Item
                    active
                    icon={BsFillPenFill}
                    title="Note"
                >
                    <NoteComponent closeModal={closeModal} />
                </Tabs.Item>
                <Tabs.Item
                    icon={ImAttachment}
                    title="Files"
                >
                    <FilesComponent />
                </Tabs.Item>
                <Tabs.Item
                    icon={AiFillAudio}
                    title="Audio"
                >
                   <AudioComponent closeModal={closeModal} />
                </Tabs.Item>
          
            </Tabs.Group>
      

            <div >

    
            </div>
        </div>

    </>
)};
  
  export default NoteAddModal;