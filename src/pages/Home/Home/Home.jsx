import Footer from "../Footer/Footer";
import Founders from "../Founders/Founders";
import HeroSection from "../HeroSection/HeroSection";
import Navbar from "../Navbar/Navbar";
import Quality from "../Quality/Quality";
import TextCarousel from "../TextCarousel/TextCarousel";

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <HeroSection></HeroSection>
            <div className="mt-28 mb-8">
            <Quality ></Quality>
            </div>
            <TextCarousel></TextCarousel>
            <Founders></Founders>
            <Footer></Footer>
        </div>
    );
};

export default Home;