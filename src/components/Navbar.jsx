import '../App.css';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav className="w-full text-white top-0 left-0">
            <ul className="flex justify-center items-center space-x-4 p-4" style={{ fontFamily: "Camcode, sans-serif" }}>
                <li>
                    <Link 
                        to="/" 
                        className="block px-3 py-1 rounded-full bg-gray-800 text-center hover:bg-gray-700"
                        
                    >
                        Home
                    </Link>
                </li>
                <li>
                    <Link 
                        to="/projects" 
                        className="block px-3 py-1 rounded-full bg-gray-800 text-center hover:bg-gray-700"
                    >
                        Projects
                    </Link>
                </li>
                <li>
                    <Link 
                        to="/about" 
                        className="block px-3 py-1 rounded-full bg-gray-800 text-center hover:bg-gray-700"
                    >
                        About
                    </Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;
