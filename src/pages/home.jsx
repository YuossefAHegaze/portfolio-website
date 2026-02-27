import Header from "../components/Header";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import AnimatedSection from "../components/AnimatedSection.jsx";
import UseAnimationFrame from "../components/Box.jsx";
import Card from "react-bootstrap/Card";
import { FcApproval } from "react-icons/fc";
import VantaWaves from "../components/VantaWaves.jsx";
import WorkCard from "../components/WorkCard.jsx";
import photo from "../Data/photos/prodct1.png";
import { useEffect } from "react";
import fp1 from "../Data/photos/fp1.png";
import UnderConstructionWrapper from "../components/UnderConstructionWrapper.jsx";
const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <VantaWaves />
      {/*  section 1 */}
      <AnimatedSection type="fade-down">
        <Container className="mt-5 pb-5 pt-5 text-light">
          <Row className="mt-5">
            <Col>
              <Header
                location="start"
                title="Welcome to My Portfolio"
                subtitle="
I build responsive, user-focused web applications that combine performance with clean design. With strong expertise in React and modern JavaScript, I turn complex problems into intuitive interfaces. My goal is simple: create reliable, scalable solutions that deliver real value to users and businesses. "
              />
            </Col>
            <Col>
              <UseAnimationFrame />
            </Col>
          </Row>
          <Row className="mt-5">
            <Col>
              <Card
                bg="transparent"
                className="text-light border-dark text-center "
                body
              >
                💻 Frontend Developer — React & TypeScript
              </Card>
            </Col>
            <Col>
              <Card
                bg="transparent"
                className="text-light border-dark text-center"
                body
              >
                📍 Based in: Egypt — Open to Remote
              </Card>
            </Col>
            <Col>
              <Card
                bg="transparent"
                className="text-light border-dark text-center"
                body
              >
                <FcApproval /> Available for work
              </Card>
            </Col>
          </Row>
        </Container>
      </AnimatedSection>

      {/*  section 2 */}

      <Container>
        <AnimatedSection>
          <Header location="start" title="Selected Work" className="mt-5 " />

          <Row>
            <Col>
              <WorkCard
                title="Dashboard for E-commerce Analytics"
                description="A React-based dashboard that visualizes key e-commerce metrics using Chart.js."
                date="Nov 2025"
                image={fp1}
                link="/firstProject"
              />
            </Col>
          </Row>
        </AnimatedSection>
        {/*  section 3 */}
        <AnimatedSection type="zoom">
          <Row>
            <Col>
              <UnderConstructionWrapper githubLink=" https://github.com/YoussefRagab/Portfolio">
                <WorkCard
                  title="Modern Portfolio Website"
                  description="A responsive portfolio built with React, Framer Motion, and Bootstrap.  
                       Includes smooth animations and modern UI components."
                  date="Nov 2024"
                  image={photo}
                  link="/contact"
                />
              </UnderConstructionWrapper>
            </Col>
          </Row>
        </AnimatedSection>
        {/*  section 4 */}
        <AnimatedSection type="fade-down">
          <Row>
            <Col>
              <UnderConstructionWrapper githubLink="https://github.com/YoussefRagab/Portfolio">
                <WorkCard
                  title="Modern Portfolio Website"
                  description="A responsive portfolio built with React, Framer Motion, and Bootstrap.  
                       Includes smooth animations and modern UI components."
                  date="Nov 2024"
                  image={photo}
                  link="/contact"
                />
              </UnderConstructionWrapper>
            </Col>
          </Row>
        </AnimatedSection>
      </Container>

      {/*  section 5 */}
    </>
  );
};

export default Home;
