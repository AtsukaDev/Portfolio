import '../../App.css';
import { Link } from 'react-router-dom';

export default function Aniflex() {
    return (
        <div className="min-h-screen flex flex-col">
            <div className="fixed top-0 left-0 z-50 p-4">
                <Link to="/">
                    <button className="text-3xl p-2 rounded-full border-2 border-black text-black bg-white/80 backdrop-blur-sm hover:bg-black hover:text-white transition-colors">
                        <i className="fa-solid fa-arrow-left"></i>
                    </button>
                </Link>
            </div>
            <div className="relative">
                <div className="sticky top-0 h-[110vh] flex flex-col items-center pt-8  bg-gradient-to-b from-green-200 to-blue-200">
                    <div className="flex justify-center bg-transparent pb-4">
                        <h1 className="text-5xl md:text-6xl lilita text-center">Aniflex</h1>
                    </div>
                    <div className="flex flex-col lg:flex-row items-center justify-center mt-10 mx-2 md:mx-6 lg:mx-16 xl:mx-48 gap-10 lg:gap-32 object-contain">
                        <div className="flex justify-center h-[50vh] md:h-[60vh] lg:h-[70vh]">
                            <img
                                src="../../img/aniflex/home.png"
                                alt="mockup home page Aniflex"
                                className="h-full w-auto rounded-xl"
                            />
                        </div>
                        <div className="flex flex-col flex-1 justify-center items-center text-center gap-4">
                            <h2 className="text-4xl lg:text-5xl lilita">
                                AN ANIME RECOMMENDATION MOBILE APP.
                            </h2>
                            <p className="text-lg md:text-xl max-w-lg lilita">
                                Your companion for discovering and tracking anime series tailored to your preferences.

                            </p>
                            <p>(Scroll down to see more)</p>
                        </div>
                    </div>
                </div>
                <div className="sticky top-0 h-[110vh] flex flex-col items-center justify-center bg-gradient-to-b from-indigo-800 to-purple-800 text-white">
                    <div className="flex flex-col lg:flex-row items-center justify-center mx-2 md:mx-6 lg:mx-16 xl:mx-48 gap-10 lg:gap-32 object-contain">
                        <div className="flex justify-center h-[50vh] md:h-[60vh] lg:h-[70vh]">
                            <img
                                src="/videos/aniflex_discover.gif"
                                alt="Aniflex demo"
                                className="h-full w-auto rounded-xl"
                                loading="lazy"
                            />
                        </div>
                        <div className="flex flex-col flex-1 justify-center items-center text-center gap-4">
                            <h2 className="text-4xl lg:text-5xl lilita">
                                DISCOVER NEW ANIMES
                            </h2>
                            <p className="text-lg md:text-xl max-w-lg">
                                Explore a vast collection of anime series and find your next favorite show with personalized recommendations.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="sticky top-0 h-[110vh] flex flex-col items-center justify-center bg-gradient-to-b from-purple-800 to-pink-800 text-white">
                    <div className="flex flex-col lg:flex-row items-center justify-center mx-2 md:mx-6 lg:mx-16 xl:mx-48 gap-10 lg:gap-32 object-contain">
                        <div className="flex justify-center h-[50vh] md:h-[60vh] lg:h-[70vh]">
                            <img
                                src="/videos/aniflex_bibli.gif"
                                alt="Aniflex demo"
                                className="h-full w-auto rounded-xl"
                                loading="lazy"
                            />
                        </div>
                        <div className="flex flex-col flex-1 justify-center items-center text-center gap-4">
                            <h2 className="text-4xl lg:text-5xl lilita">
                                TRACK YOUR WATCHLIST
                            </h2>
                            <p className="text-lg md:text-xl max-w-lg">
                                Keep track of what you're watching and organize your anime journey all in one place.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="sticky top-0 h-[110vh] flex flex-col items-center justify-center bg-gradient-to-b from-blue-200 to-indigo-100 text-black">
                    <div className="flex flex-col lg:flex-row items-center justify-center mx-2 md:mx-6 lg:mx-16 xl:mx-48 gap-10 lg:gap-32 object-contain">
                        <div className="flex flex-col flex-1 justify-center items-center text-center gap-4">
                            <h2 className="text-4xl lg:text-5xl lilita">
                                AVAILABLE SOON
                            </h2>
                            <p className="text-lg md:text-xl max-w-lg">
                                Beta launch late 2025.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}