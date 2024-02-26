import React from "react";

export default function Home() {
  return (
    <div>
      <div className="login-user bg-[linear-gradient(312deg,rgba(26,39,103,1)0%,rgba(48,20,94,1)45%,rgba(0,0,0,1)100%)] h-screen flex justify-between items-center flex-col">
        <div className="login-user__top flex items-center justify-center flex-col mt-[2rem]">
          <img
            src="../assets/img/logo.svg"
            className="login-user__logo h-[22px] w-[129px] scale-90 mb-[1rem]"
          />
          <span className="login-user__title text-white text-[2rem] font-[300]">
            Who Is Watching?
          </span>
        </div>

        <div className="login-user__form flex justify-center items-center">
          <div className="login-user__user-box flex flex-col items-center justify-center cursor-pointer">
            <img
              src="../assets/img/user-profile2.jpeg"
              className="login-user__user-img w-[125px] h-[125px] rounded-[50%] mb-[1rem] border-[3px] border-[solid] border-[rgb(132,0,255)] object-cover object-center"
            />
            <div className="login-user__user-name text-white">
                John
            </div>
          </div>
        </div>

        <div className="login-user__buttons mb-[2rem] flex gap-[1rem]">

            <button className="login-user__adult bg-[rgba(255,255,255,0.2)] rounded-[20px] h-[35px] w-[150px] uppercase text-white font-[700] cursor-pointer transition duration-300 hover:opacity-40">Add Adult</button>

            <button className="login-user__kid bg-[rgba(255,255,255,0.2)] rounded-[20px] h-[35px] w-[150px] uppercase text-white font-[700] cursor-pointer transition duration-300 hover:opacity-40">Add Kid</button>

        </div>
      </div>
    </div>
  );
}
