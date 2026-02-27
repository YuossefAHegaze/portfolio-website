import Background from "../components/Background";
import AnimatedSection from "../components/AnimatedSection";
import TiltCard from "../components/TiltCard";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Accordion from "react-bootstrap/Accordion";
import imgn from "../Data/photos/my-photo1.jpg";
import TextAnimate from "../components/TextAnimate.jsx";
import Image from "react-bootstrap/Image";
import certeifcat from "../Data/photos/Certificate.jpeg";
import { FcCalendar } from "react-icons/fc";
import Garhy from "../Data/photos/Garhy.jpg";
import Store from "../Data/photos/Store.jpeg";
import Mica from "../Data/photos/Mica.jpeg";
import ListGroup from "react-bootstrap/ListGroup";
import v1 from "../Data/photos/vlPhotos/v1.jpeg";
import v2 from "../Data/photos/vlPhotos/v2.jpg";
import v3 from "../Data/photos/vlPhotos/v3.jpeg";
import v4 from "../Data/photos/vlPhotos/v4.jpg";
import v5 from "../Data/photos/vlPhotos/v5.jpeg";
import ResponsiveCardStack from "../components/ResponsiveCardStack.jsx";
import LogoMarquee from "../components/LogoMarquee.jsx";
import tdh from "../Data/photos/tdh-square-logo.webp";
import swes from "../Data/photos/download.jpg";
import { useEffect } from "react";
function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Background />

      <Container
        className="mt-5 pb-5 pt-5 text-light "
        style={{ minHeight: "100vh" }}
      >
        {/* section 1  */}
        <AnimatedSection type="zoom">
          <Row className="mt-5 ">
            <Col>
              <h1>
                <TextAnimate text="Hi, I'm Youssef" mode="letters" />
              </h1>
              <h4 style={{ marginTop: 30, maxWidth: 600 }}>
                <TextAnimate
                  mode="words"
                  delay={0.4}
                  text="Front-End Developer skilled in HTML, CSS, JavaScript, and React (Redux), with experience 
building responsive, component-based applications using Next.js, Bootstrap, and MUI. 
Background in Java and Oracle SQL through a German IHK-accredited apprenticeship. 
Strong problem-solving skills with hands-on IT support experience and Agile workflow 
knowledge"
                />
              </h4>
            </Col>

            <Col>
              <div className="d-flex justify-content-end">
                <TiltCard
                  image={imgn}
                  width="300px"
                  height="400px"
                  radius="15px"
                  onMouseMove={TiltCard.handleMove}
                  onMouseLeave={TiltCard.resetTilt}
                />
              </div>
            </Col>
          </Row>
        </AnimatedSection>
        {/* section 2  */}

        <AnimatedSection type="fade">
          <Row className="mt-5">
            <h2 style={{ marginTop: 20, fontWeight: 600 }}>
              <TextAnimate text="Work Experience" mode="letters" />
            </h2>
            <Col>
              <Accordion className="mt-5" defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                  <Accordion.Header>
                    Operations Supervisor – Talabat Delivery Partner (Contracted
                    Office)
                  </Accordion.Header>
                  <Accordion.Body>
                    <Row>
                      <Col>
                        <h4>Talabat Delivery Partner (Contracted Office)</h4>
                        <p>
                          {" "}
                          <FcCalendar /> Oct 2024 - Jan 2026 1 yr 4 mos
                        </p>
                        <p> 📍 Giza, Egypt</p>
                        <h5>
                          Managed daily operations for a delivery office
                          partnered with Talabat, supervising and supporting new
                          and existing drivers. Trained and onboarded new
                          delivery drivers on company procedures and service
                          standards. Handled real-time operational issues
                          between drivers and customers. Resolved escalations
                          and ensured high customer satisfaction. Coordinated
                          schedules and monitored performance metrics. Acted as
                          the main communication link between drivers and
                          management. Improved response time and reduced
                          order-related issues through proactive
                          problem-solving.
                        </h5>
                      </Col>
                    </Row>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>
                    Programming Foundations Trainee
                  </Accordion.Header>
                  <Accordion.Body>
                    <Row>
                      <Col>
                        <h4>RaiseUp Internship</h4>
                        <p>
                          {" "}
                          <FcCalendar /> May 2025 - 1 mo
                        </p>
                        <p> 📍 Nasr city - On-site</p>
                        <h5>
                          Successfully completed an intensive Programming
                          Foundations (40 hours) training with RaiseUp Learning
                          Solutions. Key learning outcomes: Strengthened
                          programming fundamentals and problem-solving mindset.
                          Built a strong foundation in algorithms, logic, and
                          coding basics. Gained hands-on experience with
                          structured programming concepts. Prepared for future
                          specialization in web development and software
                          engineering. This program provided me with the
                          essential knowledge to grow as a developer and opened
                          the door for deeper learning in frontend and backend
                          development.
                        </h5>
                      </Col>
                      <Col>
                        <div className="d-flex justify-content-end">
                          <Image
                            style={{ maxWidth: "300px", maxHeight: "400px" }}
                            src={certeifcat}
                            thumbnail
                          />
                        </div>
                      </Col>
                    </Row>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                  <Accordion.Header>
                    Information Technology Help Desk Support
                  </Accordion.Header>
                  <Accordion.Body>
                    <Row>
                      <Col>
                        <h4>Al-Garhy Pharmacy</h4>
                        <p>
                          {" "}
                          <FcCalendar /> Oct 2022 - Dec 2024
                        </p>
                        <p> 📍Cairo, Egypt · On-site - On-site</p>
                        <h5>
                          Provided technical support for hardware and software
                          issues across the pharmacy branches. Assisted staff
                          with system troubleshooting, printer setup, and
                          internet connectivity. Ensured smooth operation of
                          point-of-sale systems and maintained data backups.
                          Contributed to improving IT efficiency by resolving
                          issues quickly and documenting common solutions.
                        </h5>
                      </Col>
                      <Col>
                        <div className="d-flex justify-content-end">
                          <Image
                            style={{ maxWidth: "300px", maxHeight: "400px" }}
                            src={Garhy}
                            thumbnail
                          />
                        </div>
                      </Col>
                    </Row>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                  <Accordion.Header>
                    Mobile Technician & Sales Assistant
                  </Accordion.Header>
                  <Accordion.Body>
                    <Row>
                      <Col>
                        <h4>MAKA Mobile Store</h4>
                        <p>
                          {" "}
                          <FcCalendar /> Dec 2021 - May 2022
                        </p>
                        <p> 📍 Cairo, Egypt - On-site</p>
                        <h5>
                          Performed basic mobile maintenance tasks including
                          screen replacements and software troubleshooting.
                          Assisted the main engineer in advanced mobile repairs.
                          Supported customers in choosing and purchasing new
                          phones and accessories. Helped with sourcing and
                          buying new mobile equipment for the store. Combined
                          technical support with sales duties to ensure a smooth
                          customer experience.
                        </h5>
                      </Col>
                      <Col>
                        <div className="d-flex justify-content-end">
                          <Image
                            style={{ maxWidth: "300px", maxHeight: "400px" }}
                            src={Store}
                            thumbnail
                          />
                        </div>
                      </Col>
                    </Row>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Col>
          </Row>
        </AnimatedSection>
        {/* section 3 */}

        <AnimatedSection type="fade-down">
          <Row className="mt-5 ">
            <h2 style={{ marginTop: 20, fontWeight: 600 }}>
              <TextAnimate text="Education" mode="letters" />
            </h2>
            <Col>
              <ListGroup className="mt-5 rounded " variant="flush">
                <ListGroup.Item>
                  MIECA - Egypt International Academy for Programming and
                  Computer Science
                </ListGroup.Item>
                <ListGroup.Item>
                  <FcCalendar /> Nov 2021 - Jul 2024{" "}
                </ListGroup.Item>
                <ListGroup.Item>📍 Cairo, Egypt</ListGroup.Item>
                <ListGroup.Item>
                  MIECA - Egypt International Academy for Programming and
                  Computer Science Field of Study: Programming Degree: Diploma
                  Graduation Year:2024 Grade: Excellent (86%) Duration: 3 years
                  Relevant Skills: Java, SQL, PL/SQL (Good background)
                </ListGroup.Item>
              </ListGroup>
            </Col>
            <Col>
              <div className="d-flex justify-content-end ">
                <TiltCard
                  image={Mica}
                  width="300px"
                  height="300px"
                  radius="50%"
                  onMouseMove={TiltCard.handleMove}
                  onMouseLeave={TiltCard.resetTilt}
                />
              </div>
            </Col>
          </Row>
        </AnimatedSection>
        {/* section 4 */}
        <AnimatedSection type="fade-right">
          <Row className="mt-5 ">
            <h2 style={{ marginTop: 20, fontWeight: 600 }}>
              <TextAnimate text="Volunteering" mode="letters" />
            </h2>

            <Col>
              <h5 style={{ marginTop: 30, maxWidth: 600 }}>
                <TextAnimate
                  mode="words"
                  delay={0.6}
                  text="Khaleeha Akhdar (Keep It Green) – Volunteer

Volunteered in “Khaleeha Akhdar (Keep It Green)”, a sustainability initiative funded under a grant by Terre des hommes (Tdh), a Swiss NGO.

Contributed to delivering the initiative across three batches, engaging 60+ beneficiaries and promoting environmental awareness and community impact.

Collaborated with the team in planning, coordination, and on-ground implementation, supporting the successful transformation of the project from concept to execution despite operational challenges."
                />
              </h5>
              <LogoMarquee logos={[tdh, swes, tdh]} />
            </Col>
            <Col>
              <div className="d-flex justify-content-end ">
                <ResponsiveCardStack images={[v1, v2, v3, v4, v5]} />
              </div>
            </Col>
          </Row>
        </AnimatedSection>
        {/* section 5 */}
        {/* <AnimatedSection type="fade">
          <Row className="mt-5 ">
            <h2 style={{ marginTop: 20, fontWeight: 600 }}>
              <TextAnimate text="Scholarship" mode="clip" delay={0.3} />
            </h2>
            <Col>
         
            </Col>
             </Row>
        </AnimatedSection> */}
      </Container>
    </>
  );
}

export default About;
