import "./skills.css";
import { motion } from "framer-motion";
const Skills = () => {
  const skills = [
    {
      name: "HTML",
      percent: 95,
    },
    {
      name: "CSS",
      percent: 90,
    },
    {
      name: "JavaScript",
      percent: 85,
    },
    {
      name: "React.js",
      percent: 90,
    },
    {
      name: "Tailwind CSS",
      percent: 85,
    },
    {
      name: "TypeScript",
      percent: 70,
    },
  ];
  const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0 },
};

  return (
    <div className="skills">
      <div className="container">
        <h1>My Skills </h1>

        <div className="skills_container">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="image_skill"
          >
            <img src="../../../images/skills.png" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="box"
          >
            <h3>Web Development</h3>
            <div className="all_skills">
              {skills.map((skill) => (
                <div className="content_skill">
                  <div className="skill">
                    <p>{skill.name}</p>
                    <p>{skill.percent}</p>
                  </div>
                  <div className="progress">
                    <div
                      className="progress_fill"
                      style={{ width: `${skill.percent}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

       <motion.div
  className="more_skills"
  variants={container}
  initial="hidden"
  whileInView="show"
  viewport={{ once: true }}
>
  <motion.div className="skill_img" variants={item}>
    <img src="../../../images/html.png" />
  </motion.div>

  <motion.div className="skill_img" variants={item}>
    <img src="../../../images/css.png" />
  </motion.div>

  <motion.div className="skill_img" variants={item}>
    <img src="../../../images/js.png" />
  </motion.div>

  <motion.div className="skill_img" variants={item}>
    <img src="../../../images/tailwind.png" />
  </motion.div>

  <motion.div className="skill_img" variants={item}>
    <img src="../../../images/Bootstrap.png" />
  </motion.div>

  <motion.div className="skill_img" variants={item}>
    <img src="../../../images/react.png" />
  </motion.div>

  <motion.div className="skill_img" variants={item}>
    <img src="../../../images/github.png" />
  </motion.div>

  <motion.div className="skill_img" variants={item}>
    <img src="../../../images/redux.png" />
  </motion.div>

  <motion.div className="skill_img" variants={item}>
    <img src="../../../images/cplus.png" />
  </motion.div>

  <motion.div className="skill_img" variants={item}>
    <img src="../../../images/typescript.png" />
  </motion.div>
</motion.div>
      </div>
    </div>
  );
};

export default Skills;
