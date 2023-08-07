import React from "react";
import { toast } from "react-toastify";
import { AudioRecorder } from 'react-audio-voice-recorder';

interface AudioComponentProps {
    className?: string;
    closeModal: () => void;
}

const addAudioElement = (blob: Blob) => {
    const audioContainer = document.getElementById('audio-result');

    // Remove existing audio element (if any)
    const existingAudio = audioContainer.querySelector('audio');
    if (existingAudio) {
      existingAudio.pause();
      existingAudio.src = '';
      audioContainer.removeChild(existingAudio);
    }
  
    // Create new audio element for the new blob
    const url = URL.createObjectURL(blob);
    const newAudio = document.createElement('audio');
    newAudio.src = url;
    newAudio.controls = true;
    audioContainer.appendChild(newAudio);
  };

const AudioComponent: React.FC<AudioComponentProps> = ({ className, closeModal }) => {
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

    
    return (
    <>     
       <div className="flex justify-center flex-col space-y-4 w-full mx-auto ">
            <div className="mx-auto">
                <div className="w-full">
                    <AudioRecorder
                        classes={{
                            AudioRecorderClass: "m-4",
                        }}
                        showVisualizer={true}
                        onRecordingComplete={addAudioElement}
                        audioTrackConstraints={{
                        echoCancellation: true,
                        }}
                        onNotAllowedOrFound={(err) => console.table(err)}
                        downloadOnSavePress={false}
                        downloadFileExtension="mp3"
                        mediaRecorderOptions={{
                        audioBitsPerSecond: 128000,
                        }}
                    />
                </div>
                <br />

                <div className="mx-auto">
                    <div  id="audio-result"></div>
                </div>
            </div>

            <div className="mx-auto float-right">
                <button  onClick={notifySaved}  type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-8 py-3 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Save</button>
            </div>

        </div>

    </>
)};
  
  export default AudioComponent;