import '../../App.css';
import { Link } from 'react-router-dom';

export default function Aniflex() {
    return (
        <div className="min-h-screen flex flex-col">
            <div className="absolute p-4">
                <Link to="/">
                    <button className="text-3xl p-2 rounded-full border-2 border-black text-black">
                        <i className="fa-solid fa-arrow-left"></i>
                    </button>
                </Link>
            </div>

            <div className="flex justify-center mt-6">
                <h1 className="text-5xl md:text-6xl lilita text-center">Aniflex</h1>
            </div>

            <div className="flex flex-col lg:flex-row items-center justify-center mt-10 mx-2 md:mx-6 lg:mx-16 xl:mx-48 gap-10 lg:gap-32 object-contain">
                <div className="flex justify-center h-[50vh] md:h-[60vh] lg:h-[70vh]">
                    <img
                        src="../../img/aniflex/home.png"
                        alt="mockup home page Aniflex"
                        className="h-full w-auto  rounded-xl"
                    />
                </div>

                <div className="flex flex-1 justify-center items-center text-center mt-8 lg:mt-0">
                    <h2 className="text-4xl lg:text-5xl lilita">
                        AN ANIME RECOMMENDATION MOBILE APP.
                    </h2>
                </div>
            </div>
        </div>
    );
}
