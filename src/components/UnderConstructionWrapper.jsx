import { Button } from "react-bootstrap";
import {FaGithub }from "react-icons/fa6";
const UnderConstructionWrapper = ({ children, githubLink }) => {
  return (
    <div style={{ position: "relative" }}>
      <div
        style={{
          filter: "blur(5px)",
          pointerEvents: "none",

        }}
      >
        {children}
      </div>

      <div
        style={{
          position: "absolute",
          inset:0,
          backgroundColor: "rgba(0,0,0,0.55)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          zIndex: 5,
          borderRadius: "3%", 
          maxWidth: "1200px", width: "100%", 
            padding: "20px",
            margin: "auto",
        }}
      >
        <h2 style={{ color: "white", marginBottom: "15px" }}>
            🚧 This Section is Under Construction 🚧
        </h2>
        <Button
          variant="light"
          href={githubLink}
          target="_blank"
          style={{ display: "flex", alignItems: "center", gap: "8px" }}
        >
          <FaGithub size={20} />
          View on GitHub
        </Button>
      </div>
    </div>
  );
};

export default UnderConstructionWrapper;