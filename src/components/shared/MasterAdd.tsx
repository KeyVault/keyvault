import React from 'react';
import TextIcon from './TextIcon';
import { BiMessageSquareAdd } from "react-icons/bi";
import Tooltip from './Tooltip';
import PasswordAddModal from '../features/NewPassword/PasswordAddModal';
import Modal from 'react-modal';
import NoteAddModal from '../features/NewNote/NoteAddModal';

const customStyles = {
  overlay: {
    backgroundColor: "#1E1E1EB3",
  },
  content: {
    backgroundColor: "#171717",
    borderWidth: "0",
  },
};

interface MasterAddProp {
  createNewEntryType: string;

}

const MasterAdd: React.FC<MasterAddProp> = ({ createNewEntryType }) => {
  const [modalIsOpen, setIsOpen] = React.useState(false);
 
  function openModal() {
    setIsOpen(true);
  }


  function closeModal() {
    setIsOpen(false);
  }

  return (
    <>
      <div className='absolute bottom-20 right-8 rounded bg-blue-700 hover:bg-blue-900 cursor-pointer ease-in-out duration-75'
        onClick={openModal}
      >
          <Tooltip text={"Add new"} >
              <TextIcon
                  className="text-white h-12 w-12 flex justify-center flip-horizontal"
                  LeftIcon={BiMessageSquareAdd}
              />
          </Tooltip>
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >

        { createNewEntryType === 'logins' && <PasswordAddModal closeModal={closeModal} />}
        { createNewEntryType === 'notes' && <NoteAddModal closeModal={closeModal} />}

      </Modal>

        {/* Render different modals based on createNewEntryType */}
       {/*  {isModalOpen && createNewEntryType === 'login' && <PasswordAddModal onClose={closeModal} />} */}
        {/* {isModalOpen && createNewEntryType === 'note' && <NoteCreateModal onClose={closeModal} />} */}
    </>
  );
};

export default MasterAdd;