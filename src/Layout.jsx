import { Outlet } from "react-router-dom";
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
