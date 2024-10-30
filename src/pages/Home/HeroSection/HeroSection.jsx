import 'animate.css';


const HeroSection = () => {
    return (
        <div>
            <div
                className="hero min-h-[60vh] md:min-h-[70vh] lg:min-h-[80vh]"
                style={{
                    backgroundImage: "url(https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp)",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-neutral-content text-center px-4 sm:px-8 md:px-12 lg:px-16">
                    <div className="mx-auto">
                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold animate-fadeIn">
                            Believe in  Craftsmanship <br /> and Luxurious Design
                        </h1>
                    </div>
                </div>

            </div>
            <header className=" bg-white p-6 md:p-8 lg:p-10">
                <div className="text-center max-w-2xl mx-auto">
                    <h1 className="text-2xl md:text-4xl lg:text-xl text-orange-300 mb-4 animate__animated animate__fadeIn animate__delay-1s">
                        Our Shop
                    </h1>

                    <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-black mb-4 animate__animated animate__fadeIn animate__delay-2s">
                        Focusing on Quality <br /> Material, Good Design
                    </h2>

                    <p className="text-base md:text-lg lg:text-clip leading-relaxed text-gray-500 animate__animated animate__fadeIn animate__delay-3s">
                        Donec non interdum nisl. Sed ut est ac lacus sodales convallis. Nam non velit justo. Mauris vel ultrices tortor. Proin bibendum magna porttitor porttitor suscipit. Praesent sit amet consequat eros. Quisque ullamcorper ornare vulputate. Nam sodales sem id diam sollicitudin, id lobortis tellus tincidunt.
                    </p>

                    <p className="text-lg font-bold text-white mt-4 animate__animated animate__fadeIn animate__delay-4s">
                        Guza
                    </p>
                </div>
            </header>
            <div className="flex flex-col md:flex-row justify-center w-full h-full items-center left-4 right-4 gap-6">
                {/* Left Image */}
                <img
                    src="https://i.postimg.cc/FKhNXnLv/about1.png"
                    alt="Image 1"
                    className="w-[25rem] h-[20rem] md:w-[30rem] md:h-[24rem] object-cover hover:scale-105 transition-transform duration-200" // Adjusted for responsiveness
                />

                {/* Right Image */}
                <img
                    src="https://i.postimg.cc/pyNMG0Hg/about2.png"
                    alt="Image 2"
                    className="w-[25rem] h-[20rem] md:w-[30rem] md:h-[24rem] object-cover hover:scale-105 transition-transform duration-200" // Adjusted for responsiveness
                />
            </div>

        </div>
    );
};

export default HeroSection;