import { motion } from "framer-motion";


export const Contact = (): JSX.Element => {
    return(
    <div className=" border-b border-neutral-900 pb-4 md:mb-35">
    
    <div className="flex justify-center items-center min-h-screen  p-4">
      <form
        action="https://formspree.io/f/mkndrzda"

        method="POST"
        className="w-full max-w-lg shadow-md rounded px-8 pt-6 pb-8 mb-4"
      >
        <motion.h2 
         whileInView={{opacity: 1, y: 0}}
         initial={{opacity:0 , y: -100}}
         transition={{duration: 1.5}}
        className="text-2xl font-bold mb-6 text-white text-center">
          Contact <span className="text-neutral-500">Me</span>
        </motion.h2>
<motion.div
  whileInView={{opacity: 1, x: 0}}
  initial={{opacity:0 , x: -100}}
  transition={{duration: 1.5}}
>
        {/* First Name and Last Name */}
        <div className="flex flex-wrap -mx-3 mb-4">
          <div className="w-full md:w-1/2 px-3 mb-4 md:mb-0">
            <label
              className="block capitalize tracking-wide text-gray-200 text-xs font-bold mb-2"
              htmlFor="firstName"
            >
              First Name
            </label>
            <input
              className="appearance-none block w-full  bg-black shadow-lg shadow-gray-400 text-gray-500 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="firstName"
              type="text"
              name="firstName"
              placeholder="John"
              required
            />
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label
              className="block capitalize tracking-wide text-gray-200 text-xs font-bold mb-2"
              htmlFor="lastName"
            >
              Last Name
            </label>
            <input
              className="appearance-none block w-full bg-black shadow-lg shadow-gray-400 text-gray-500 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="lastName"
              type="text"
              name="lastName"
              placeholder="Doe"
              required
            />
          </div>
        </div>

        {/* Email */}
        <div className="mb-4">
          <label
            className="block capitalize tracking-wide text-gray-200 text-xs font-bold mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            className="appearance-none block w-full bg-black shadow-lg shadow-gray-400 text-gray-500 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="email"
            type="email"
            name="email"
            placeholder="example@example.com"
            required
          />
        </div>

        {/* Subject */}
        <div className="mb-4">
          <label
            className="block capitalize tracking-wide text-gray-200 text-xs font-bold mb-2"
            htmlFor="subject"
          >
            Subject
          </label>
          <input
            className="appearance-none block w-full  bg-black shadow-lg shadow-gray-400 text-gray-500 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="subject"
            type="text"
            name="subject"
            placeholder="Subject"
            required
          />
        </div>

        {/* Message */}
        <div className="mb-6">
          <label
            className="block capitalize tracking-wide text-gray-200 text-xs font-bold mb-2"
            htmlFor="message"
          >
            Message
          </label>
          <textarea
            className="no-resize appearance-none block w-full bg-black shadow-lg shadow-gray-400 text-gray-500 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-32 resize-none"
            id="message"
            name="message"
            placeholder="Your message here..."
            required
          ></textarea>
        </div>

        {/* Submit Button */}
        <div className="flex items-center justify-center">
          <button
            className="bg-neutral-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
            type="submit"
          >
            Send Message
          </button>
        </div>
        </motion.div>
      </form>
    </div>
    </div>
    )
  };
  