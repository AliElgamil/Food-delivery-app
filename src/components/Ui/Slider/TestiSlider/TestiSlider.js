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
    nameAr: "جون دو",
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem mollitia quam aliquam vel ipsam magni quibusdam. Beatae, quaerat repellendus maxime dolore optio placeat asperiores ipsa ab veritatis laborum? Natus, aliquid.",
    textAr: `هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي القارئ عن التركيز على الشكل الخارجي للنص أو شكل توضع الفقرات في الصفحة التي يقرأها. ولذلك يتم استخدام طريقة لوريم إيبسوم لأنها تعطي توزيعاَ طبيعياَ -إلى حد ما- للأحرف عوضاً عن استخدام "هنا يوجد محتوى نصي، `,
    image: avater1,
  },
  {
    name: "Mitchel Marsh",
    nameAr: "ماتشيل مارشل",
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem mollitia quam aliquam vel ipsam magni quibusdam. Beatae, quaerat repellendus maxime dolore optio placeat asperiores ipsa ab veritatis laborum? Natus, aliquid.",
    textAr: `هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي القارئ عن التركيز على الشكل الخارجي للنص أو شكل توضع الفقرات في الصفحة التي يقرأها. ولذلك يتم استخدام طريقة لوريم إيبسوم لأنها تعطي توزيعاَ طبيعياَ -إلى حد ما- للأحرف عوضاً عن استخدام "هنا يوجد محتوى نصي، `,
    image: avater2,
  },
  {
    name: "Steven Crock",
    nameAr: "استيفان كروك",
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem mollitia quam aliquam vel ipsam magni quibusdam. Beatae, quaerat repellendus maxime dolore optio placeat asperiores ipsa ab veritatis laborum? Natus, aliquid.",
    textAr: `هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي القارئ عن التركيز على الشكل الخارجي للنص أو شكل توضع الفقرات في الصفحة التي يقرأها. ولذلك يتم استخدام طريقة لوريم إيبسوم لأنها تعطي توزيعاَ طبيعياَ -إلى حد ما- للأحرف عوضاً عن استخدام "هنا يوجد محتوى نصي، `,
    image: avater3,
  },
  {
    name: "Anna Doe",
    nameAr: "انا دو",
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem mollitia quam aliquam vel ipsam magni quibusdam. Beatae, quaerat repellendus maxime dolore optio placeat asperiores ipsa ab veritatis laborum? Natus, aliquid.",
    textAr: `هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي القارئ عن التركيز على الشكل الخارجي للنص أو شكل توضع الفقرات في الصفحة التي يقرأها. ولذلك يتم استخدام طريقة لوريم إيبسوم لأنها تعطي توزيعاَ طبيعياَ -إلى حد ما- للأحرف عوضاً عن استخدام "هنا يوجد محتوى نصي، `,
    image: avater4,
  },
];

export default function TestiSlider({ lang }) {
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
    <Slider {...settings} currentSlide={0} rtl={true}>
      {sliderItems.map((item, ind) => (
        <div className="item" key={ind}>
          <p
            className={`reviews_text rounded-3 text_ar`}
            style={{ textAlign: lang === "en" ? "left" : "right" }}
          >
            {lang === "en" ? item.text : item.textAr}
          </p>

          <div
            className="slider_content d-flex align-items-center gap-3"
            dir={lang === "en" ? "ltr" : "rtl"}
          >
            <div className="slider_image rounded overflow-hidden">
              <img src={item.image} alt="avater" className="img-fluid" />
            </div>
            <h6 className="m-0">{lang === "en" ? item.name : item.nameAr}</h6>
          </div>
        </div>
      ))}
    </Slider>
  );
}
