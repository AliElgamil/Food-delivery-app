import { Container } from "reactstrap";
import { Common } from "../../../StylesComponents/CommonSection";
export default function CommonSection({ title }) {
  return (
    <Common background="./images/banner.jpg">
      <Container>
        <h2>{title}</h2>
      </Container>
    </Common>
  );
}
