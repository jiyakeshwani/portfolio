import { motion } from "framer-motion";

const projects = [
  {
    id: 1,
    name: "Portfolio Website",
    image: "portfolio-website.png",
    status: "Completed",
    description:
      "A personal portfolio website to showcase my projects, skills, and experience. It includes sections for about me, my projects, and a contact form.",
    liveLink: "https://my-portfolio.com",
    githubLink: "https://github.com/username/portfolio-website",
    techStack: ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS"],
  },
  {
    id: 2,
    name: "Shopping Cart",
    image: "ecommerce-store.png",
    status: "Completed",
    description:
      "An e-commerce web application with product listings, shopping cart functionality, user authentication, and order management.",
    liveLink: "https://ecommerce-store.com",
    githubLink: "https://github.com/username/ecommerce-store",
    techStack: ["React", "Redux", "Node.js", "Express", "MongoDB"],
  },
  {
    id: 3,
    name: "Chat Application",
    image: "chat-application.png",
    status: "In progress",
    description:
      "A real-time chat application with features like user authentication, chat rooms, and direct messaging.",
    liveLink: "https://my-chat-app.com",
    githubLink: "https://github.com/username/chat-application",
    techStack: ["React", "Socket.io", "Node.js", "Express"],
  },
  {
    id: 4,
    name: "Link",
    image: "link.png",
    status: "Completed",
    description:
      "A blogging platform where users can create, edit, and delete posts. It supports user authentication, comments, and categories.",
    liveLink: "https://link-project.vercel.app/",
    githubLink: "https://github.com/username/blog-platform",
    techStack: ["React", "Node.js", "Express", "MongoDB", "Bootstrap"],
  },
  {
    id: 5,
    name: "Career Guidance",
    image: "weather-app.png",
    status: "In progress",
    description:
      "A career guidance platform to assist users in navigating their professional goals and connecting with mentors.",
    liveLink: "https://my-career-guidance.com",
    githubLink: "https://github.com/username/career-guidance",
    techStack: ["HTML", "CSS", "JavaScript", "React", "Node.js"],
  },
];

export const Projects = (): JSX.Element => {
  return (
    <div className=" border-b border-t border-neutral-900 md:pb-32  pb-4 md:mb-35 mt-24">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl"
      >
        Projects
      </motion.h1>

      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 100 }}
        transition={{ duration: 1.5 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6"
      >
        {projects.map((project, index) => (
          <div
            key={index}
            className=" border border-gray-700 text-neutral-200 p-6 rounded-lg transition duration-300 ease-in-out  hover"
            style={{ backgroundImage: project.image }}
          >
            <h2 className="text-2xl font-bold mb-2">{project.name}</h2>
            <p className="mb-4">{project.description}</p>
            <span className=" inline-block py-1 rounded-full text-sm ">
              Status- {project.status}
            </span>

            {project.status !== "In progress" && (
              <div className="flex space-x-4 my-4">
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  Live
                </a>
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  GitHub
                </a>
              </div>
            )}
          </div>
        ))}
      </motion.div>
    </div>
  );
};
