import Header from "@/components/Header";
import Carousel from "../components/Slider/Slider";

const Home: React.FC = () => {
  return (
    <>
      <Header />

      <section className="px-4">
        <header className="flex flex-col py-1 text-[26px] text-customColorPurple md:flex-row md:text-[40px] md:space-x-[365px] md:border-b md:border-gray-200">
          <h2 className="border-b border-gray-200 md:border-none">
            1.0
          </h2>
          <h1>Наши услуги</h1>
        </header>

        <Carousel />
      </section>
    </>
  );
};

export default Home;