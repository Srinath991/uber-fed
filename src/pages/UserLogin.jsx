import React, { useState } from "react";
import { Link } from "react-router";
const UserLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");
  const [userData, setuserData] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    setuserData({ ...userData, email, password });

    setEmail("");
    setpassword("");
  };

  return (
    <div className=" flex flex-col justify-between p-5 h-screen">
      <div>
        <div className=" pb-6">
          <img
            className="w-25 object-cover p-0 overflow-hidden rounded-lg"
            src="uber-logo.png"
            alt="uber"
          />
        </div>
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <div className="flex flex-col gap-2">
            <h3 className=" text-2xl font-semibold">What's your email</h3>
            <input
            autoComplete="current-password"
              className="bg-[#eeeeee] rounded p-2 w-full text-lg "
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="email@example.com"
            />
          </div>
          <div className="flex flex-col gap-2">
            <h3 className=" text-2xl font-semibold">Enter password</h3>
            <input
              value={password}
              className="bg-[#eeeeee] rounded p-2 w-full text-lg "
              type="password"
              required
              placeholder="password"
              onChange={(e) => setpassword(e.target.value)}
              autoComplete="current-password"
            />
          </div>
          <div>
            <button className=" w-full bg-[#111] text-white mt-3 rounded font-extrabold p-4 mb-1">
              Login
            </button>
            <p className="mt-1.5 text-center">
              New here?{" "}
              <Link to={"/signup"} className=" text-blue-400">
                Create new account
              </Link>
            </p>
          </div>
        </form>
      </div>
      <Link
        to={"/captain-login"}
        className=" flex justify-center items-center w-full bg-[#10b461] text-white p-3 rounded mt-3 text-xl font-semibold"
      >
        Sign in as Captain
      </Link>
    </div>
  );
};

export default UserLogin;
