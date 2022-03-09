import { onAuthStateChanged } from "firebase/auth";
import { onValue, ref } from "firebase/database";
import React, { useEffect, useState } from "react";
import { auth, db } from "../../firebaseConfig";
import Sidebar from "./Sidebar";

const Term1 = () => {
  const [marks, setMarks] = useState([]);
  const subjects = ["English", "Maths", "Java"];

  useEffect(() => {
    onAuthStateChanged(auth, (currentStudent) => {
      if (currentStudent) {
        onValue(ref(db, `/${currentStudent.uid}`), (snapshot) => {
          setMarks([]);
          const data = snapshot.val();
          if (data !== null) {
            Object.values(data).map((mark) => {
              setMarks((oldMarks) => [...oldMarks, mark]);
            });
          }
        });
      }
    });
  }, []);

  return (
    <div className=" ">
      <Sidebar />
      <div className="flex text-xl h-[calc(100vh-187.025px)] mx-auto  items-center justify-evenly w-1/2">
        <div className="bg-[#750550] text-white rounded-md mr-1 p-2  text-center flex-grow">
          <h1 className="border-2 font-medium text-2xl shadow-sm shadow-white rounded-sm">
            Subject
          </h1>
          {subjects.map((subs) => (
            <p className="my-2">{subs}</p>
          ))}
        </div>
        <div className="bg-[#d3d0d2] text-[#750550] rounded-md ml-1 p-2  text-center flex-grow">
          <h1 className="border-2 font-medium border-[#750550] shadow-sm shadow-[#9f2d79ba] text-2xl rounded-sm">
            Marks
          </h1>
          {marks.map((mark) => (
            <p className="my-2 font-medium">{mark.Marks}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Term1;
