import { Link } from "react-router-dom";
import "./home.css";
import { motion } from "framer-motion";
const Home = () => {
  return (
    <div className="home">
      <div className="container">
        <div className="content">
          <motion.h1
            initial={{ width: "0" }}
            animate={{ width: "100%" }}
            transition={{
              duration: 3,
              ease: "easeInOut",
              repeat: Infinity,
              repeatType: "loop",
            }}
          >
            Hi, I'm Mohamed Adel
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Frontend Developer specialized in React.js, passionate about
            building modern, responsive, and interactive web applications with
            clean UI and smooth user experience.
          </motion.p>
          <div className="btns">
            <Link to="/work">View My Work</Link>
            <Link
              target="_blank"
              to="https://drive.google.com/file/d/1LD7rUcSWJi9no4G3XomBwB8KLONKbQzj/view?usp=drivesdk"
            >
              view cv
            </Link>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8}}
        >
          <img src="../../../images/connect-image.png" alt="profile" />
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
