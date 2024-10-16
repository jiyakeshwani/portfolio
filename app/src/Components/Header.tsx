import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Logo from "../assets/logo.png";
export const Header = () => {


  return (
    <div className="flex  justify-between bg-transparent   items-center">
      <div>
        {" "}
        <img src={Logo} alt="logo" />
      </div>
      <div>
        <a href="mailto:jiyakeshwani4@gmail.com" target="blank" >
          <FontAwesomeIcon
            className="text-white mx-2 text-2xl"
            icon={faEnvelope}
          />
        </a>
        <a href="tel:9919739071">
          <FontAwesomeIcon
            className="text-black mx-2 text-md bg-white p-1 rounded-full"
            icon={faPhone}
          />
        </a>
        <a href="https://github.com/jiyakeshwani" target="blank">
          <FontAwesomeIcon
            className="text-white mx-2 text-2xl"
            icon={faGithub}
          />
        </a>
        <a
          href="https://www.linkedin.com/in/jiya-keshwani-051525218/"
          target="blank"
        >
          <FontAwesomeIcon
            className="text-white mx-2 text-2xl"
            icon={faLinkedin}
          />
        </a>
      </div>
    </div>
  );
};
