

import React, { useState } from "react";
import "./Courses.css";
import {Link} from 'react-router-dom'
import img from './PIMG.jpg'


const Courses = () => {
  const [showAll, setShowAll] = useState(false);

  
  const courses = [
    { id:1,
      title: "Java Devlopment",
      category: "Programming Language",
      level: "Intermediate",
      rating: 5,
      desc:"Welcome to the world of Java Development! This course is designed to equip you with the essential skills and knowledge required to become proficient in Java programming. Whether you're a complete beginner or someone looking to enhance their existing Java skills, this course will provide you with a solid foundation and advanced techniques to excel in Java development.Java is a versatile, object-oriented programming language widely used for developing various applications, from simple desktop programs to complex enterprise-level systems. Known for its platform independence, robustness, and extensive libraries, Java has been a favorite choice for developers across the globe for over two decades.",
      imgSrc:
        "https://www.devopsschool.com/blog/wp-content/uploads/2022/03/java_logo_icon_168609.png",
        price:5000
    },
    { id:2,
      title:
        "Python Programming",
      category: "Programming Language",
      level: "Beginner",
      rating: 4,
      imgSrc:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZ-g2zknp5rVroM3sl_16OUpbHIFJ1dxPlKG-8NwPPZw&s",
        desc:"Are you eager to dive into the world of programming? Whether you're a complete beginner or someone looking to expand their skills, you've come to the right place. In this Python Programming Course, we'll take you on a journey from the fundamentals of Python to more advanced topics, equipping you with the tools you need to write efficient, readable, and powerful code.Python has rapidly emerged as one of the most popular programming languages in the world, and for good reason. Known for its simplicity, versatility, and readability, Python is used in a wide range of applications, from web development and data analysis to artificial intelligence and scientific computing. Its gentle learning curve makes it an ideal choice for beginners, while its extensive libraries and frameworks offer endless possibilities for seasoned developers.",
        price:5000
    },
    { id:3,
      title:
        "Placement Course",
      category: "PAP",
      level: "Advanced",
      rating: 4,
      imgSrc:img,
        desc:"Are you looking to fast-track your career in the tech industry? Do you aspire to land lucrative job opportunities in top-tier companies? Our Career Accelerator program offers a comprehensive placement course designed to equip you with the in-demand technical skills and industry insights needed to succeed in today's competitive job market.In our Career Accelerator program, we've meticulously curated a diverse range of technical courses to ensure that you're well-prepared for the challenges and opportunities of the modern workplace. From programming languages to cloud computing, cybersecurity to data science, our curriculum covers all the essential domains that employers are seeking in their candidates.Through a combination of expert-led instruction, hands-on projects, and practical assignments, you'll delve deep into each subject area, mastering the tools and techniques that are shaping the future of technology. Our experienced instructors bring real-world expertise to the classroom, providing invaluable insights and mentorship to help you excel in your learning journey.But our placement course goes beyond just technical training. We understand that succeeding in today's job market requires more than just technical prowess. That's why our program also includes modules on professional development, interview preparation, resume building, and soft skills enhancement. We'll help you polish your communication skills, hone your problem-solving abilities, and cultivate the confidence needed to ace interviews and thrive in any professional setting.",
        price:37500
    },
    { id:4,
      title:
        "Software Development",
      category: "Development",
      level: "Beginner",
      rating: 4,
      imgSrc:
        "https://t4.ftcdn.net/jpg/04/19/26/97/360_F_419269782_9LsP3TQndMVnZ2j3ZhTPhMjaqQpFAth9.jpg",
        link:'https://www.entrepreneurshipnetwork.net/courses/213699',
        desc:"A software development course serves as a comprehensive guide for individuals interested in mastering the art and science of creating software applications. Whether you're a novice looking to explore coding for the first time or a seasoned professional aiming to sharpen your skills, these courses provide structured learning pathways to accommodate various levels of expertise.Typically, such courses cover a wide array of topics essential for understanding the software development lifecycle. This includes programming languages such as Python, Java, or JavaScript, as well as frameworks and libraries pertinent to web, mobile, or desktop application development. Additionally, students delve into fundamental concepts like data structures, algorithms, database management, version control systems, and software architecture principles.",
        price:5000
    },
    { id:5,
      title: "Angular Development",
      category: "Programming",
      level: "Advanced",
      rating: 5,
      imgSrc:
        "https://media.licdn.com/dms/image/D5612AQF-2JxyWTGN1A/article-cover_image-shrink_720_1280/0/1686818483238?e=2147483647&v=beta&t=wMtLwGbftMZXAZaOKjZAAAn2dr1eGhUcRX_Hg5qxEUc",
        link:'https://www.entrepreneurshipnetwork.net/courses/213610',
        desc:"Angular is a powerful JavaScript framework that is widely used for building dynamic web applications. Developed and maintained by Google, Angular provides developers with a robust set of tools for creating scalable, efficient, and maintainable applications. In this course, we will dive deep into the world of Angular development, starting from the basics and progressing to advanced topics. Whether you're a seasoned developer looking to expand your skillset or a newcomer to web development, this course is designed to provide you with the knowledge and hands-on experience you need to become proficient in Angular.",
        price:5000
    },
    { id:6,
      title:
        "Wix web Developer",
      category: "Web Development",
      level: "Advanced",
      rating: 4,
      imgSrc:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYpsd4lwkgE7a9NPFP7NRqJKl77LhdQ_UJfnXS_deR2h2eheOc3NwpMnb_3_qQLIT1GtA&usqp=CAU",
        link:'https://www.entrepreneurshipnetwork.net/courses/213610',
        desc:"A Wix web development course offers an excellent opportunity for individuals to delve into the world of website creation and design using one of the most popular website builders available today. Wix provides an intuitive platform that allows users to create stunning websites without needing extensive coding knowledge.In an introductory course, participants typically learn the fundamentals of using Wix, including navigating the platform, choosing templates, customizing designs, adding content such as text, images, and videos, and optimizing websites for various devices.",
        price:5000
    },
    
    
  ];


  const defaultCourseCount = 6;
  const coursesToShow = showAll ? courses : courses.slice(0, defaultCourseCount);

  const handleLoadMore = () => {
    setShowAll(true);
  };

  const handleSeeLess = () => {
    setShowAll(false);
  };

  return (
    <div className="Courses-cont">
      <h1 className=" text-2xl md:text-3xl font-bold p-3">Let the journey of self-learning begin</h1>
      <div className="courses-wrapper">
        {coursesToShow.map((course, index) => (
          <div key={index} className="course-card">
            <img
              src={course.imgSrc}
              alt={course.title}
              className="course-img h-48"
            />
            <h3>{course.title}</h3>
            {/* <div className="rating">
              {Array(course.rating)
                .fill()
                .map((_, i) => (
                  <span key={i} className="star">
                    &#9733;
                  </span>
                ))}
            </div> */}
            <div> Price : <span className="text-red-600 font-semibold text-lg"> {course.price} </span> Rs </div>

            {/* <a
              href={course.link}
              target="_blank"
              rel="noopener noreferrer"
            > */}
             <Link to={`/Courses/${course.id}`}> <button className="course-btn">Get this Course</button></Link> 
              
            
          </div>
        ))}
      </div>
        <Link to={'/Courses'}>
          <button className="py-2 px-4 bg-blue-400 text-white"> View More</button>
        </Link>
    </div>
  );
};

export default Courses;

