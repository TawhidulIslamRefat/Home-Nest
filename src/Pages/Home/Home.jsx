import Banner from "../../Components/Banner/Banner";
import WhyChooseUs from "../../Components/WhyChooseUs/WhyChooseUs";
import OurService from "../../Components/OurService/OurService";
import Loading from "../../Components/Loading/Loading";
import ConsultSection from "../../Components/Consult/Consult";
import PropertyCard from "../../Components/LatestProperties/LatestProperties";
import LatestProperties from "../../Components/LatestProperties/LatestProperties";
import FAQ from "../../Components/FAQ/FAQ";
import Highlights from "../../Components/Categories/Categories";
import Testimonials from "../../Components/Testimonials/Testimonials";
import Blogs from "../../Components/Blogs/Blogs";
import Categories from "../../Components/Categories/Categories";



const Home = () => {
  return (
    <div>
      <section className="bg-[#F2F6F7] dark:bg-[#23272b] py-15 md:py-20">
        <title>Home</title>
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
        <Categories></Categories>
      </section>
      <section>
        <Testimonials></Testimonials>
      </section>
      <section>
        <Blogs></Blogs>
      </section>
      <section>
        <WhyChooseUs></WhyChooseUs>
      </section>
      <section>
        <FAQ></FAQ>
      </section>
      <section>
        <ConsultSection></ConsultSection>
      </section>
    </div>
  );
};

export default Home;
