import React, { lazy } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const Home = lazy(() => import("./Pages/Home/Home"));
const Team = lazy(() => import("./Pages/Team/Team"));
const Resource = lazy(() => import("./Pages/Resource/Resource"));
const Event = lazy(() => import("./Pages/EventPage/Event"));
const Aboutpage = lazy(() => import("./Pages/About/Aboutpage"));
const Course = lazy(() => import("./Pages/Courses/Course"));
const Hackers = lazy(() => import("./Pages/Hackers/Hackers"));
const Videos = lazy(() => import("./Pages/Videos/Videos"));
const Player = lazy(() => import("./Pages/player/Player"));
const Register = lazy(() => import("./Pages/Registration/Register"));
const Achievement = lazy(() => import("./Pages/Achievement/Achievement"));
const Hackathons = lazy(() => import("./Pages/Hackathons/Hackathons"));
const Internship = lazy(() => import("./Pages/Internship/Internship"));
const Contact = lazy(() => import("./Pages/Contact/Contact"));

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/about", element: <Aboutpage /> },
      { path: "/team", element: <Team /> },
      { path: "/event", element: <Event /> },
      { path: "/achievement", element: <Achievement /> },
      { path: "/hackers/:name", element: <Hackers /> },
      { path: "/register", element: <Register /> },
      { path: "/contact", element: <Contact /> },
      { path: "/resource", element: <Resource /> },
      { path: "/course", element: <Course /> },
      { path: "/videos", element: <Videos /> },
      { path: "/video", element: <Player /> },
      { path: "/achievements/hackathons", element: <Hackathons /> },
      { path: "/achievements/internships", element: <Internship /> },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
