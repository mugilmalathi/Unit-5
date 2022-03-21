import { Routes, Route } from "react-router";
import { Home } from "../Components/Home/Home";
import { Section } from "../Components/Section/Section";
import { BookDetailsPage } from "../Components/BookDetailsPage/BookDetailsPage";
import { NotFound } from "../Components/NotFound/NotFound";
import { Navbar } from "../Components/Navbar/Navbar";
import { BookCard } from "../Components/BookCard/BookCard";

export const AllRoutes = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
       <Route path="/history" element={<BookDetailsPage />} />
       <Route path="/mystery" element={<BookDetailsPage />} />
       <Route path="/history" element={<BookDetailsPage />} />
       <Route path="/technology" element={<BookDetailsPage />} />
       <Route path="/mythology" element={<BookDetailsPage />} />
      </Routes>
    </>
  );
};
