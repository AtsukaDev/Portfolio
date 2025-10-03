import './App.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout";
import Projects from './pages/Projects';
import Aniflex from './pages/Projects/Aniflex';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Projects /> },
      { path: "/Projects/Aniflex", element: <Aniflex/>}
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
