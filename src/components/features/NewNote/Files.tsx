import React, { useState, ChangeEvent } from "react";
import { toast } from "react-toastify";
import { FileInput, Label } from 'flowbite-react';
import TextIcon from "../../shared/TextIcon";
import { AiOutlineCloudUpload } from "react-icons/ai";

function FileUpload({ onFileUpload }) {
  const MAX_FILE_COUNT = 5;
  
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [isUploadButtonHovered, setIsUploadButtonHovered] = useState(false);

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const files: File[] = Array.from(event.target.files);

      // Check if the number of selected files does not exceed the maximum limit.
      if (files.length <= MAX_FILE_COUNT) {
        setSelectedFiles(files);
      } else {
        toast.error(`You can select up to ${MAX_FILE_COUNT} files.`);
      }
    }
  };

  const handleUpload = () => {
    // UPLOAD SELECTED FILES
    setSelectedFiles([]);

    // make it a promise when upload invoked
   setTimeout(() => {
    setIsUploadButtonHovered(false);
   },50)
  };

  return (
    
    <div className="flex items-center justify-center w-full">
    <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-64 border duration-100 ease-in-out border-blue-900 border-dashed rounded cursor-pointer bg-neutral-800 hover:bg-blue-900">
      {selectedFiles.length === 0 ? (
        <>
          <div className="flex flex-col items-center justify-center pt-5 pb-6">
            <TextIcon
              className="text-blue-700 p-2 w-12 h-12"
              LeftIcon={AiOutlineCloudUpload}
              />
            <p className="mb-2 text-sm text-gray-300"><span className="font-semibold">Click to upload</span> or drag and drop</p>
            <p className="text-xs text-gray-400 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 50mb)</p>
          </div>
        </>
      ) : (
        <>
          <div className="mt-4">
            <h3 className="text-lg font-semibold text-white">Selected Files:</h3>
            <ul className="list-disc list-inside text-white">
              {selectedFiles.map((file, index) => (
                <li key={index}>{file.name}</li>
              ))}
            </ul>
          </div>
        </>
      )}
      <input
          id="dropzone-file"
          type="file"
          className="hidden"
          multiple
          onChange={handleFileChange}
          disabled={isUploadButtonHovered}
        />
      {selectedFiles.length === 0 ? (
        ''
      ): (
        <button
            className="mt-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            onClick={handleUpload}
            onMouseEnter={() => setIsUploadButtonHovered(true)}
            onMouseLeave={() => setIsUploadButtonHovered(false)}
          >
            Upload
          </button>
      )}
    </label>
  </div>
  );
}

interface FilesComponentProps {
  className?: string;
}

interface CustomFiles {
  nam
}

const FilesComponent: React.FC<FilesComponentProps> = ({ className }) => {
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);

  const handleFileUpload = (files: FileList) => {
    // Convert the FileList to an array and update the state.
    setUploadedFiles(Array.from(files));
    notifySaved();
  };

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
  };

  return (
    <>
      <FileUpload onFileUpload={handleFileUpload} />
      {uploadedFiles.length === 0 && (
        <div className="mt-4">
          <h3 className="text-lg text-white font-semibold">Uploaded Files:</h3>
          <ul className="list-disc list-inside">
            {uploadedFiles.map((file, index) => (
              <li key={index}>{file.name}</li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default FilesComponent;