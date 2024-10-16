import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export const Footer = (): JSX.Element => {
    return(
    <div className=" border-b border-neutral-900 p-4 md:mb-35">
     <div className="flex justify-between items-center">
         <p>© 2024 Jiya Keshwani. All Rights Reserved.</p>
        <a href="">
          <FontAwesomeIcon 
            className="text-white mx-2 text-2xl bg-slate-900 p-3"
        icon={faArrowUp} 
          />
          </a>
     </div>
    </div>
    )
  };
  