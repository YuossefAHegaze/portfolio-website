
import { Route ,Routes } from "react-router-dom";
import Home from "./pages/home.jsx";
import Connect from "./pages/contact.jsx";
import MyNavbar from "./components/NavBar.jsx";
import Footer from "./components/Fouter.jsx";
import About from "./pages/about.jsx";
import FirstProject from "./pages/firstProject.jsx";
function App() {
  return (
 <div className="App">
   

      <MyNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
         <Route path="/connect" element={<Connect />} />
         <Route path="/about" element={<About />} />
          <Route path="/firstProject" element={<FirstProject />} />
      </Routes>
      <Footer />
   </div>
  );
}

export default App;
