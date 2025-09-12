import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import './App.css';

export default function Layout() {
    return (
        <div >
            <Navbar />
            <main >
                <Outlet />
            </main>
        </div>
    );
}
