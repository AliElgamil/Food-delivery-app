import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/Ui/CommonSection/CommonSection";
import { auth } from "../Firebase";
import "../styles/form.css";

export default function Register() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const registerForm = async (e) => {
    e.preventDefault();
    try {
      if (fullName && email && password) {
        await createUserWithEmailAndPassword(auth, email, password);
        updateProfile(auth.currentUser, {
          displayName: fullName,
          photoURL: "/images/avatar.png",
        });
        auth.signOut();
        navigate("/login");
      } else {
        setError("Please fill the empty filed!");
      }
    } catch (err) {
      const error = err.message
        .split("/")
        .at(1)
        .replace(/-/g, " ")
        .replace(")", " ")
        .replace(".", " ")
        .trim();
      setError(error);
    }
  };
  return (
    <Helmet title={"login"}>
      <CommonSection title={"Login"} />
      <section className="section_container">
        <Container>
          <Row className="align-items-center">
            <Col md="6">
              <form className="form d-flex flex-column" onSubmit={registerForm}>
                {error && <label className="error_message">{error}</label>}
                <div className="input">
                  <input
                    type="text"
                    placeholder="Full name"
                    value={fullName}
                    onChange={({ target }) => setFullName(target.value)}
                  />
                  <span></span>
                </div>
                <div className="input">
                  <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={({ target }) => setEmail(target.value)}
                  />
                  <span></span>
                </div>
                <div className="input">
                  <input
                    type="password"
                    placeholder="Enter Your Password"
                    value={password}
                    onChange={({ target }) => setPassword(target.value)}
                  />
                  <span></span>
                </div>
                <button className="form_submit add-to-cart">Sign Up</button>
                <p className="d-flex gap-2">
                  Already have an account?
                  <Link to="/login">Login</Link>
                </p>
              </form>
            </Col>
            <Col md="6">
              <lottie-player
                src="https://assets1.lottiefiles.com/private_files/lf30_vf2aaeub.json"
                background="transparent"
                speed="1"
                style={{ width: "300px", height: "300px" }}
                loop
                autoplay
              ></lottie-player>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
}
