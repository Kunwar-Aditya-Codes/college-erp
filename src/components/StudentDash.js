import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { auth } from "../firebaseConfig";
import DataFile from "./DataFile";
import StudentData from "./StudentData";
import Submenu from "./Submenu";

const StudentDash = () => {
  const [student, setStudent] = useState({});

  const navigate = useNavigate();

  onAuthStateChanged(auth, (currentStudent) => {
    setStudent(currentStudent);
  });

  // console.log(student?.displayName);

  const logout = async () => {
    await signOut(auth);
    navigate("/");
  };

  return (
    <div className=" min-h-screen flex">
      {/* Sidebar */}
      <div className=" flex-[20%] border-r-2 border-r-[#9e0064]">
        <div className="bg-[#9e0064] text-white p-2 pl-4 text-justify font-serif py-4">
          <p className="text-lg">User:</p>
          <p className="text-xl underline underline-offset-2">
            {student?.email}
          </p>
          <button
            className="mt-4 text-lg hover:scale-110 transition-all ease-in-out"
            onClick={logout}
          >
            Logout
          </button>
        </div>
        <div className=" mt-1">
          {DataFile.map((item, index) => {
            return <Submenu item={item} key={index} />;
          })}
        </div>
      </div>

      {/* Center */}
      <div className=" flex-[80%]">
        <StudentData />
      </div>
    </div>
  );
};

export default StudentDash;
