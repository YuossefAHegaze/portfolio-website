import { useEffect } from "react";
import fp1 from "../Data/photos/fp1.png";
import fps1 from "../Data/photos/fps1.png";
import fps2 from "../Data/photos/fps2.png";
import fps3 from "../Data/photos/fps3.png";
import fps4 from "../Data/photos/fps4.png";
import fps5 from "../Data/photos/fps5.png";
import fps6 from "../Data/photos/fps6.png";
import fps7 from "../Data/photos/fps7.png";
import fps8 from "../Data/photos/fps8.png";
import fps9 from "../Data/photos/fps9.png";
import fps10 from "../Data/photos/fps10.png";
import fpf1 from "../Data/photos/fpf1.png";
import fpf2 from "../Data/photos/fpf2.png";
import fpf3 from "../Data/photos/fpf3.png";
import Image from "react-bootstrap/Image";
import Background from "../components/Background.jsx";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import TextAnimate from "../components/TextAnimate.jsx";
import AnimatedSection from "../components/AnimatedSection.jsx";
import { FaReact } from "react-icons/fa";
import { FcBullish } from "react-icons/fc";
import { FcDebt } from "react-icons/fc";
import { FcFilmReel } from "react-icons/fc";
import { BsLayoutSidebarInset } from "react-icons/bs";
import { TbBrandFramerMotion } from "react-icons/tb";
import { BiBarChartSquare } from "react-icons/bi";
import { FaRegCalendarAlt } from "react-icons/fa";
import { SiFormik } from "react-icons/si";
import { SiReactrouter } from "react-icons/si";
import { GoArrowUpRight, GoArrowDown } from "react-icons/go";
import { Button } from "react-bootstrap";
import { FaGithub } from "react-icons/fa";
import Carousel from "react-bootstrap/Carousel";
import { TbLivePhoto } from "react-icons/tb";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import fpmw1 from "../Data/photos/fpmw1.png";
import fpmw2 from "../Data/photos/fpmw2.png";
import fpmw3 from "../Data/photos/fpmw3.png";
function FirstProject() {
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
        <AnimatedSection type="zoom">
          {/* section 1 */}
          <Row className="mt-5 mb-5">
            <Col xs={12} md={12}>
              <h1 className="text-center">
                <TextAnimate
                  text="Dashboard for E-commerce Analytics"
                  mode="letters"
                />
              </h1>
              <h4 className="text-center">
                <TextAnimate
                  mode="words"
                  delay={0.4}
                  text=" A responsive analytics dashboard built with React to visualize sales performance, revenue insights, and customer data through interactive charts and real-time statistics."
                />
              </h4>
            </Col>

            <Col xs={0} md={0} className="mt-4 ms-5">
              <p className="bg-transparent p-3 text-light border rounded-5 d-inline-flex align-items-center gap-2">
                <FcBullish size={20} />
                Dashboard
              </p>
            </Col>
            <Col xs={0} md={0} className="mt-4 ms-5">
              <p className="bg-transparent p-3 text-light border rounded-5 d-inline-flex align-items-center gap-2">
                <FaReact size={20} color="#61DBFB" />
                React
              </p>
            </Col>
            <Col xs={0} md={0} className="mt-4 ms-5">
              <p className="bg-transparent p-3 text-light border rounded-5 d-inline-flex align-items-center gap-2">
                <FcDebt size={20} />
                Nonprofit Tech
              </p>
            </Col>
          </Row>
        </AnimatedSection>
        {/* section 2 */}
        <AnimatedSection type="zoom">
          <Row>
            <Col>
              <Image src={fp1} thumbnail />
            </Col>
          </Row>
        </AnimatedSection>
        {/* section 3 */}
        <AnimatedSection type="zoom">
          <Row className="mt-5 mb-5">
            <Col>
              <FcFilmReel size={50} />
              <pr />
              <h2> Project Overview</h2>
              <p>
                This project is a practical application built to simulate a
                real-world dashboard experience. I enhanced and improved the
                original structure by making the application fully responsive
                across different screen sizes to ensure a seamless user
                experience on mobile, tablet, and desktop devices. Additionally,
                I extended the functionality by developing and integrating three
                new pages: Notifications, Settings, and Profile, improving both
                usability and overall user interaction within the system.
              </p>
            </Col>
            <Col>
              <Button
                variant="light"
                className="bg-transparent p-4 icon-btn text-light border rounded-5 m-5 "
                onClick={() =>
                  window.open(
                    "https://github.com/YuossefAHegaze/Admin-Dashboard-App.git",
                    "_blank",
                  )
                }
              >
                <FaGithub size={24} className="text-light" /> : yousif.a.ragab.
                <GoArrowUpRight />
              </Button>
              <Button
                variant="light"
                className="bg-transparent p-4 icon-btn text-light border rounded-5 m-5 "
                onClick={() =>
                  window.open(
                    "https://YuossefAHegaze.github.io/Admin-Dashboard-App/index.html",
                  )
                }
              >
                <TbLivePhoto size={28} /> : yousif.a.ragab.
                <GoArrowUpRight />
              </Button>
            </Col>
            <Col>
              <h3>TOOLS</h3>
              <FaReact size={20} color="#61DBFB" /> React
              <br />
              <TbBrandFramerMotion size={20} color="#61DBFB" /> material UI
              <br />
              <SiReactrouter size={20} color="#61DBFB" /> React Router
              <br />
              <BiBarChartSquare size={20} color="#61DBFB" /> Nivo Charts
              <br />
              <FaRegCalendarAlt size={20} color="#61DBFB" /> FullCalendar
              <br />
              <BsLayoutSidebarInset size={20} color="#61DBFB" /> React Pro
              Sidebar
              <br />
              <SiFormik size={20} color="#61DBFB" /> Formik + Yup
            </Col>
          </Row>
        </AnimatedSection>
        {/* section 4 */}
        <AnimatedSection type="zoom">
          <Row className="mt-5 mb-5">
            <h2>Project-pages</h2>

            <Col>
              <Carousel className="mt-4">
                <Carousel.Item interval={1000}>
                  <Image src={fp1} thumbnail />

                  <Carousel.Caption>
                    <h3>Page One </h3>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={1000}>
                  <Image src={fps1} thumbnail />

                  <Carousel.Caption>
                    <h3> Page Two</h3>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={1000}>
                  <Image src={fps2} thumbnail />

                  <Carousel.Caption>
                    <h3>Page Three</h3>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={1000}>
                  <Image src={fps3} thumbnail />

                  <Carousel.Caption>
                    <h3> Page Four</h3>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={1000}>
                  <Image src={fps4} thumbnail />

                  <Carousel.Caption>
                    <h3> Page Five</h3>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={1000}>
                  <Image src={fps5} thumbnail />

                  <Carousel.Caption>
                    <h3>Page Six</h3>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={1000}>
                  <Image src={fps6} thumbnail />

                  <Carousel.Caption>
                    <h3>Page Seven</h3>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={1000}>
                  <Image src={fps7} thumbnail />

                  <Carousel.Caption>
                    <h3> Page eight</h3>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={1000}>
                  <Image src={fps8} thumbnail />

                  <Carousel.Caption>
                    <h3> Page Nine</h3>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={1000}>
                  <Image src={fps9} thumbnail />

                  <Carousel.Caption>
                    <h3> Page Ten</h3>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={1000}>
                  <Image src={fps10} thumbnail />

                  <Carousel.Caption>
                    <h3> Page Eleven</h3>
                  </Carousel.Caption>
                </Carousel.Item>
              </Carousel>
            </Col>
          </Row>
        </AnimatedSection>
        <AnimatedSection type="fade-down">
          <Row className="mt-5 mb-5">
            <h2>Responsive -Section </h2>

            <Card body>
              I improved the application’s responsiveness using CSS Flexbox,
              ensuring a flexible layout that adapts smoothly across mobile,
              tablet, and desktop screens.
            </Card>
            <Col>
              <Carousel className="mt-4">
                <Carousel.Item interval={1000}>
                  <Image src={fpf1} thumbnail />

                  <Carousel.Caption>
                    <h3>Mobile</h3>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={1000}>
                  <Image src={fpf2} thumbnail />

                  <Carousel.Caption>
                    <h3>Tablet</h3>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={1000}>
                  <Image src={fpf3} thumbnail />

                  <Carousel.Caption>
                    <h3>Laptop</h3>
                  </Carousel.Caption>
                </Carousel.Item>
              </Carousel>
            </Col>
          </Row>
        </AnimatedSection>

        {/* section 5 */}
        <AnimatedSection type="fade-up">
          <Row className="mt-5 mb-5">
            <h2>pages -section</h2>
            <p>
              I developed a Notifications page to display user alerts and
              updates in a structured and user-friendly format. I also
              implemented Settings and Profile pages, allowing users to manage
              their preferences and personal information while improving the
              overall usability and completeness of the dashboard experience.
            </p>
            <Col>
              <Card style={{ width: "50%" }}>
                <Card.Header>Responsive</Card.Header>
                <ListGroup variant="flush">
                  <ListGroup.Item>Notifications</ListGroup.Item>
                  <ListGroup.Item>Settings</ListGroup.Item>
                  <ListGroup.Item>Profile</ListGroup.Item>
                </ListGroup>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col>
              <Carousel className="mt-4">
                <Carousel.Item interval={1000}>
                  <Image src={fpmw1} thumbnail />

                  <Carousel.Caption>
                    <h3>Notifications</h3>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={1000}>
                  <Image src={fpmw2} thumbnail />

                  <Carousel.Caption>
                    <h3>Settings</h3>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={1000}>
                  <Image src={fpmw3} thumbnail />

                  <Carousel.Caption>
                    <h3>Profile</h3>
                  </Carousel.Caption>
                </Carousel.Item>
              </Carousel>
            </Col>
          </Row>
        </AnimatedSection>
      </Container>
    </>
  );
}
export default FirstProject;
