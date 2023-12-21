import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./Layout";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/recevied" element={<Layout/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
