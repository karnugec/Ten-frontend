import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import java from "./Java.pdf";
import python from "./Python.pdf";
import fullstack from "./FullStack.pdf";
import software from "./Software.pdf";
import Angular from "./Angular.pdf";
import Wix from "./Wix.pdf";
import DS from "./DS.pdf";
import Wordpress from "./wordpress.pdf";
import App from "./App.pdf";
import SpringBoot from "./SpringBoot.pdf";
import C from "./C++.pdf";
import AI from "./AI.pdf";
import BigData from "./BigData.pdf";
import Testing from "./Testing.pdf";
import ML from "./ML.pdf";
import Blockchain from "./BlockChain.pdf";
import TPM from "./TPM.pdf";
import ReactDev from "./ReactDev.pdf";
import CloudComputing from "./CloudComputing.pdf";
import devops from "./Devops.pdf";
import placement from "./placement.pdf";
import img from "./PIMG.jpg";
import axios from "axios";

const CourseDetails = () => {
  const [course,SetCourse] =useState([])
  const { id } = useParams();
  // const courses = [
  //   {
  //     id: 1,
  //     title: "Java Devlopment",
  //     category: "Programming Language",
  //     level: "Intermediate",
  //     rating: 5,
  //     desc: "Welcome to the world of Java Development! This course is designed to equip you with the essential skills and knowledge required to become proficient in Java programming. Whether you're a complete beginner or someone looking to enhance their existing Java skills, this course will provide you with a solid foundation and advanced techniques to excel in Java development.Java is a versatile, object-oriented programming language widely used for developing various applications, from simple desktop programs to complex enterprise-level systems. Known for its platform independence, robustness, and extensive libraries, Java has been a favorite choice for developers across the globe for over two decades.",
  //     imgSrc:
  //       "https://www.finoit.com/wp-content/uploads/2022/11/future-of-java-programming-language.jpg",
  //     link: java,
  //     price: 5000,
  //   },
  //   {
  //     id: 2,
  //     title: "Python Programming",
  //     category: "Programming Language",
  //     level: "Beginner",
  //     rating: 4,
  //     imgSrc:
  //       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZ-g2zknp5rVroM3sl_16OUpbHIFJ1dxPlKG-8NwPPZw&s",
  //     desc: "Are you eager to dive into the world of programming? Whether you're a complete beginner or someone looking to expand their skills, you've come to the right place. In this Python Programming Course, we'll take you on a journey from the fundamentals of Python to more advanced topics, equipping you with the tools you need to write efficient, readable, and powerful code.Python has rapidly emerged as one of the most popular programming languages in the world, and for good reason. Known for its simplicity, versatility, and readability, Python is used in a wide range of applications, from web development and data analysis to artificial intelligence and scientific computing. Its gentle learning curve makes it an ideal choice for beginners, while its extensive libraries and frameworks offer endless possibilities for seasoned developers.",
  //     link: python,
  //     price: 5000,
  //   },
  //   {
  //     id: 3,
  //     title: "Placement Course",
  //     category: "PAP",
  //     level: "Advanced",
  //     rating: 4,
  //     imgSrc: img,
  //     desc: "Are you looking to fast-track your career in the tech industry? Do you aspire to land lucrative job opportunities in top-tier companies? Our Career Accelerator program offers a comprehensive placement course designed to equip you with the in-demand technical skills and industry insights needed to succeed in today's competitive job market.In our Career Accelerator program, we've meticulously curated a diverse range of technical courses to ensure that you're well-prepared for the challenges and opportunities of the modern workplace. From programming languages to cloud computing, cybersecurity to data science, our curriculum covers all the essential domains that employers are seeking in their candidates.Through a combination of expert-led instruction, hands-on projects, and practical assignments, you'll delve deep into each subject area, mastering the tools and techniques that are shaping the future of technology. Our experienced instructors bring real-world expertise to the classroom, providing invaluable insights and mentorship to help you excel in your learning journey.But our placement course goes beyond just technical training. We understand that succeeding in today's job market requires more than just technical prowess. That's why our program also includes modules on professional development, interview preparation, resume building, and soft skills enhancement. We'll help you polish your communication skills, hone your problem-solving abilities, and cultivate the confidence needed to ace interviews and thrive in any professional setting.",
  //     link: placement,
  //     price: 37500,
  //   },

  //   {
  //     id: 4,
  //     title: "Software Development",
  //     category: "Development",
  //     level: "Beginner",
  //     rating: 4,
  //     imgSrc:
  //       "https://t4.ftcdn.net/jpg/04/19/26/97/360_F_419269782_9LsP3TQndMVnZ2j3ZhTPhMjaqQpFAth9.jpg",
  //     desc: "A software development course serves as a comprehensive guide for individuals interested in mastering the art and science of creating software applications. Whether you're a novice looking to explore coding for the first time or a seasoned professional aiming to sharpen your skills, these courses provide structured learning pathways to accommodate various levels of expertise.Typically, such courses cover a wide array of topics essential for understanding the software development lifecycle. This includes programming languages such as Python, Java, or JavaScript, as well as frameworks and libraries pertinent to web, mobile, or desktop application development. Additionally, students delve into fundamental concepts like data structures, algorithms, database management, version control systems, and software architecture principles.",
  //     link: software,
  //     price: 5000,
  //   },
  //   {
  //     id: 5,
  //     title: "Angular Development",
  //     category: "Programming",
  //     level: "Advanced",
  //     rating: 5,
  //     imgSrc:
  //       "https://media.licdn.com/dms/image/D5612AQF-2JxyWTGN1A/article-cover_image-shrink_720_1280/0/1686818483238?e=2147483647&v=beta&t=wMtLwGbftMZXAZaOKjZAAAn2dr1eGhUcRX_Hg5qxEUc",
  //     desc: "Angular is a powerful JavaScript framework that is widely used for building dynamic web applications. Developed and maintained by Google, Angular provides developers with a robust set of tools for creating scalable, efficient, and maintainable applications. In this course, we will dive deep into the world of Angular development, starting from the basics and progressing to advanced topics. Whether you're a seasoned developer looking to expand your skillset or a newcomer to web development, this course is designed to provide you with the knowledge and hands-on experience you need to become proficient in Angular.",
  //     link: Angular,
  //     price: 5000,
  //   },
  //   {
  //     id: 6,
  //     title: "Wix web Developer",
  //     category: "Web Development",
  //     level: "Advanced",
  //     rating: 4,
  //     imgSrc:
  //       "https://www.google.com/url?sa=i&url=https%3A%2F%2Folitt.com%2Fblog%2Fwhy-wix%2F&psig=AOvVaw0tCOIZ8Xse7v1wIHGNA_mf&ust=1715615298002000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCKix65W7iIYDFQAAAAAdAAAAABAQ",
  //     desc: "A Wix web development course offers an excellent opportunity for individuals to delve into the world of website creation and design using one of the most popular website builders available today. Wix provides an intuitive platform that allows users to create stunning websites without needing extensive coding knowledge.In an introductory course, participants typically learn the fundamentals of using Wix, including navigating the platform, choosing templates, customizing designs, adding content such as text, images, and videos, and optimizing websites for various devices.",
  //     link: Wix,
  //     price: 5000,
  //   },
  //   {
  //     id: 7,
  //     title: "Data Structure",
  //     category: "Development",
  //     level: "Advanced",
  //     rating: 4,
  //     imgSrc:
  //       "https://prepbytes-misc-images.s3.ap-south-1.amazonaws.com/assets/1644826783284-3.%20Data%20Structures.png",
  //     desc: "A Data Structures course is like embarking on a journey through the architecture of information. It's where you delve into the fundamental building blocks that empower efficient manipulation, storage, and retrieval of data within computer programs. This journey equips you with the tools to optimize algorithms and streamline processes, essential skills for any aspiring programmer or computer scientist.At its core, the course explores various data organization techniques, each tailored to specific scenarios, be it handling massive datasets or ensuring swift access to critical information. From the classic arrays and linked lists to more complex structures like trees, graphs, and hash tables, each data structure offers its unique advantages and trade-offs.",
  //     link: DS,
  //     price: 5000,
  //   },
  //   {
  //     id: 8,
  //     title: "Wordpress Develoment",
  //     category: "Web Development",
  //     level: "Advanced",
  //     rating: 4,
  //     imgSrc:
  //       "https://s.w.org/style/images/about/WordPress-logotype-alternative.png",
  //     desc: "Welcome to our WordPress Development Course! In this comprehensive program, we delve into the fascinating world of WordPress, one of the most popular content management systems (CMS) on the web. Whether you're a beginner looking to build your first website or a seasoned developer seeking to enhance your skills, this course is designed to empower you with the knowledge and tools needed to create dynamic and engaging websites with WordPress.Throughout this course, you'll embark on a journey that covers everything from the basics of setting up a WordPress site to advanced topics such as theme and plugin development. Our carefully crafted curriculum combines theoretical concepts with hands-on exercises, ensuring that you not only understand the principles behind WordPress but also gain practical experience in applying them.",
  //     link: Wordpress,
  //     price: 5000,
  //   },
  //   {
  //     id: 9,
  //     title: "Android App Development",
  //     category: "App Development",
  //     level: "Advanced",
  //     rating: 4,
  //     imgSrc:
  //       "https://www.androiddeveloper.co.in/blog/wp-content/uploads/2016/03/Android-App-Development-2.jpg",
  //     desc: "Welcome to the Mastering Android App Development course! In this comprehensive program, we will delve into the exciting world of Android app development, empowering you to create dynamic, engaging, and innovative applications for the world's most popular mobile platform.Throughout this course, you will embark on a journey from the fundamentals of Android development to advanced techniques and best practices. Whether you're a novice with no prior coding experience or an experienced developer looking to enhance your skills, this course is designed to accommodate learners of all levels.",
  //     link: App,
  //     price: 5000,
  //   },
  //   {
  //     id: 10,
  //     title: "Spring Boot ",
  //     category: " Development",
  //     level: "Advanced",
  //     rating: 4,
  //     imgSrc:
  //       "https://miro.medium.com/v2/resize:fit:600/1*ljHUhFnaBissdRBe7DIo6g.png",
  //     desc: "Welcome to our Spring Boot course! In this comprehensive learning journey, we delve into one of the most popular frameworks for building Java applications rapidly and efficiently.Spring Boot has revolutionized Java development by providing a streamlined way to create stand-alone, production-grade Spring-based applications. It simplifies the configuration and deployment process, allowing developers to focus more on writing robust business logic rather than dealing with boilerplate setup.Throughout this course, we will explore the fundamental concepts of Spring Boot, starting from the basics and gradually advancing to more complex topics.",
  //     link: SpringBoot,
  //     price: 5000,
  //   },
  //   {
  //     id: 11,
  //     title: "C & C++ Development",
  //     category: "Development",
  //     level: "Advanced",
  //     rating: 4,
  //     imgSrc:
  //       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsIzJ7oqXeM8_St-ThcngQR1-vnmvGBlYvduNvtO20zQ&s",
  //     desc: "A course in C and C++ programming languages is a fundamental stepping stone for anyone aspiring to delve into the world of software development. C and C++ are two of the most influential and widely used programming languages in the history of computer science, with C laying the groundwork for many modern languages and C++ providing object-oriented programming capabilities on top of C's powerful features.In a typical C and C++ course, students are introduced to the syntax, semantics, and best practices of these languages, starting from the basics and gradually progressing to more advanced topics..",
  //     link: C,
  //     price: 5000,
  //   },
  //   {
  //     id: 12,
  //     title: "BigData",
  //     category: "Development",
  //     level: "Advanced",
  //     rating: 4,
  //     imgSrc:
  //       "https://thumbs.dreamstime.com/b/white-big-data-hologram-against-blurred-blue-background-concept-hi-tech-innovation-business-production-toned-image-102276491.jpg",
  //     desc: "In today's digital age, the volume, variety, and velocity of data are growing at an unprecedented rate. As organizations strive to harness the power of this data deluge, professionals equipped with the skills to manage and analyze big data are in high demand. Our course, Mastering Big Data is designed to equip you with the knowledge and expertise needed to excel in this dynamic field.Throughout this course, you will delve into the fundamentals of big data, exploring concepts such as data storage, processing, analysis, and visualization. You will learn how to leverage cutting-edge technologies and tools, including Hadoop, Spark, and NoSQL databases, to effectively manage and manipulate large datasets.",
  //     link: BigData,
  //     price: 5000,
  //   },
  //   {
  //     id: 13,
  //     title: "Software Testing",
  //     category: "Testing",
  //     level: "Advanced",
  //     rating: 4,
  //     imgSrc:
  //       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHvUOrhmFwgFSXpCO8SKrfx27ZYxf207-m6XlH0MJvdA&s",
  //     desc: "A software testing course provides comprehensive training on the principles, techniques, and tools used in ensuring the quality and reliability of software applications. In today's tech-driven world, where software powers almost every aspect of our lives, ensuring that these applications function as intended is paramount. Software testing plays a crucial role in achieving this goal.In a software testing course, participants typically learn various testing methodologies, including manual and automated testing approaches. They delve into understanding the software development life cycle (SDLC) and the role of testing at different stages of the process.",
  //     link: Testing,
  //     price: 5000,
  //   },
  //   {
  //     id: 14,
  //     title: "Data science and machine Learning",
  //     category: "Development",
  //     level: "Advanced",
  //     rating: 4,
  //     imgSrc:
  //       "https://emeritus.org/in/wp-content/uploads/sites/3/2023/03/types-of-machine-learning.jpg.optimal.jpg",
  //     desc: "Welcome to the exciting world of Data Science and Machine Learning! In this course, we will embark on a journey to explore the interdisciplinary field that combines techniques from statistics, computer science, and domain knowledge to extract insights and knowledge from dat Overview Data Science and Machine Learning are revolutionizing industries across the globe, from finance to healthcare, marketing to entertainment. This course will provide you with a comprehensive understanding of the fundamental concepts, techniques, and tools used in these fields.",
  //     link: ML,
  //     price: 5000,
  //   },
  //   {
  //     id: 15,
  //     title: "BlockChain",
  //     category: "Development",
  //     level: "Advanced",
  //     rating: 4,
  //     imgSrc:
  //       "https://t3.ftcdn.net/jpg/01/96/96/86/360_F_196968684_zp8obttcJzlY4tWhFHzDGOTbPkdY0Q3p.jpg",
  //     desc: "Welcome to the world of blockchain technology, where innovation meets security, and decentralization redefines trust. This course is your gateway to understanding one of the most transformative technologies of our time.Blockchain, initially known as the underlying technology behind cryptocurrencies like Bitcoin, has evolved into a robust system with applications across various industries. From finance to healthcare, supply chain management to voting systems, blockchain is revolutionizing how we transact, interact, and trust in the digital age.",
  //     link: Blockchain,
  //     price: 5000,
  //   },
  //   {
  //     id: 16,
  //     title: "Technical Program Mangement",
  //     category: "Development",
  //     level: "Advanced",
  //     rating: 4,
  //     imgSrc:
  //       "https://t3.ftcdn.net/jpg/01/96/96/86/360_F_196968684_zp8obttcJzlY4tWhFHzDGOTbPkdY0Q3p.jpg",
  //     desc: "A technical program management course equips individuals with the knowledge and skills needed to effectively manage complex technical projects or programs. These courses typically cover a wide range of topics, including project management methodologies, technical leadership, stakeholder management, risk assessment, and communication strategies.Participants in such courses often come from diverse backgrounds, including engineering, computer science, and information technology. The goal is to provide them with a comprehensive understanding of how to navigate the challenges inherent in overseeing large-scale technical initiatives.",
  //     link: TPM,
  //     price: 5000,
  //   },
  //   {
  //     id: 17,
  //     title: "React Development",
  //     category: "Development",
  //     level: "Advanced",
  //     rating: 4,
  //     imgSrc:
  //       "https://www.loginradius.com/blog/static/00a89fc56461ea1529439d89072c93f1/701ee/react.jpg",
  //     desc: "Welcome to our React Development Course! In this comprehensive program, we'll delve into the world of React, one of the most popular JavaScript libraries for building user interfaces. Whether you're a beginner looking to kickstart your journey into web development or an experienced developer aiming to enhance your skills, this course is designed to cater to your needs.Throughout this course, you'll embark on a hands-on learning experience where theory meets practice. We'll start with the fundamentals of React, understanding its core concepts such as components, state, props, and JSX. As we progress, we'll explore advanced topics including React Hooks, Context API, and Redux for state management.",
  //     link: ReactDev,
  //     price: 5000,
  //   },
  //   {
  //     id: 18,
  //     title: "Aritifical Intellegeince",
  //     category: "Development",
  //     level: "Advanced",
  //     rating: 4,
  //     imgSrc:
  //       "https://media.istockphoto.com/id/1452604857/photo/businessman-touching-the-brain-working-of-artificial-intelligence-automation-predictive.jpg?s=612x612&w=0&k=20&c=GkAOxzduJbUKpS2-LX_l6jSKtyhdKlnPMo2ito4xpR4=",
  //     desc: "An artificial intelligence course offers a comprehensive exploration into the realm of AI, covering its principles, methodologies, and applications. In such a course, students delve into the fascinating intersection of computer science, mathematics, and cognitive psychology to understand how machines can mimic human intelligence and behavior. From fundamental algorithms to advanced neural networks",
  //     link: AI,
  //     price: 5000,
  //   },
  //   {
  //     id: 19,
  //     title: "Cloud Computing",
  //     category: "Development",
  //     level: "Advanced",
  //     rating: 4,
  //     imgSrc:
  //       "https://miro.medium.com/v2/resize:fit:640/1*ngkHgQq7ij1NBNr62er3zA.png",
  //     desc: "A Cloud Computing course serves as a gateway to understanding and leveraging the dynamic world of cloud technology. In this course, students delve into the fundamentals of cloud computing, exploring its architecture, services, and applications. Through a combination of theoretical concepts and hands-on practical exercises, participants gain proficiency in deploying, managing, and securing cloud-based solutions.The course typically covers topics such as cloud service models (IaaS, PaaS, SaaS), deployment models (public, private, hybrid), virtualization, containerization, networking in the cloud, storage options, scalability, elasticity, cost management, and compliance. Additionally, students learn about leading cloud platforms like Amazon Web Services (AWS), Microsoft Azure, Google Cloud Platform (GCP), and others, along with best practices for selecting and implementing cloud solutions tailored to specific business needs.",
  //     link: CloudComputing,
  //     price: 5000,
  //   },
  //   {
  //     id: 20,
  //     title: "Devops",
  //     category: "Development",
  //     level: "Advanced",
  //     rating: 4,
  //     imgSrc:
  //       "https://img.freepik.com/free-vector/gradient-devops-illustration_23-2149369792.jpg",
  //     desc: "In today's rapidly evolving technological landscape, the demand for seamless collaboration between software development and IT operations has never been greater. DevOps, a set of practices aimed at automating and integrating the processes between software development and IT teams, has emerged as a crucial methodology for organizations striving to deliver high-quality software at speed.Our Mastering DevOps course is designed to equip professionals with the knowledge and skills necessary to thrive in this dynamic environment. Whether you're a software developer, system administrator, or IT operations professional, this course offers comprehensive training in the principles, tools, and techniques of DevOps.",
  //     link: placement,
  //     price: 5000,
  //   },
  //   {
  //     id: 21,
  //     title: "Full Stack ",
  //     category: "Development",
  //     level: "Intermediate",
  //     rating: 5,
  //     imgSrc:
  //       "https://www.simplilearn.com/ice9/free_resources_article_thumb/full_stack_banner.jpg",
  //     desc: "A full stack development course is designed to equip individuals with the comprehensive skill set needed to build modern web applications from start to finish. The term full stack refers to proficiency in both front-end and back-end development, along with knowledge of various tools and technologies to create fully functional applications.",
  //     link: fullstack,
  //     price: 5000,
  //   },
  // ];
  
  useEffect(()=>{
    axios.get(`https://ten-0wfv.onrender.com/api/users/coursedetails/${id}`)
    .then((res)=>SetCourse(res.data.courseDetails))
    .catch((Err)=>console.log(Err))
  },[id])
  // const courseId = parseInt(id); // Convert id to integer

  // let course = courses.find((course) => course.id === courseId);
  // console.log(id, course);

  if (!course) {
    return <div>Course not found</div>;
  }

  return (
    <div className="md:[80%] mx-auto py-8 px-8 shadow-md">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
        <div className="">
          <img
            src={course.imgSrc}
            alt={course.title}
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>
        <div>
          <h1 className="text-3xl font-bold mb-4">{course.title}</h1>
          <div className="mb-4">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold bg-gray-200 text-gray-700 mr-2">
              {course.category}
            </span>
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold bg-gray-200 text-gray-700">
              {course.level}
            </span>
          </div>
          <div className="flex items-center mb-4">
            {Array(course.rating)
              .fill()
              .map((_, i) => (
                <svg
                  key={i}
                  className="h-5 w-5 text-yellow-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
          </div>
          <div>{course.description}</div>
          {/* <a href={`/${course.link}`}> */}
          {/* <button 
          onClick={() => window.location.href = course.link}
          className='px-4 py-2 hover:bg-black hover:text-white text-black bg-white'> View Brochure </button> */}
          {/* </a> */}
          <div>
            {" "}
            Price :{" "}
            <span className="text-red-600 font-semibold text-lg">
              {" "}
              {course.price}{" "}
            </span>{" "}
            Rs{" "}
          </div>
          <div className=" flex gap-4 justify-center items-center">
          <a href={course.link} target="_blank" rel="noopener noreferrer">
            <button className="px-4 py-2 hover:bg-black hover:text-white text-black bg-white">
              View Brochure
            </button>
          </a>
            <Link to={`/payment/${course._id}`}>
              <button
               className=" py-2 px-4 ">Buy Now</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
