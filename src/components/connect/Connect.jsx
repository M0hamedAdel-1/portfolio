import "./connect.css";
import { MdEmail } from "react-icons/md";
import { FaGithub, FaPhone, FaLinkedinIn, FaFacebook, FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";

const Connect = () => {
  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <div className="connect">
      <div className="container">

        {/* Header */}
        <motion.div
          className="box"
          initial={{ opacity: 0, y: -80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div>
            <img src="/images/connect-image.png" />
            <h1>
              Connect With <span>me</span>
            </h1>
          </div>
        </motion.div>

        {/* Contact cards */}
        <motion.div
          className="all_connects"
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="connects">
            <a href="mailto:mohamed20adel22@gmail.com" className="box_content">
              <MdEmail className="icon" />
              <div className="text">
                <p>Email</p>
                <h3>mohamed20adel22@gmail.com</h3>
              </div>
            </a>
          </div>

          <div className="connects">
            <a href="https://wa.me/01093768842" className="box_content">
              <FaPhone className="icon" />
              <div className="text">
                <p>Phone</p>
                <h3>01093768842</h3>
              </div>
            </a>
          </div>
        </motion.div>

        {/* Social */}
        <div className="social">
          <h1>Find Me On</h1>

          <motion.div
            className="social_media"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >

            <motion.a
              href="https://github.com/M0hamedAdel-1"
              target="_blank"
              className="social_content github"
              variants={item}
              whileHover={{ scale: 1.05, y: -3 }}
            >
              <FaGithub className="github_icon" />
              <h3>Github</h3>
            </motion.a>

            <motion.a
              href="https://www.linkedin.com"
              target="_blank"
              className="social_content"
              variants={item}
              whileHover={{ scale: 1.05, y: -3 }}
            >
              <FaLinkedinIn className="linkedin_icon" />
              <h3>Linkedin</h3>
            </motion.a>

            <motion.a
              href="https://www.facebook.com"
              target="_blank"
              className="social_content"
              variants={item}
              whileHover={{ scale: 1.05, y: -3 }}
            >
              <FaFacebook className="facebook_icon" />
              <h3>Facebook</h3>
            </motion.a>

            <motion.a
              href="https://wa.me/01093768842"
              target="_blank"
              className="social_content"
              variants={item}
              whileHover={{ scale: 1.05, y: -3 }}
            >
              <FaWhatsapp className="whatsapp_icon" />
              <h3>Whatsapp</h3>
            </motion.a>

          </motion.div>
        </div>

      </div>
    </div>
  );
};

export default Connect;