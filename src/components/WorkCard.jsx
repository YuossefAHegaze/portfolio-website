import { motion } from "framer-motion";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { FcCalendar } from "react-icons/fc";
import { Link } from "react-router-dom";
function WorkCard({ title, description, date, image, link }) {
  return (
    <Container className="my-4 d-flex justify-content-center align-items-center">
      <motion.div
        className="bg-light p-4 rounded-4 shadow-sm"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        style={{ maxWidth: "1200px", width: "100%" }}
      >
        {/* Image */}
        <motion.div
          whileHover={{ scale: 1.03 }}
          transition={{ duration: 0.3 }}
          className="rounded-4 overflow-hidden mb-3"
          style={{ cursor: "pointer" }}
        >
          <img
            src={image}
            className="w-100 h-100"
            style={{ objectFit: "cover" }}
            alt=""
          />
        </motion.div>

        {/* Text Content */}
        <h3 className="mb-2">{title}</h3>

        <p className="text-muted mb-2" style={{ lineHeight: "1.6" }}>
          {description}
        </p>

        <p className="text-secondary mb-3" style={{ fontSize: "0.9rem" }}>
          <FcCalendar size={35} />
          {date}
        </p>

        <Link  className="px-4 btn btn-outline-dark" to={link}>
          View Project
        </Link>
      </motion.div>
    </Container>
  );
}

export default WorkCard;
