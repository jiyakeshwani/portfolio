import { motion, Variants } from "framer-motion";

const container = (delay: number): Variants => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});

export const Hero = (): JSX.Element => {
  return (
    <div className=" border-b border-neutral-900 md:py-24  py-10 md:mb-35">
      <div className="flex flex-wrap  justify-between">
        <div className="w-full lg:w-1/2 ">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
            variants={container(0)}
            initial="hidden"
            animate="visible"
className="pb-16 text-4xl font-thin tracking-tight lg:mt-16 lg:text-6xl">
              Jiya Keshwani
            </motion.h1>
            <motion.span
            variants={container(0.5)}
            initial="hidden"
            animate="visible"
            className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text tracking-tight text-transparent text-2xl">
              {" "}
              Software Developer
            </motion.span>
            <motion.p
            variants={container(1)}
            initial="hidden"
            animate="visible"
            className="my-2 max-w-xl py-6 font-light tracking-tighter ">
              {" "}
              Results-oriented Software Developer with a proven track record of
              crafting creative user interfaces. Also skilled in strategic
              project management, marketing related tech and team leadership.
              Seeking a challenging position to leverage technical expertise.
            </motion.p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center">
            <motion.img
             initial={{x: 100 , opacity: 0}}
             animate={{x:0 , opacity: 1}}
             transition={{duration: 1, delay: 1.2}}
              className="w-96 rounded-2xl"
              src="src/assets/heroimg.jpg"
              alt="#"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
