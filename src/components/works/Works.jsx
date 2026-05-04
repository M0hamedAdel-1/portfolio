import "./works.css"
import { FiGithub } from "react-icons/fi";
import { FaEye } from "react-icons/fa6";
import { motion } from "framer-motion";
const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.20,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 60 },
  show: { opacity: 1, y: 0 },
};
const Works = () => {
  return (
    <div className="works">
      <div className="container" >
        <h1>My projects</h1>
        <motion.div className="projects"variants={container} initial="hidden" whileInView="show" viewport={{ once: true }}>
          <motion.div className="project" variants={item}>
            <img src="../../../images/projectone.png"/>
            <div className="body">
              <h3>kidskiosk Full Ecommerce</h3>
              <p>KidsKiosk is a platform to Shop the latest and greatest in kids' shoes at KidsKiosk. Find the perfect fit for every adventure!</p>
              <div className="icons">
                  <a href="https://github.com/M0hamedAdel-1/Full-Ecommerce-React" target="_blank"><FiGithub/></a>
                  <a href="https://kidskiosk-full-ecommerce-react.vercel.app/" target="_blank"><FaEye/></a>
              </div>
            </div>
          </motion.div>

          <motion.div className="project" variants={item}>
            <img src="../../../images/projecttwo.png"/>
            <div className="body">
              <h3>quiz-app</h3>
              <p>A dynamic Quiz App built with HTML, CSS, and JavaScript featuring multiple quiz stages, timer functionality, score tracking, and interactive UI for an engaging user experience.</p>
              <div className="icons">
                  <a href="https://github.com/M0hamedAdel-1/quiz-app" target="_blank"><FiGithub/></a>
                  <a href="https://m0hamedadel-1.github.io/quiz-app/" target="_blank"><FaEye/></a>
              </div>
            </div>
          </motion.div>

          <motion.div className="project" variants={item}>
            <img src="../../../images/projectthee.png"/>
            <div className="body">
              <h3>Hangman game</h3>
              <p>A Hangman game built with HTML, CSS, and JavaScript featuring dynamic word guessing, interactive UI, and visual feedback through progressive hangman drawing and sound effects.</p>
              <div className="icons">
                  <a href="https://github.com/M0hamedAdel-1/hangmanpro" target="_blank"><FiGithub/></a>
                  <a href="https://m0hamedadel-1.github.io/hangmanpro/" target="_blank"><FaEye/></a>
              </div>
            </div>
          </motion.div>
          <motion.div className="project" variants={item}>
            <img src="../../../images/projectfour.png"/>
            <div className="body">
              <h3>Hangman game</h3>
              <p>A multi-page responsive Admin Dashboard built with HTML, CSS, and JavaScript featuring sections like profile, projects, courses, files, and settings with a clean and structured UI design.</p>
              <div className="icons">
                  <a href="https://github.com/M0hamedAdel-1/dashboard" target="_blank"><FiGithub/></a>
                  <a href="https://m0hamedadel-1.github.io/dashboard/" target="_blank"><FaEye/></a>
              </div>
            </div>
          </motion.div>
        </motion.div>

      </div>

    </div>
  )
}

export default Works
