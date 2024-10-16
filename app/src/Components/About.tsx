import { motion } from "framer-motion";
import AboutImg from "../assets/aboutimg.jpg";

export const About = (): JSX.Element => {
  return (
    <div className="border-b border-neutral-900 md:pb-32 pb-4">
      <motion.h2
       whileInView={{opacity:1 , y: 0}}
       initial={{opacity:0 , y: -100}}
       transition={{duration:1}}
      className="my-20 text-center text-4xl ">
        About <span className="text-neutral-500">Me</span>
      </motion.h2>
      <div className="flex flex-wrap">
        <motion.div
        whileInView={{opacity:1 , x: 1}}
        initial={{opacity:0 , x: -100}}
        transition={{duration:1}}
        className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center items-center">
            <img
              className="w-96 rounded-2xl"
              src={AboutImg}
              alt="#"
            />
          </div>
        </motion.div>
        < motion.div 
         whileInView={{opacity:1 , x: 0}}
         initial={{opacity:0 , x: 100}}
         transition={{duration:1}}
        
        className="w-full lg:w-1/2 ">
          <div className="flex justify-center lg:justify-start">
            <p className="my-2 max-w-xl py-12  tracking-tighter leading-8 text-xl font-medium">
              {" "}
              Results-oriented Software Developer with a proven track record of
              crafting creative user interfaces. Also skilled in strategic
              project management, marketing related tech and team leadership.
              Seeking a challenging position to leverage technical expertise.
              Results-oriented Software Developer with a proven track record of
              crafting creative user interfaces. Also skilled in strategic
              project management, marketing related tech and team leadership.
              Seeking a challenging position to leverage technical expertise.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
