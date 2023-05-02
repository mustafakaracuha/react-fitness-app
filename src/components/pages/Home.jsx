import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import right from "../../assets/images/home/victor.jpg";

import { Avatar } from "@mui/material";
import { CgArrowRight } from "react-icons/cg";
import { FiLogOut } from "react-icons/fi";
import { HiOutlineDownload } from "react-icons/hi";

import { TypeAnimation } from "react-type-animation";

import { signOut } from "firebase/auth";
import { auth } from "../../config/firebase";

function Home() {
  const [user, setUser] = useState(undefined);  
  const navigate = useNavigate();

  const isLoggedIn = localStorage.getItem("user");


  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("user")));
  }, []);

  useEffect(() => {
    if (isLoggedIn === null) {
      navigate("/");
    }
  }, []);

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
        localStorage.removeItem("user");
      })
      .catch((error) => {
      });
  };

  return (
    <div className="w-full h-screen max-sm:p-0 p-4 overflow-hidden max-sm:overflow-auto">
      <div className="w-full h-full p-10 grid xl:grid-cols-2 sm:grid-cols-1 md:grid-cols-1 gap-x-5">
        <div className="w-full h-full">
          <TypeAnimation
            sequence={[
              "Get Fit,",
              1200,
              "Get Strong!",
              1200,
              "Get Healthy!",
              5000,
            ]}
            speed={50}
            style={{ fontSize: "80px" }}
            repeat={Infinity}
          />
          <h1 className="text-[80px]">And Free Sell!</h1>
          <p className="text-xl mt-3">
            A healthy lifestyle should be an important part of everyone's life,
            and fitness is an important aspect of maintaining this lifestyle.
            This site provides a resource that covers the latest trends in
            fitness, exercises and other important topics.
          </p>
          <p className="text-xl mt-4">
            The purpose of the site is to provide its visitors with the
            knowledge and skills necessary to maintain a healthy lifestyle. The
            site has many articles and videos on healthy eating, exercise
            techniques, motivation and more.
          </p>
          <p className="text-xl mt-4">
            You can also find information on up-to-date exercise programs,
            fitness equipment and healthy lifestyle products on the site. This
            way, you can find everything you need to have a healthy lifestyle in
            one place.
          </p>
          <div className="w-full grid xl:grid-cols-4 sm:grid-cols-2 gap-x-2 mt-10">
            <button className="group/item col-span-2 border-2 border-gray-300 h-14 rounded-full transition-all duration-500 text-black hover:bg-black hover:text-white flex items-center ">
              <Avatar src={user?.photoURL?.replace('"', "")} className="ml-2" />
              <p className="w-64 ml-3 text-md capitalize truncate">
                Welcome Back {user?.displayName ? user?.displayName : user?.email }
              </p>
              <CgArrowRight 
                size={25}
                className="ml-2 transition-all duration-300 group-hover/item:translate-x-2 group-hover/item:text-white"
              />
            </button>
            <button className="group/item xl:col-span-1 md:col-span-2 lg:col-span-1 max-sm:mt-4 md:mt-4 lg:mt-0 xl:mt-0 max-sm:col-span-2 border-2 border-gray-300 h-14 rounded-full transition-all duration-500 text-black hover:bg-black hover:text-white flex items-center justify-center">
              <p className="text-md capitalize">Download App</p>
              <HiOutlineDownload
                size={22}
                className="ml-2 -mt-1 transition-all duration-300 group-hover/item:translate-y-1 group-hover/item:text-white"
              />
            </button>
            <button
              onClick={handleLogout}
              className="xl:col-span-1 md:col-span-2 lg:col-span-1 max-sm:mt-4 md:mt-4 lg:mt-0 xl:mt-0 max-sm:col-span-2 group/item col-span-1 border-2 border-gray-300 h-14 rounded-full transition-all duration-500 text-black hover:bg-black hover:text-white flex items-center justify-center"
            >
              <p className="text-md capitalize">Quit</p>
              <FiLogOut
                size={22}
                className="ml-2 transition-all duration-300 group-hover/item:translate-x-2 group-hover/item:text-white"
              />
            </button>
          </div>
        </div>
        <div className="w-full h-full ml-3 md:hidden max-sm:hidden xl:block lg:block rounded-[50px] overflow-hidden shadow-xl shadow-gray-300">
          <img
            className="w-full h-full  object-cover transition-all duration-500 hover:scale-105"
            src={right}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
