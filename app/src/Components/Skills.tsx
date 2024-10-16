import { motion } from "framer-motion";

const iconVariants = (duration: number) => ({
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
          <img src="src/assets/techSkills/html.png" alt="html" />
          <p>HTML</p>
        </motion.div>
        <motion.div
          variants={iconVariants(3)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4 flex justify-center items-center flex-col"
        >
          <img src="src/assets/nonTechSkills/shopify.png" alt="css" />
          <p>CSS</p>
        </motion.div>
        <motion.div
          variants={iconVariants(5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4 flex justify-center items-center flex-col"
        >
          <img src="src/assets/techSkills/javascript.png" alt="js" />
          <p>JavaScript</p>
        </motion.div>
        <motion.div
          variants={iconVariants(2)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4 flex justify-center items-center flex-col"
        >
          <img src="src/assets/techSkills/react.png" alt="react" />
          <p>ReactJS</p>
        </motion.div>
        <motion.div
          // @ts-ignore
          variants={iconVariants(6)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4 flex justify-center items-center flex-col"
        >
          <img src="src/assets/techSkills/typescript.png" alt="typescript" />
          <p>TypeScript</p>
        </motion.div>
        <motion.div
          // @ts-ignore
          variants={iconVariants(4)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4 flex justify-center items-center flex-col"
        >
          <img src="src/assets/techSkills/redux.png" alt="redux" />
          <p>Redux</p>
        </motion.div>
        <motion.div
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4 flex justify-center items-center flex-col"
        >
          <img src="src/assets/techSkills/tailwind.png" alt="tailwindCSS" />
          <p>Tailwind CSS</p>
        </motion.div>
        <motion.div
          // @ts-ignore
          variants={iconVariants(7)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4 flex justify-center items-center flex-col"
        >
          <img src="src/assets/techSkills/nodejs.png" alt="nodejs" />
          <p>NodeJS</p>
        </motion.div>
        <motion.div
          // @ts-ignore
          variants={iconVariants(5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4 flex justify-center items-center flex-col"
        >
          <img
            className="w-24 h-24"
            src="src/assets/techSkills/nextjs-icon.webp"
            alt="NextJS"
          />
          <p>NextJS</p>
        </motion.div>
        <motion.div
          // @ts-ignore
          variants={iconVariants(6)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4 flex justify-center items-center flex-col"
        >
          <img
            className="w-24 h-24"
            src="src/assets/techSkills/shadCn.png"
            alt="Shad cn Ui"
          />
          <p>Shad Cn UI</p>
        </motion.div>
        <motion.div
          // @ts-ignore
          variants={iconVariants(3)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4 flex justify-center items-center flex-col"
        >
          <img src="src/assets/techSkills/mui.png" alt="MaterialUi" />
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
          // @ts-ignore
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4 flex justify-center items-center flex-col">
          <img src="src/assets/nonTechSkills/shopify.png" alt="Shopify" />
          <p>Shopify</p>
        </motion.div>
         <motion.div
          // @ts-ignore
          variants={iconVariants(3)}
          initial="initial"
          animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4 flex justify-center items-center flex-col">
          <img src="src/assets/nonTechSkills/wordpress.png" alt="wordpress" />
          <p>Wordpress</p>
        </motion.div>
         <motion.div
          // @ts-ignore
          variants={iconVariants(6)}
          initial="initial"
          animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4 flex justify-center items-center flex-col">
          <img src="src/assets/nonTechSkills/mailchimp.png" alt="mailchimp" />
          <p>Mailchimp</p>
        </motion.div>
         <motion.div
          // @ts-ignore
          variants={iconVariants(3)}
          initial="initial"
          animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4 flex justify-center items-center flex-col">
          <img src="src/assets/nonTechSkills/hubspot.png" alt="hubSpot" />
          <p>HubSpot</p>
        </motion.div>
         <motion.div
          // @ts-ignore
          variants={iconVariants(6)}
          initial="initial"
          animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4 flex justify-center items-center flex-col">
          <img
            src="src/assets/nonTechSkills/googletagmanager.png"
            alt="Google Tag Manager"
          />
          <p>Google Tag Manager</p>
        </motion.div>
         <motion.div
          // @ts-ignore
          variants={iconVariants(5)}
          initial="initial"
          animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4 flex justify-center items-center flex-col">
          <img
            src="src/assets/nonTechSkills/googleanalytics.png"
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
