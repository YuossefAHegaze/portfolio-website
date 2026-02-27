import Container from "react-bootstrap/Container";
const Header = ({ title, subtitle ,location}) => {
  return (
    <Container className={`text-${location} text-light`}>
      <h1 className="mt-5">{title}</h1>
      <h2  className="mb-4">{subtitle}</h2>
    </Container>
  );
};
export default Header;
