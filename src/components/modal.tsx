import React, { useState } from "react";

export default function Modal({ isOpen, onClose, onSubmit }: any) {
  if (!isOpen) return null;

  const [formState, setFormState] = useState({
    title: "",
    description: "",
  });

  const handleChange = (e: any) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e:any ) => {
    e.preventDefault();
   onSubmit(formState);
    onClose();
  };

  const modalStyle = {
    display: isOpen ? "block" : "none",
  };
  return (
    <div>
       <div className="fixed top-0 h-screen flex flex-col border border-gray bg-gray-50 m-2 rounded-md w-full p-5 text-black" style={modalStyle}>
    <div className="flex flex-col h-screen max-w-sm mt-[30px]">
      <div className="justify-center items-center w-full mx-auto">
        <div className="">
          <input
            name="title"
            className="text-[15px] text-bold  font-bold text-black bg-gray-50 border-b w-[570px] h-[35px] mt-[15px]"
            value={formState.title}
            onChange={handleChange}
          />
        </div>
        <div className="mt-[10px]">
          <textarea
            name="description"
            className="text-black text-[15px] bg-gray-50 w-[570px] h-[450px] mt-[15px]"
            value={formState.description}
            onChange={handleChange}
          />
        </div>
      </div>
      {/* <div className="flex-grow "></div> Add this div to push the button to the bottom */}
      <div className="flex items-center flex-grow w-[570px] justify-between">
        <div className="text-white">
          <button className="border border-red-500 bg-red-500">
            Delete Note
          </button>
        </div>
        <div className="text-white">
          <button className="border border-green-500 bg-green-500" onClick={handleSubmit}>
            Save Changes
          </button>
        </div>
      </div>
    </div>
  </div>
    </div>
  )
}
