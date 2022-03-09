import { signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../firebaseConfig";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { user } = await signInWithEmailAndPassword(auth, email, password);

      if (user) {
        alert("Sign in success!");
        navigate("/student-dashboard");
      } else {
        alert("Error!");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="text-center my-20">
      <form
        onSubmit={handleSubmit}
        className="grid bg-slate-100 border-2 border-slate-300 w-1/3 mx-auto justify-items-center p-6 rounded-md shadow-md"
      >
        <h1 className="font-medium text-3xl underline underline-offset-1 uppercase tracking-wide font-serif my-6">
          Student login
        </h1>

        <label className="my-4 text-2xl ">Email</label>
        <input
          className="text-lg pl-1"
          type="text"
          name="email"
          placeholder="Student Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          autoFocus
          required
        />
        <label className="my-4 text-2xl ">Password</label>
        <input
          className="text-lg pl-1"
          type="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button
          type="submit"
          className="text-2xl mt-8 bg--300 p-2 font-medium rounded-lg hover:scale-110 transition-all ease-linear hover:bg-amber-400"
        >
          Login
        </button>
      </form>

      <p className="mt-2 text-lg">
        Are you a teacher?
        <Link to="login-teacher" className="ml-2 hover:underline text-blue-500">
          Login here!
        </Link>
      </p>
    </div>
  );
};

export default Login;
