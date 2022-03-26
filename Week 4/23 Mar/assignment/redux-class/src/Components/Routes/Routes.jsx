import { Routes, Route } from "react-router";
import { Home } from "../Home/Home";
import { Login } from "../Login";
import { Navbar } from "../Navbar/Navbar";
import { Todo } from "../Todos";

export const AllRoutes = () => {
  return (
    <> 
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Todo" element={<Todo />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
};
