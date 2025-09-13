import './App.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import Projects from './pages/Projects';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Projects /> }
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
