import React from "react";
import { Link } from "react-router-dom";
import cap from "../images/cap.png";

export default function Navbar() {
  return (
    <nav className="flex h-screen text-black bg-pink-300">
      <div className="flex-grid my-auto text-center mx-auto text-2xl font-bold text-slate-400 justify-center">
        <div className="text-2xl text-white uppercase ">Bay Doxey</div>
        <div className="text-xs text-black uppercase border-b-4 pb-2 border-pink-600">
          Voice Over | Professional Badass | Stage Acting
        </div>

        <div>
          <div className="flex mt-8 mx-auto w-3/4 rounded-full bg-black overflow-hidden border-b-8 border-pink-600 ">
            <img classname="" src={cap} alt="" />
          </div>
          <div>
            <p className="mt-2 uppercase text-xs">Level 20</p>
            <p className="mt-2 uppercase text-xs">She / They</p>
          </div>
        </div>

        <ul className="max-w-1/2 grid mt-4">
          <li className="my-4  text-white rounded-lg border-2 rounded-md border-yellow-200 uppercase">
            About me
          </li>
          <li className="my-4 text-white rounded-lg border-2 rounded-md border-yellow-200 uppercase">
            VO #1
          </li>
          <li className="my-4 text-white rounded-lg border-2 rounded-md border-yellow-200 uppercase">
            Demo
          </li>
          <li className="my-4  text-white rounded-lg border-2 rounded-md border-yellow-200 uppercase">
            Stage #2
          </li>

          <li className="my-4 p-1 text-2xl text-white bg-red-600 rounded-lg uppercase">
            Contact ME
          </li>
        </ul>
      </div>
    </nav>
  );
}
