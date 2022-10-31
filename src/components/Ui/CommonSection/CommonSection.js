import { Container } from "reactstrap";
import { Common } from "../../../StylesComponents/CommonSection";
export default function CommonSection({ title, background }) {
  return (
    <Common background={!background ? "./images/banner.jpg" : background}>
      <Container>
        <h2>{title}</h2>
      </Container>
    </Common>
  );
}
