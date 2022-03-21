import { Route } from "react-router";
import { HomePage } from "./HomePage";
import { Navbar } from "./Navbar";
import { ProductsDetailsPage } from "./ProductsDetailsPage";

export const Routes = () => {
  return (
    <>
      <Navbar />
      <Route path="/" element={<HomePage />} />
      <Route path="/products" element={<ProductsDetailsPage />} />
    </>
  );
};
