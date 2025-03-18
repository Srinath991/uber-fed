import React from "react";
import { Link } from "react-router";

const Start = () => {
  return (
    <div className=" bg-center bg-[image:var(--background-image-uber)] bg-cover h-screen w-screen flex flex-col justify-between">
      <div className="p-4">
         <img className="w-25 object-cover p-0 overflow-hidden rounded-lg mt-3" src="uber-logo.png" alt="uber" />
      </div>
      <div className="bg-white p-4">
        <h1 className="font-bold text-3xl">Get Started with Uber</h1>
        <Link className=" flex justify-center items-center w-full bg-black text-white p-4 rounded-xl mt-3 text-xl"
        to={'/user/login'}>
          Continue
        </Link>
      </div>
    </div>
  );
};

export default Start;
