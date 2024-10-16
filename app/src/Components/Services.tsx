
const services = [
      {
        id: 1,
        name: "Web Development",
        image: "../assets/webdev.jpeg",

        description:
          "A personal portfolio website to showcase my projects, skills, and experience. It includes sections for about me, my projects, and a contact form.",
     
      },
      {
        id: 2,
        name: "App Development",
        image: "../assets/app-dev.avif",
     
        description:
          "An e-commerce web application with product listings, shopping cart functionality, user authentication, and order management.",
      
      },
      {
        id: 3,
        name: "E-commerce Development",
        image: "../assets/e-com.avif",
      
        description:
          "A real-time chat application with features like user authentication, chat rooms, and direct messaging.",
        
      },
      {
        id: 4,
        name: "Digital Marketing",
        image: "../assets/digital-marketing.avif",
       
        description:
          "A blogging platform where users can create, edit, and delete posts. It supports user authentication, comments, and categories.",
       
      },
      {
        id: 5,
        name: "WordPress Site Development",
        image: "../assets/wordpress.avif",
     
        description:
          "A career guidance platform to assist users in navigating their professional goals and connecting with mentors.",
       
      },
   
    ];


export const Service = (): JSX.Element => {
    return(
    <div className="  pb-4 md:mb-35">
         <h1 className="my-10 text-center text-4xl">My <span className="text-neutral-500"> Services</span> </h1>
         <div className=" grid  lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:gap-8 p-4 ">

         {services.map((service) => (
  <article className="relative mb-32 mt-8 ">
  <figure className="">
        <img  className="h-[230px] w-[626px]" src={service.image} alt="#" />
  </figure>
  <div className=" bg-black rounded-2xl p-4 flex justify-center flex-col items-center w-3/4 absolute top-44 left-12">
  <h1  className="text-xl font-semibold"> {service.name}  </h1>
  <p className="text-sm my-4">{service.description}</p> 
  </div>
</article>
         )
      )}
         </div>
          
 
    

    </div>
    )
  };
