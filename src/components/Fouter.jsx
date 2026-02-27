import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { OverlayTrigger, Tooltip, Button } from "react-bootstrap";
import { FaLinkedin, FaEnvelope, FaGithub } from "react-icons/fa";
import { FcCallTransfer, FcBusinessman } from "react-icons/fc";
import { PiReadCvLogoLight } from "react-icons/pi";
import { Link } from "react-router-dom";
import { GoArrowUpRight } from "react-icons/go";
const email = "yousif.a.ragab.1@gmail.com";
const copyEmail = () => {
  navigator.clipboard.writeText(email);
};

function Footer() {
  return (
    <footer
      className="w-100 py-3 mt-5"
      style={{
        bottom: 0,
        background: "rgba(255, 255, 255, 0.05)",
        backdropFilter: "blur(1px)",
        borderTop: "1px solid rgba(255,255,255,0.15)",
      }}
    >
      <Container>
        <Row>
          <Col>
            <h4 className="text-start mt-0   text-light">
              <FcCallTransfer size={24} />
              Open to full time roles, project collabs, or conversations.
            </h4>
          </Col>
          <Col className="text-center">
            {/* LinkedIn */}
            <Button
              variant="light"
              className="bg-transparent border-0 p-4 icon-btn"
              onClick={() =>
                window.open(
                  " https://www.linkedin.com/in/youssef-ahmad-raj",
                  "_blank"
                )
              }
            >
              <FaLinkedin size={24} className="text-primary" />
            </Button>

            {/* apuot */}
            <Link
              variant="light"
              className="bg-transparent border-0 p-4 icon-btn"
              to="/about"
            >
              <FcBusinessman size={24} className="text-light" />
            </Link>

            {/* GitHub */}
            <Button
              variant="light"
              className="bg-transparent border-0 p-4 icon-btn"
              onClick={() =>
                window.open("https://github.com/YuossefAHegaze", "_blank")
              }
            >
              <FaGithub size={24} className="text-light" />
            </Button>
          </Col>
        </Row>
        <Row>
          {/* CV */}
          <Col>
            <Button
              variant="light"
              className="bg-transparent border-0 p-2 icon-btn text-light"
              onClick={() => window.open("/CV.pdf", "_blank")}
            >
              <PiReadCvLogoLight className="text-light" size={50} />
              My CV
            </Button>
          </Col>
          {/* Email */}
          <Col>
            <OverlayTrigger
              placement="top"
              overlay={<Tooltip>Copy my email</Tooltip>}
            >
              <Button
                variant="light"
                className="bg-transparent p-4 icon-btn text-light border rounded-5 mb-3 "
                onClick={copyEmail}
              >
                <FaEnvelope size={24} className="text-light" /> :
                yousif.a.ragab.1@gmail.com
                <GoArrowUpRight />
              </Button>
            </OverlayTrigger>
          </Col>
          <Col>
            <p className="text-end mt-5 text-light">
              © 2026 Youssef Ahmed — Frontend Developer
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
