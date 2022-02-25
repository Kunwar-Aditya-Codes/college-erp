import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import TeacherLogin from "./components/TeacherLogin";
import StudentDash from "./components/StudentDash";

function App() {
  return (
    <div className="">
      <Header />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login-teacher" element={<TeacherLogin />} />
        <Route path="student-dashboard" element={<StudentDash />} />
      </Routes>
    </div>
  );
}

export default App;
