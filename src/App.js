import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Feed from "./Feed";
import Widget from "./Widget";
import Login from "./Login";
import { useStateValue } from "./StateProvider";
import "./App.css";

function App() {
  const [{ user }, dispatch] = useStateValue();
  return (
    // Use the BEM Naming Convention...
    <div className="app">
      {!user ? (
        <Login />
      ) : (
        <>
          {/* Header */}
          <Header />
          {/* Body */}
          <div className="app__body">
            {/* Sidebar */}
            <Sidebar />
            {/* Feed */}
            <Feed />
            {/* Widgets */}
            <Widget />
          </div>
        </>
      )}
    </div>
  );
}

export default App;
