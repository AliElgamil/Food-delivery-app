import React, { useRef, useState } from "react";
import { useSelector } from "react-redux";
import { Col, Container, Row } from "reactstrap";
import Helmet from "../../Helmet/Helmet";
import CommonSection from "../CommonSection/CommonSection";
import "../../../styles/checkout.css";
import toast from "react-hot-toast";
export default function CheckoutLayout() {
  const { totalPrice } = useSelector((state) => state.cartItems);
  const { lang } = useSelector((state) => state.lang);
  const texShopping = 30;

  const inputNameEl = useRef();
  const inputEmailEl = useRef();
  const inputPhoneEl = useRef();
  const inputCountryEl = useRef();
  const inputCityEl = useRef();
  const inputPCEl = useRef();

  const [inputName, setInputName] = useState({ content: "", validate: false });
  const [inputEmail, setInputEmail] = useState({
    content: "",
    validate: false,
  });
  const [inputPhone, setInputPhone] = useState({
    content: "",
    validate: false,
  });
  const [inputCountry, setInputCountry] = useState({
    content: "",
    validate: false,
  });
  const [inputCity, setInputCity] = useState({ content: "", validate: false });
  const [inputPostalCode, setInputPostalCode] = useState({
    content: "",
    validate: false,
  });

  const inputNameValid = () => {
    if (/^[A-Za-z]+ [A-Za-z]/.test(`${inputNameEl.current.value}`)) {
      setInputName({ content: "", validate: true });
    } else if (!inputNameEl.current.value) {
      setInputName({ content: "", validate: false });
    } else {
      setInputName({
        content: [
          <i className="ri-information-fill"></i>,
          lang === "en"
            ? "Please use the format first name, Last name"
            : "من فضلك ادخل الاسم الاول و الاخير",
        ],
        validate: false,
      });
    }
  };

  const inputEmailValid = () => {
    if (
      /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(
        `${inputEmailEl.current.value}`
      )
    ) {
      setInputEmail({ content: "", validate: true });
    } else if (!inputEmailEl.current.value) {
      setInputEmail({ content: "", validate: false });
    } else {
      setInputEmail({
        content: [
          <i className="ri-information-fill"></i>,
          lang === "en" ? "Your Email is not valid!" : "الايميل غير صالح!",
        ],
        validate: false,
      });
    }
  };
  const inputPhoneValid = () => {
    if (/^01[0125][0-9]{8}$/gm.test(`${inputPhoneEl.current.value}`)) {
      setInputPhone({ content: "", validate: true });
    } else if (!inputPhoneEl.current.value) {
      setInputPhone({ content: "", validate: false });
    } else {
      setInputPhone({
        content: [
          <i className="ri-information-fill"></i>,
          lang === "en"
            ? "Please insert the correct number should start 010,011,012,015 "
            : "ادخل رقم موبيل صالح يبدء (010,011,012,015) و مكون من 11 رقم",
        ],
        validate: false,
      });
    }
  };
  const inputCountryValid = () => {
    if (/^[A-Za-z]+$/.test(`${inputCountryEl.current.value}`)) {
      setInputCountry({ content: "", validate: true });
    } else if (!inputCountryEl.current.value) {
      setInputCountry({ content: "", validate: false });
    } else {
      setInputCountry({
        content: [
          <i className="ri-information-fill"></i>,
          lang === "en"
            ? "Please insert the correct Country"
            : "من فضلك ادخل اسم دولة صالح",
        ],
        validate: false,
      });
    }
  };
  const inputCityValid = () => {
    if (/^[A-Za-z]+$/.test(`${inputCityEl.current.value}`)) {
      setInputCity({ content: "", validate: true });
    } else if (!inputCityEl.current.value) {
      setInputCity({ content: "", validate: false });
    } else {
      setInputCity({
        content: [
          <i className="ri-information-fill"></i>,
          lang === "en"
            ? "Please insert the correct city"
            : "من فضلك ادخل اسم مدينة صالح",
        ],
        validate: false,
      });
    }
  };
  const inputPostalCodeValid = () => {
    if (/(^\d{5}$)|(^\d{5}-\d{4}$)/.test(`${inputPCEl.current.value}`)) {
      setInputPostalCode({ content: "", validate: true });
    } else if (!inputPCEl.current.value) {
      setInputPostalCode({ content: "", validate: false });
    } else {
      setInputPostalCode({
        content: [
          <i className="ri-information-fill"></i>,
          lang === "en"
            ? "Please insert the correct postal code number"
            : "من فضلك ادخل رقم بريد صالح",
        ],
        validate: false,
      });
    }
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();

    if (!inputNameEl.current.value)
      setInputName({
        content: [
          <i className="ri-information-fill"></i>,
          lang === "en"
            ? "Please fill this felid"
            : "من فضلك املأ الحقل الفارغ",
        ],
        validate: false,
      });

    if (!inputEmailEl.current.value)
      setInputEmail({
        content: [
          <i className="ri-information-fill"></i>,
          lang === "en"
            ? "Please fill this felid"
            : "من فضلك املأ الحقل الفارغ",
        ],
        validate: false,
      });

    if (!inputPhoneEl.current.value)
      setInputPhone({
        content: [
          <i className="ri-information-fill"></i>,
          lang === "en"
            ? "Please fill this felid"
            : "من فضلك املأ الحقل الفارغ",
        ],
        validate: false,
      });

    if (!inputCountryEl.current.value)
      setInputCountry({
        content: [
          <i className="ri-information-fill"></i>,
          lang === "en"
            ? "Please fill this felid"
            : "من فضلك املأ الحقل الفارغ",
        ],
        validate: false,
      });

    if (!inputCityEl.current.value)
      setInputCity({
        content: [
          <i className="ri-information-fill"></i>,
          lang === "en"
            ? "Please fill this felid"
            : "من فضلك املأ الحقل الفارغ",
        ],
        validate: false,
      });

    if (!inputPCEl.current.value)
      setInputPostalCode({
        content: [
          <i className="ri-information-fill"></i>,
          lang === "en"
            ? "Please fill this felid"
            : "من فضلك املأ الحقل الفارغ",
        ],
        validate: false,
      });

    if (
      inputName.validate &&
      inputEmail.validate &&
      inputPhone.validate &&
      inputCountry.validate &&
      inputCity.validate &&
      inputPostalCode.validate
    ) {
      const option = {
        duration: 4000,
        className: "toast_success",
        position: "top-right",
      };
      toast.success(
        lang === "en"
          ? `Thank you ${inputNameEl.current.value}  for using this app ❤️❤️`
          : `شكراٌ لك ${inputNameEl.current.value} لانك استخدامت التطبيق ❤️❤️`,
        option
      );
    }
  };
  return (
    <Helmet title={lang === "en" ? "checkout" : "الدفع"}>
      <CommonSection title={lang === "en" ? "checkout" : "الدفع"} />
      <section>
        <Container>
          <Row>
            <Col md="8">
              <form
                className="form d-flex flex-column gap-3"
                onSubmit={formSubmitHandler}
              >
                <h3>{lang === "en" ? "Shopping Address" : "بيانات التوصيل"}</h3>
                <div className="input">
                  <input
                    type="text"
                    placeholder={
                      lang === "en" ? "Enter Your name" : "ادخل اسمك"
                    }
                    autoComplete="off"
                    onChange={inputNameValid}
                    ref={inputNameEl}
                  />
                  <span></span>
                </div>
                {inputName.content ? (
                  <p className="invalid_input m-0 d-flex align-items-center gap-2">
                    {inputName.content.map((item, ind) => (
                      <span key={ind}>{item}</span>
                    ))}
                  </p>
                ) : null}
                <div className="input">
                  <input
                    type="email"
                    placeholder={
                      lang === "en" ? "Enter Your email" : "ادخل ايميلك"
                    }
                    autoComplete="off"
                    ref={inputEmailEl}
                    onChange={inputEmailValid}
                  />
                  <span></span>
                </div>
                {inputEmail.content ? (
                  <p className="invalid_input m-0 d-flex align-items-center gap-2">
                    {inputEmail.content.map((item, ind) => (
                      <span key={ind}>{item}</span>
                    ))}
                  </p>
                ) : null}
                <div className="input">
                  <input
                    type="tel"
                    placeholder={lang === "en" ? "Phone number" : "رقم الموبيل"}
                    autoComplete="off"
                    ref={inputPhoneEl}
                    onChange={inputPhoneValid}
                  />
                  <span></span>
                </div>
                {inputPhone.content ? (
                  <p className="invalid_input m-0 d-flex align-items-center gap-2">
                    {inputPhone.content.map((item, ind) => (
                      <span key={ind}>{item}</span>
                    ))}
                  </p>
                ) : null}
                <div className="input">
                  <input
                    type="text"
                    placeholder={lang === "en" ? "Country" : "بلدك"}
                    autoComplete="off"
                    ref={inputCountryEl}
                    onChange={inputCountryValid}
                  />
                  <span></span>
                </div>
                {inputCountry.content ? (
                  <p className="invalid_input m-0 d-flex align-items-center gap-2">
                    {inputCountry.content.map((item, ind) => (
                      <span key={ind}>{item}</span>
                    ))}
                  </p>
                ) : null}
                <div className="input">
                  <input
                    type="text"
                    placeholder={lang === "en" ? "City" : "مدينتك"}
                    autoComplete="off"
                    ref={inputCityEl}
                    onChange={inputCityValid}
                  />
                  <span></span>
                </div>
                {inputCity.content ? (
                  <p className="invalid_input m-0 d-flex align-items-center gap-2">
                    {inputCity.content.map((item, ind) => (
                      <span key={ind}>{item}</span>
                    ))}
                  </p>
                ) : null}
                <div className="input">
                  <input
                    type="tel"
                    placeholder={lang === "en" ? "Postal code" : "رقم البريد"}
                    autoComplete="off"
                    ref={inputPCEl}
                    onChange={inputPostalCodeValid}
                  />
                  <span></span>
                </div>
                {inputPostalCode.content ? (
                  <p className="invalid_input m-0 d-flex align-items-center gap-2">
                    {inputPostalCode.content.map((item, ind) => (
                      <span key={ind}>{item}</span>
                    ))}
                  </p>
                ) : null}
                <button className="form_submit add-to-cart">
                  {lang === "en" ? "Finish shopping" : "انهاء عملية الشراء"}
                </button>
              </form>
            </Col>

            <Col md="4">
              <div className="payment_info mt-3 mt-md-0">
                <p className="d-flex justify-content-between m-0">
                  {lang === "en" ? "subtotal" : "المجموع الاولي"}
                  <span>${totalPrice}</span>
                </p>
                <p className="d-flex justify-content-between m-0">
                  {lang === "en" ? "shopping" : "مصاريف اضافية"}
                  <span>${texShopping}</span>
                </p>

                <h4 className="d-flex justify-content-between my-4 ">
                  {lang === "en" ? "Total" : "المجموع"}
                  <span>${totalPrice + texShopping}</span>
                </h4>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
}
