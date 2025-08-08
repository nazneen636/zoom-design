import React from "react";
import Root from "./components/common/Root";
import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./pages/Home/Index";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Root />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
