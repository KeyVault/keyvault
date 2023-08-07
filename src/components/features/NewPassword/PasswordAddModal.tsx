import React from "react";
import { toast } from "react-toastify";

interface PasswordAddModalProps {
    closeModal: () => void;
    className?: string;
}


const PasswordAddModal: React.FC<PasswordAddModalProps> = ({ className, closeModal }) => {
    const notifySaved = () => {
        toast.success('Saved!', {
            position: "top-center",
            autoClose: 300,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: false,
            progress: 0,
            theme: "dark",
            });

        
        setTimeout(() => {
            closeModal();
        }, 500)
            
    }

    return (
    <>     
        <div className="flex flex-col space-y-3">
            <form>
                <label htmlFor="default-search" className="mb-2 text-sm font-medium text-white">Search</label>
                <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                        </svg>
                    </div>
                    <input type="search" id="default-search" className="block w-full p-3 pl-10 text-smborder text-neutral-900    border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Brand" />
                </div>
            </form>
            <div >

                <div className="w-full max-w-md p-4 bg-neutral-800 rounded shadow mx-auto">
                    <div className="flex items-center justify-between mb-4">
                        <h5 className="text-xl font-bold leading-none text-white">Add new password</h5>
                    </div>
                    <div className="flow-root ">
                        <div className="flex items-center space-x-4 mx-1  ">
                            <div className="flex-1 min-w-0">
                                <div className="mb-6">
                                    <label htmlFor="large-input" className="block mb-2 text-sm font-medium text-white">Name</label>
                                    <input placeholder="Google" type="text" id="large-input" className="block w-full p-4 text-gray-900 border border-gray-300 rounded-md bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                                </div>

                                <div className="mb-6">
                                    <label htmlFor="large-input" className="block mb-2 text-sm font-medium text-white">URL</label>
                                    <input placeholder="https://google.com/signin" type="text" id="large-input" className="block w-full p-4 text-gray-900 border border-gray-300 rounded-md bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                                </div>
                                <div className="mb-6">
                                    <label htmlFor="large-input" className="block mb-2 text-sm font-medium text-white">Email address or username</label>
                                    <input placeholder="Eren@gmail.com" type="text" id="large-input" className="block w-full p-4 text-gray-900 border border-gray-300 rounded-md bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                                </div>
                                <div className="mb-6">
                                    <label htmlFor="large-input" className="block mb-2 text-sm font-medium text-white">Password</label>
                                    <input placeholder="password" type="password" id="large-input" className="block w-full p-4 text-gray-900 border border-gray-300 rounded-md bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                                </div>
                            </div>
                        </div>
                    <div className="float-right">
                            <button  onClick={notifySaved}  type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-8 py-3 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Save</button>
                        </div>
                    </div>
                </div>

            </div>
        </div>

    </>
)};
  
  export default PasswordAddModal;