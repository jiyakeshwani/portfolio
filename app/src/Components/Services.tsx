import appDevImage from '../assets/app-dev.avif';
import digitalMarketingImage from '../assets/digital-marketing.avif';
import ecomImage from '../assets/e-com.avif';
import webdevImage from '../assets/webdev.jpeg';
import wordpressImage from '../assets/wordpress.avif';

const services = [
      {
        id: 1,
        name: "Web Development",
        image: webdevImage,

        description:
          "A dynamic, responsive web application with modern frameworks, optimized performance, and seamless user experience. including API integration, and real-time data handling.",
     
      },
      {
        id: 2,
        name: "App Development",
        image:appDevImage,
     
        description:
          "A comprehensive mobile application offering users seamless functionality, featuring product listings, shopping carts, and integrated user authentication.",
      
      },
      {
        id: 3,
        name: "E-commerce Development",
        image: ecomImage,
      
        description:
          "An advanced online store platform with real-time product updates, integrated payments, and a dynamic shopping experience tailored to user preferences.",
        
      },
      {
        id: 4,
        name: "Digital Marketing",
        image: digitalMarketingImage,
       
        description:
          "A full-service digital marketing platform that helps businesses boost their online presence with tools for SEO, social media management, and campaign analytics.",
       
      },
      {
        id: 5,
        name: "WordPress Site Development",
        image: wordpressImage,
     
        description:
          "A flexible WordPress website tailored to meet business needs, with full support for custom themes, plugins, and content management integration.",
       
      },
   
    ];


export const Service = (): JSX.Element => {
    return(
    <div className="  pb-4 md:mb-35">
         <h1 className="my-10 text-center text-4xl">My <span className="text-neutral-500"> Services</span> </h1>
         <div className=" grid  lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:gap-8 p-4 ">

         {services.map((service) => (
  <article className="relative mb-40 mt-8 ">
  <figure className="">
        <img  className="h-[230px] w-[626px]" src={service.image} alt="#" />
  </figure>
  <div className=" bg-black rounded-2xl p-4 flex justify-center flex-col items-center w-3/4 absolute top-44 md:left-12 left-8">
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
