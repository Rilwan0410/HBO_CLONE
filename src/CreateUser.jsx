import React from "react";

export default function CreateUser() {
  return (
    <div>
      <div className="create-user bg-[linear-gradient(312deg,rgba(26,39,103,1)0%,rgba(48,20,94,1)45%,rgba(0,0,0,1)100%)] h-screen flex justify-between items-center flex-col">
        <div className="create-user__top flex items-center justify-center flex-col mt-[2rem]">
          <img
            src="../assets/img/logo.svg"
            className="create-user__logo h-[22px] w-[129px] scale-90 mb-[1rem]"
          />
          <span className="create-user__title text-white text-[2rem] font-[300]">
            Who Is Watching?
          </span>
        </div>

        <div className="create-user__form flex gap-[3rem] justify-center items-center">
         
            <img
              src="../assets/img/user-profile2.jpeg"
              className="create-user__user-img w-[125px] h-[125px] rounded-[50%] mb-[1rem] border-[3px] border-[solid] border-[rgb(132,0,255)] object-cover object-center"
            />
            <div className="create-user__input-group flex flex-col justify-center">
              <label className='text-[0.8rem] text-white mb-[1rem]'>Name</label>
              <input type="text" className="create-user__inputText  border-b-2 border-solid border-b-[rgb(132,0,255)] bg-transparent w-[300px] py-[10px] mb-[2rem] text-white outline-none text-[1.5rem]" />
              <div className="create-user__colors flex justify-between">

                <div className="create-user__color active bg-[linear-gradient(312deg,rgba(26,39,103,1)0%,rgba(48,20,94,1)45%,rgba(0,0,0,1)100%)] rounded-[50%] h-[30px] w-[30px] cursor-pointer transition duration-500 ease-in-out hover:scale-150 " />

                <div className="create-user__color bg-[linear-gradient(90deg,rgba(238,174,202,1)0%,rgba(148,187,233,1)100%)] rounded-[50%] h-[30px] w-[30px] cursor-pointer transition duration-500 ease-in-out hover:scale-150 " />

                <div className="create-user__color bg-[linear-gradient(90deg,rgba(2,0,36,1)0%,rgba(9,9,121,1)35%,rgba(0,212,255,1)100%)] rounded-[50%] h-[30px] w-[30px] cursor-pointer transition duration-500 ease-in-out hover:scale-150 " />

                <div className="create-user__color bg-[linear-gradient(90deg,rgba(0,0,0,1)0%,rgba(232,172,42,1)100%)] rounded-[50%] h-[30px] w-[30px] cursor-pointer transition duration-500 ease-in-out hover:scale-150 " />


                <div className="create-user__color bg-[linear-gradient(90deg,rgba(208,94,94,1)9%,rgba(42,223,232,1)100%)] rounded-[50%] h-[30px] w-[30px] cursor-pointer transition duration-500 ease-in-out hover:scale-150 " />
              </div>
            </div>

        </div>

        <div className="create-user__buttons mb-[2rem] flex gap-[1rem]">
          <button className="create-user__cancel bg-[rgba(255,255,255,0.2)] rounded-[20px] h-[35px] w-[150px] uppercase text-white font-[700] cursor-pointer transition duration-300 hover:opacity-40">
Cancel
          </button>

          <button className="create-user__save bg-[rgba(255,255,255,0.2)] rounded-[20px] h-[35px] w-[150px] uppercase text-white font-[700] cursor-pointer transition duration-300 hover:opacity-40">
            Save
          </button>
        </div>
      </div>
    </div>
  );
}
