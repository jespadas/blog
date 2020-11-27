import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import AllPost from "./components/AllPost";
import OnePost from "./components/OnePost";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Route component={AllPost} path="/" exact />
        <Route component={OnePost} path="/:slug" />
      </div>
    </BrowserRouter>
  );
}

export default App;
