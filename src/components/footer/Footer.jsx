import { FaPhone } from "react-icons/fa";
import "./footer.css";
import { CiLocationOn } from "react-icons/ci";
import { IoMdMail } from "react-icons/io";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="box">
          <h1>Mohamed Adel</h1>
          <p>
            Frontend Developer specialized in React.js, passionate about
            building modern, responsive, and interactive web applications with
            clean UI and smooth user experience.
          </p>
        </div>
        <div className="box">
          <div className="box_content">
            <div className="icon">
            <CiLocationOn />
          </div>
          <div className="text">
            <h3>Cairo, Egypt</h3>
          </div>
          </div>

          <div className="box_content">
            <div className="icon">
            <FaPhone/>
          </div>
          <div className="text">
            <h3>01093768842</h3>
          </div>
          </div>

          <div className="box_content">
            <div className="icon">
            <IoMdMail/>
          </div>
          <div className="text">
            <h3>mohamed20adel22@gmail.com</h3>
          </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Footer;
