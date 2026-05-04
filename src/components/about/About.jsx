import "./about.css";
import { motion } from "framer-motion";
const About = () => {
  return (
    <div className="about">
      <div className="container">
        <h1>
          About <span>Me</span>
        </h1>
        <motion.p
          className="content"
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          A passionate Computer Science graduate and web developer, dedicated to
          continuous learning and building modern, user-focused applications
          using the latest technologies.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8}}
          className="box"
        >
          <h2>Welcome to My Journey</h2>
          <p>
            I'm a Computer Science graduate from Benha University, class of
            2024, with a strong passion for building modern, user-focused web
            applications. My journey in tech started during my university years,
            where I built a solid foundation in programming fundamentals, Data
            Structures, and Algorithms. Over time, I shifted from theory to
            real-world development, diving deep into front-end and full-stack
            technologies such as HTML, CSS, JavaScript, React, and modern
            frameworks. Through continuous learning and hands-on projects, I’ve
            developed the ability to turn ideas into functional and scalable
            applications. Today, I focus on improving my skills, building
            impactful projects, and staying up to date with the latest trends in
            web development—always aiming to grow as a professional developer
            and create meaningful digital experience
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
