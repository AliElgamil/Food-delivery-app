import React from "react";
import Loading from "../components/Loading/Loading";
import Helmet from "../components/Helmet/Helmet";
import "../styles/hero-section.css";
import Category from "../components/Ui/Category/Category";
import HeroSection from "../components/Ui/HeroSection/HeroSection";
import Feature from "../components/Ui/Feature/Feature";
import "../styles/home.css";
import PopularFoods from "../components/Ui/PopularFoods/PopularFoods";
import WhyTastyTreat from "../components/Ui/WhyTastyTreat/WhyTastyTreat";
import HotPizza from "../components/Ui/HotPizza/HotPizza";
import Testimonial from "../components/Ui/Testimonial/Testimonial";
export default function Home() {
  return (
    <>
      <Helmet title="Home">
        <section>
          <HeroSection />
        </section>

        <section className="pt-0">
          <Category />
        </section>

        <section>
          <Feature />
        </section>

        <section>
          <PopularFoods />
        </section>

        <section>
          <WhyTastyTreat />
        </section>

        <section>
          <HotPizza />
        </section>

        <section>
          <Testimonial />
        </section>
      </Helmet>
      <Loading show={true} />
    </>
  );
}
