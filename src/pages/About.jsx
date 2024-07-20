import Helmet from "../components/Helmet";
import about from "../assets/Online-Shopping-.webp";
import { aboutInfo } from "../constants/aboutData";
import Carousel from "../components/Carousel";
import Breadcrumb from "../components/Breadcrumb";

const About = () => {
  return (
    <Helmet title="About">
      <Breadcrumb />
      <section className="container max-w-7xl mx-auto px-4 mt-10">
        <div className="flex flex-col items-center lg:flex-row gap-9 mb-16">
          <div className="lg:w-1/2">
            <h1 className="text-3xl mb-5 font-semibold">Our Story</h1>
            <p className="mb-4">
              Launced in 2015, Shop Wave is South Asia’s premier online shopping
              makterplace with an active presense in Bangladesh. Supported by
              wide range of tailored marketing, data and service solutions, Shop
              Wave has 10,500 sallers and 300 brands and serves 3 millioons
              customers across the region.{" "}
            </p>
            <p>
              Shop Wave has more than 1 Million products to offer, growing at a
              very fast. Shop Wave offers a diverse assotment in categories
              ranging from consumer.
            </p>
          </div>
          <div className="lg:w-1/2">
            <img className="w-full" src={about} alt="" />
          </div>
        </div>

        <div className="flex flex-col md:grid md:grid-cols-2 md:grid-rows-auto lg:grid-cols-4 gap-10 mb-14">
          {aboutInfo.map((info) => (
            <div
              className="lg:w-[250px] border-2 border-neutral-400 rounded-lg py-3 flex flex-col items-center hover:bg-[#ff4648] hover:text-white"
              key={info.id}
            >
              <span>{info.image}</span>
              <p className="text-2xl font-bold mb-1 mt-2">{info.number}</p>
              <p className="text-sm">{info.desc}</p>
            </div>
          ))}
        </div>
        <Carousel />
        <div className="my-14">

        </div>

      </section>
    </Helmet>
  );
};

export default About;
