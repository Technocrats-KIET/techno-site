import "./App.css";
import { Outlet } from "react-router-dom";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import { Suspense, useEffect } from "react";
function App() {
  useEffect(() => {
    console.log(
      "%cDeveloped by Team Technocrats",
      "color: #0a66c2; font-weight: bold; font-size: 14px;",
    );
  }, []);
  return (
    <div className="container">
      <Header />
      <main>
        <Suspense fallback={<div className="page-loader">Loading…</div>}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}

export default App;
