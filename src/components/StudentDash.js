import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebaseConfig";

const StudentDash = () => {
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
    <div>
      <p>{student?.email}</p>
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default StudentDash;
