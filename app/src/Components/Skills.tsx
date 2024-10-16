import { motion, Variants } from "framer-motion";
//  tech skills 
import CSS from "../assets/techSkills/css.png";
import HTML from "../assets/techSkills/html.png";
import JavaScript from "../assets/techSkills/javascript.png";
import MaterialUI from "../assets/techSkills/mui.png";
import Nextjs from "../assets/techSkills/nextjs-icon.webp";
import Nodejs from "../assets/techSkills/nodejs.png";
import React from "../assets/techSkills/react.png";
import Redux from "../assets/techSkills/redux.png";
import Shadcn from "../assets/techSkills/shadCn.png";
import Tailwind from "../assets/techSkills/tailwind.png";
import Typescript from "../assets/techSkills/typescript.png";
// non tech skills
import GoogleA from "../assets/nonTechSkills/googleanalytics.png";
import GoogleT from "../assets/nonTechSkills/googletagmanager.png";
import HubSpot from "../assets/nonTechSkills/hubspot.png";
import Mailchimp from "../assets/nonTechSkills/mailchimp.png";
import Shopify from "../assets/nonTechSkills/shopify.png";
import WordPress from "../assets/nonTechSkills/wordpress.png";

const iconVariants = (duration: number): Variants => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});
export const Skills = (): JSX.Element => {
  return (
    <div className=" border-b border-neutral-900 md:pb-32 md:mb-35 pb-4">
      {/* <motion.h1
      whileInView={{opacity: 1, y: 0}}
initial={{opacity:0 , y: -100}}
transition={{duration: 1.5}}
       className="my-20 text-center text-4xl">Skills </motion.h1> */}
      {/*  Tech skills */}
      <motion.h3
        whileInView={{opacity: 1, x: 0}}
        initial={{opacity:0 , x: 100}}
        transition={{duration: 1.5}}
      className="my-20 text-center text-4xl">
        {" "}
        Technical <span className="text-neutral-500">Skills </span>{" "}
      </motion.h3>
      <motion.div 
      whileInView={{opacity:1, x:0}}
      initial={{opacity:0, x: -100}}
      transition={{duration: 1.5}}
      className="flex flex-wrap gap-4 items-center justify-center">
        <motion.div
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4 flex justify-center items-center flex-col"
        >
          <img src={HTML} alt="html" />
          <p>HTML</p>
        </motion.div>
        <motion.div
          variants={iconVariants(3)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4 flex justify-center items-center flex-col"
        >
          <img src={CSS} alt="css" />
          <p>CSS</p>
        </motion.div>
        <motion.div
          variants={iconVariants(5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4 flex justify-center items-center flex-col"
        >
          <img src={JavaScript} alt="js" />
          <p>JavaScript</p>
        </motion.div>
        <motion.div
          variants={iconVariants(2)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4 flex justify-center items-center flex-col"
        >
          <img src={React} alt="react" />
          <p>ReactJS</p>
        </motion.div>
        <motion.div
          
          variants={iconVariants(6)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4 flex justify-center items-center flex-col"
        >
          <img src={Typescript} alt="typescript" />
          <p>TypeScript</p>
        </motion.div>
        <motion.div
  
          variants={iconVariants(4)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4 flex justify-center items-center flex-col"
        >
          <img src={Redux} alt="redux" />
          <p>Redux</p>
        </motion.div>
        <motion.div
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4 flex justify-center items-center flex-col"
        >
          <img src={Tailwind} alt="tailwindCSS" />
          <p>Tailwind CSS</p>
        </motion.div>
        <motion.div
          
          variants={iconVariants(7)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4 flex justify-center items-center flex-col"
        >
          <img src={Nodejs} alt="nodejs" />
          <p>NodeJS</p>
        </motion.div>
        <motion.div
        
          variants={iconVariants(5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4 flex justify-center items-center flex-col"
        >
          <img
            className="w-24 h-24"
            src={Nextjs}
            alt="NextJS"
          />
          <p>NextJS</p>
        </motion.div>
        <motion.div
      
          variants={iconVariants(6)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4 flex justify-center items-center flex-col"
        >
          <img
            className="w-24 h-24"
            src={Shadcn}
            alt="Shad cn Ui"
          />
          <p>Shad Cn UI</p>
        </motion.div>
        <motion.div
          
          variants={iconVariants(3)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4 flex justify-center items-center flex-col"
        >
          <img src={MaterialUI} alt="MaterialUi" />
          <p>Material UI</p>
        </motion.div>
      </motion.div>

      {/* Non Tech skills */}
      <motion.h3
        whileInView={{opacity: 1, x: 0}}
        initial={{opacity:0 , x: -100}}
        transition={{duration: 1.5}}
      className="my-20 text-center text-4xl">
        {" "}
        Non Technical <span className="text-neutral-500">Skills </span>{" "}
      </motion.h3>
      <motion.div
       whileInView={{opacity:1, x:0}}
       initial={{opacity:0, x: 100}}
       transition={{duration: 1.5}}
      className="flex flex-wrap gap-4 items-center justify-center">
         <motion.div
          
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4 flex justify-center items-center flex-col">
          <img src={Shopify} alt="Shopify" />
          <p>Shopify</p>
        </motion.div>
         <motion.div
          
          variants={iconVariants(3)}
          initial="initial"
          animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4 flex justify-center items-center flex-col">
          <img src={WordPress} alt="wordpress" />
          <p>Wordpress</p>
        </motion.div>
         <motion.div
          
          variants={iconVariants(6)}
          initial="initial"
          animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4 flex justify-center items-center flex-col">
          <img src={Mailchimp} alt="mailchimp" />
          <p>Mailchimp</p>
        </motion.div>
         <motion.div
          
          variants={iconVariants(3)}
          initial="initial"
          animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4 flex justify-center items-center flex-col">
          <img src={HubSpot} alt="hubSpot" />
          <p>HubSpot</p>
        </motion.div>
         <motion.div
          
          variants={iconVariants(6)}
          initial="initial"
          animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4 flex justify-center items-center flex-col">
          <img
            src={GoogleT}
            alt="Google Tag Manager"
          />
          <p>Google Tag Manager</p>
        </motion.div>
         <motion.div
          
          variants={iconVariants(5)}
          initial="initial"
          animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4 flex justify-center items-center flex-col">
          <img
            src={GoogleA}
            alt="Google Analytics"
          />
          <p>Google Analytics</p>
        </motion.div>
      </motion.div>

      {/* Soft  skills */}
      {/* <h3 className="my-20 text-center text-4xl">
        {" "}
        Soft <span className="text-neutral-500">Skills </span>{" "}
      </h3> */}
    </div>
  );
};
