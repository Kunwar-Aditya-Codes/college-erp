import React, { useState } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../../firebaseConfig";
import { Link, useNavigate } from "react-router-dom";

const Sidebar = () => {
  const [student, setStudent] = useState({});
  const navigate = useNavigate();

  onAuthStateChanged(auth, (currentStudent) => {
    setStudent(currentStudent);
  });

  const logout = async () => {
    await signOut(auth);
    navigate("/");
  };

  return (
    <div className=" flex justify-between px-24 text-xl   text-white p-4  bg-[#750550]">
      <div>User: {!student?.email ? "Student" : student?.email}</div>
      <div className="flex list-none flex-[0.8]  justify-around">
        <Link to="/student-dashboard/t1">Term 1</Link>
        <li>Term 2</li>
        <li>Term 3</li>
        <li>Term 4</li>
        <button onClick={logout}>Logout</button>
      </div>
    </div>
  );
};

export default Sidebar;
