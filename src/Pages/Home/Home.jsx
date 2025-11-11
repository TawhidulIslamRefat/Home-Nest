import Banner from "../../Components/Banner/Banner";
import WhyChooseUs from "../../Components/WhyChooseUs/WhyChooseUs";
import OurService from "../../Components/OurService/OurService";
import Loading from "../../Components/Loading/Loading";
import ConsultSection from "../../Components/Consult/Consult";
import PropertyCard from "../../Components/LatestProperties/LatestProperties";
import LatestProperties from "../../Components/LatestProperties/LatestProperties";



const Home = () => {
  return (
    <div>
      <section className="bg-[#F2F6F7] py-20 mt-3">
        <Banner></Banner>
      </section>
      <section className="mt-15">
        <OurService></OurService>
      </section>
      <section>
        <LatestProperties
        ></LatestProperties>
      </section>
      <section>
        <WhyChooseUs></WhyChooseUs>
      </section>
      <section>
        <ConsultSection></ConsultSection>
      </section>
    </div>
  );
};

export default Home;
