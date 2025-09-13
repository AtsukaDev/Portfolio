import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import './App.css';

export default function Layout() {
    
    return (
        <div >
            
            <main >
                <Outlet />
            </main>
        </div>
    );
}
