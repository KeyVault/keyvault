import React from "react";
import { toast } from "react-toastify";
import { Textarea } from 'flowbite-react';

function TextareaElement() {
    return (
      <div
        className="max-w-md"
        id="textarea"
      >
        <Textarea
          id="comment"
          placeholder="Content..."
          required
          rows={8}
        />
      </div>
    )
  }

interface NoteComponentProps {
    closeModal: () => void;
    className?: string;
}


const NoteComponent: React.FC<NoteComponentProps> = ({ className, closeModal }) => {
    const notifySaved = () => {
        toast.success('Saved!', {
            position: "top-center",
            autoClose: 100,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: false,
            progress: 0,
            theme: "dark",
            });

            setTimeout(() => {
                closeModal();
            }, 100)    
    }

    const notifyError = () => {
        toast.error('Not saved, try again!', {
            position: "top-center",
            autoClose: 300,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: false,
            progress: 0,
            theme: "dark",
            });  
    }

    return (
    <>     
      
      <div className="w-full max-w-md p-4 bg-neutral-800 rounded shadow mx-auto">
        <div className="flow-root ">
            <div className="flex items-center space-x-4 mx-1  ">
                <div className="flex-1 min-w-0">
                    <div className="mb-6">
                        <input placeholder="Title" type="text" id="large-input" className="block w-full p-4 text-gray-900 border border-gray-300 rounded-md bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                    </div>

                    <div className="mb-6">
                        <TextareaElement />
                    </div>
                </div>
            </div>
        <div className="float-right">
                <button  onClick={notifySaved}  type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-8 py-3 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Save</button>
            </div>
        </div>
    </div>

    </>
)};
  
export default NoteComponent;


