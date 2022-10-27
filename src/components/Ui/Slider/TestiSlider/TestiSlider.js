import React from "react";
import Slider from "react-slick";

import avater1 from "../../../../assets/images/ava-1.jpg";
import avater2 from "../../../../assets/images/ava-2.jpg";
import avater3 from "../../../../assets/images/ava-3.jpg";
import avater4 from "../../../../assets/images/ava-4.jpg";

import "../../../../styles/testi-slider.css";

const sliderItems = [
  {
    name: "Jhon Doe",
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem mollitia quam aliquam vel ipsam magni quibusdam. Beatae, quaerat repellendus maxime dolore optio placeat asperiores ipsa ab veritatis laborum? Natus, aliquid.",
    image: avater1,
  },
  {
    name: "Mitchel Marsh",
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem mollitia quam aliquam vel ipsam magni quibusdam. Beatae, quaerat repellendus maxime dolore optio placeat asperiores ipsa ab veritatis laborum? Natus, aliquid.",
    image: avater2,
  },
  {
    name: "Steven Crock",
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem mollitia quam aliquam vel ipsam magni quibusdam. Beatae, quaerat repellendus maxime dolore optio placeat asperiores ipsa ab veritatis laborum? Natus, aliquid.",
    image: avater3,
  },
  {
    name: "Anna Doe",
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem mollitia quam aliquam vel ipsam magni quibusdam. Beatae, quaerat repellendus maxime dolore optio placeat asperiores ipsa ab veritatis laborum? Natus, aliquid.",
    image: avater4,
  },
];

export default function TestiSlider() {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 3000,
    arrows: false,
    swipeToSlide: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings}>
      {sliderItems.map((item, ind) => (
        <div className="item" key={ind}>
          <p className="reviews_text rounded-3">{item.text}</p>

          <div className="slider_content d-flex align-items-center gap-3 ">
            <div className="slider_image rounded overflow-hidden">
              <img src={item.image} alt="avater" className="img-fluid" />
            </div>
            <h6 className="m-0">{item.name}</h6>
          </div>
        </div>
      ))}
    </Slider>
  );
}
