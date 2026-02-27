import Background from "../components/Background";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import AnimatedSection from "../components/AnimatedSection";
import { Button } from "react-bootstrap";
import { PiReadCvLogoLight } from "react-icons/pi";
import { GoArrowUpRight } from "react-icons/go";
import whatsApp from "../Data/photos/whatsApp.jpg";
import { FaLinkedin } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import { FaGithub } from "react-icons/fa";
import Bye from "../Data/photos/Bye.mp4";
const email = "yousif.a.ragab.1@gmail.com";

const copyEmail = () => {
  navigator.clipboard.writeText(email);
};

function Connect() {
  return (
    <>
      <Background />
      <Container
        className="  justify-content-center align-items-center bg-light p-4 rounded-5 shadow-sm"
        style={{ minHeight: "85vh", marginTop: "7%" }}
      >
        <AnimatedSection>
          <Row className="justify-content-center">
            <Col>
              <h2> thenk you for Contact</h2>

              <p>
               I’m always open to discussing new opportunities, collaborations, or innovative ideas. Whether you have a project in mind or just want to connect, feel free to reach out. I’ll do my best to respond as soon as possible.
              </p>
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col>
              <img
                src={whatsApp}
                alt="WhatsApp"
                style={{
                  width: "100%",
                  maxWidth: "400px",
                  borderRadius: "13px",
                  borderBlockColor: "black",
                  borderWidth: "3px",
                  borderStyle: "solid",
                }}
              />
            </Col>
            <Col>
              <OverlayTrigger
                placement="top"
                overlay={<Tooltip>Copy my email</Tooltip>}
              >
                <Button
                  variant="black"
                  className="bg- p-4 icon-btn text-black border rounded-5 mb-3 "
                  onClick={copyEmail}
                >
                  <FaEnvelope size={50} className="text-black" /> :
                  yousif.a.ragab.1@gmail.com
                  <GoArrowUpRight />
                </Button>
              </OverlayTrigger>
            </Col>
            <video autoPlay loop muted playsInline style={{ width: "100%", maxWidth: "400px", borderRadius: "13px", }}>
              <source src={Bye} type="video/mp4" />
            </video>
          </Row>
          <Row className="justify-content-center">
            {/* LinkedIn */}
            <Col className="text-center">
              <Button
                variant="light"
                className="bg-transparent border-0 p-4 icon-btn mt-2"
                onClick={() =>
                  window.open(
                    " https://www.linkedin.com/in/youssef-ahmad-raj",
                    "_blank",
                  )
                }
              >
                <FaLinkedin size={100} className="text-primary" />
              </Button>
            </Col>
            {/* CV */}
            <Col>
              <Button
                variant="black"
                className="bg-transparent border-0 p-2 icon-btn text-light mt-2"
                onClick={() => window.open("/CV.pdf", "_blank")}
              >
                <PiReadCvLogoLight className="text-black" size={120} />
                My CV
              </Button>
            </Col>

            {/* GitHub */}
            <Col>
              <Button
                variant="black"
                className="bg-transparent border-0 p-4 icon-btn"
                onClick={() =>
                  window.open("https://github.com/YuossefAHegaze", "_blank")
                }
              >
                <FaGithub size={100} className="text-black" />
              </Button>
            </Col>
          </Row>
        </AnimatedSection>
      </Container>
    </>
  );
}

export default Connect;
