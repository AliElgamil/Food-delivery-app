import styled from "styled-components";

export const Common = styled.section`
  background: linear-gradient(#212245b2, #212245b2),
    ${({ background }) => `url(${background})`} no-repeat center center;
  background-size: cover;
  padding: 80px 0;

  h2 {
    color: #fff;
  }
`;
