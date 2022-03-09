import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import TeacherLogin from "./components/TeacherLogin";
import StudentDasboard from "./components/StudentDasboard";
import Term1 from "./components/Dashboard/Term1";

function App() {
  return (
    <div className="scroll-smooth">
      <Header />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login-teacher" element={<TeacherLogin />} />
        <Route path="/student-dashboard" element={<StudentDasboard />} />
        <Route path="/student-dashboard/t1" element={<Term1 />} />
      </Routes>
    </div>
  );
}

export default App;
