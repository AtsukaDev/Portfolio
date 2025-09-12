import "../App.css";

function Home() {
    return (
        <div>
            <div className="bg-[#10101a]  p-4 rounded border-white border-2">

            </div>

            <section className="max-w-4xl mx-auto mt-16 relative">
                <h2 className="text-white text-3xl font-bold text-center mb-12">My Journey</h2>

                <div className="relative">
                    <div className="absolute left-1/2 transform -translate-x-1/2 h-full border-l-2 border-gray-500"></div>

                    <div className="mb-12 flex justify-start w-full relative">
                        <div className="w-1/2 pr-8 text-right">
                            <h3 className="text-white text-xl font-semibold">Project 1</h3>
                            <p className="text-gray-300">DETAILS</p>
                        </div>
                        <div className="absolute left-1/2 transform -translate-x-1/2 bg-white w-4 h-4 rounded-full border border-gray-500"></div>
                    </div>

                    <div className="mb-12 flex justify-end w-full relative">
                        <div className="w-1/2 pl-8 text-left">
                            <h3 className="text-white text-xl font-semibold">Project 2</h3>
                            <p className="text-gray-300">DETAILS</p>
                        </div>
                        <div className="absolute left-1/2 transform -translate-x-1/2 bg-white w-4 h-4 rounded-full border border-gray-500"></div>
                    </div>

                    <div className="mb-12 flex justify-start w-full relative">
                        <div className="w-1/2 pr-8 text-right">
                            <h3 className="text-white text-xl font-semibold">Project 3</h3>
                            <p className="text-gray-300">DETAILS</p>
                        </div>
                        <div className="absolute left-1/2 transform -translate-x-1/2 bg-white w-4 h-4 rounded-full border border-gray-500"></div>
                    </div>
                </div>
            </section>



        </div>

    )
}

export default Home;