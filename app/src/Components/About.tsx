import { motion } from "framer-motion";
import AboutImg from "../assets/aboutimg.jpg";

export const About = (): JSX.Element => {
  return (
    <div className="border-b border-neutral-900 md:pb-32 pb-4">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1 }}
        className="my-20 text-center text-4xl "
      >
        About <span className="text-neutral-500">Me</span>
      </motion.h2>
      <div className="flex flex-wrap">
        <motion.div
          whileInView={{ opacity: 1, x: 1 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          className="w-full lg:w-1/2 lg:p-8"
        >
          <div className="flex justify-center items-center">
            <img className="w-96 rounded-2xl" src={AboutImg} alt="#" />
          </div>
        </motion.div>
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1 }}
          className="w-full lg:w-1/2 "
        >
          <div className="flex justify-center lg:justify-start">
            <p className="my-2 max-w-xl py-12  tracking-tighter leading-8 text-xl font-medium">
              {" "}
              Hi, I'm Jiya, a passionate and detail-oriented software developer
              with a strong focus on front-end development and user experience.
              With 2 of hands-on experience in creating responsive,
              high-performance web applications, I specialize in building
              solutions that combine cutting-edge technologies with intuitive
              designs. I have a proven track record of delivering clean,
              scalable code, utilizing frameworks like React.js and Next.js,
              along with modern styling tools like Tailwind CSS and Material UI.
              I thrive in collaborative environments where innovation and
              learning are key, and I enjoy turning complex challenges into
              simple, elegant solutions. Whether I'm working on a personal
              project or contributing to a larger team, my goal is to deliver
              efficient, maintainable, and high-quality software. When I'm not
              coding, you'll find me exploring the latest in tech trends or
              experimenting with new tools to enhance my skill set. Let's build
              something amazing together!
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
