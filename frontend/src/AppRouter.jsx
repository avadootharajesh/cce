import React from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { RecoilRoot } from "recoil";

// pages
import HomePage from "./pages/HomePage.jsx";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <RecoilRoot>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </RecoilRoot>
    </BrowserRouter>
  );
}
