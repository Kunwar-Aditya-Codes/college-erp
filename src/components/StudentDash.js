import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { auth } from "../firebaseConfig";
import DataFile from "./DataFile";
import Submenu from "./Submenu";

const StudentDash = () => {
  const [student, setStudent] = useState({});
  const [subnav, setSubnav] = useState(false);
  const navigate = useNavigate();

  onAuthStateChanged(auth, (currentStudent) => {
    setStudent(currentStudent);
  });

  const logout = async () => {
    await signOut(auth);
    navigate("/");
  };

  const showSubnav = () => setSubnav(!subnav);

  return (
    <div className="border-2 border-black min-h-screen flex">
      {/* Sidebar */}
      <div className="border-2 border-fuchsia-400 flex-[20%]">
        <div className="bg-[#9e0064] text-white p-2 text-justify font-serif py-4">
          <p className="text-lg">User</p>
          <p className="text-xl underline underline-offset-2">
            {student?.email}
          </p>
        </div>
        <div className=" mt-1">
          {DataFile.map((item, index) => {
            return <Submenu item={item} key={index} />;
          })}
        </div>
      </div>

      {/* Center */}
      <div className="border-2 border-amber-400 flex-[80%]"></div>
    </div>
  );
};

export default StudentDash;
