// import React, { useState, useEffect, useContext } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { mainContext } from "../../Context";
// import "./Navbar.css";
// import { toast } from "react-hot-toast";

// const Nav = () => {
//   const navigate = useNavigate();
//   const context = useContext(mainContext);
//   const [isNavbarActive, setIsNavbarActive] = useState(false);
//   const [userid, setUserid] = useState(context);

//   useEffect(() => {
//     const storedUser = localStorage.getItem('userid');
//     if (storedUser) {
//       setUserid(JSON.parse(storedUser));
//     }
//   }, [context]);

//   const token = localStorage.getItem('token');
//   console.log(token);
//   const toggleNavbar = () => {
//     setIsNavbarActive(!isNavbarActive);
//   };
//   const [isOpen, setIsOpen] = useState(false);
//   const toggleDropdown = () => {
//     setIsOpen(!isOpen);
//   };

//   const handleLogout = () => {
//     localStorage.removeItem('token');
//     localStorage.removeItem('userid');
//     navigate('/');
//     toast.success("Log-out successfully! ")
//   };

//   return (
//     <div className={`App ${isNavbarActive ? "active" : ""}`}>
//       <div className="App">
//         <header
//           className="header flex"
//           style={{
//             boxShadow:
//               "0 2px 4px rgba(0, 0, 0, 0.2), 0 4px 12px rgba(0, 0, 0, 0.2)",
//           }}
//         >
//           <Link to="/">
//             <img
//               src="https://i.ibb.co/6J6F1zY/the-entrepreneurship-network-cover.jpg"
//               alt="ten logo"
//               className="logo"
//             />
//           </Link>

//           <nav className="navbar">
//             <ul className="navbar-list">
//               <Link className="navbar-link" to="/">
//                 Home
//               </Link>
//               <Link className="navbar-link" to="/About-us">
//                 About
//               </Link>
//               <Link className="navbar-link" to="/Courses">
//                 Courses
//               </Link>
//               <Link className="navbar-link" to="/Testimonial">
//                 Testimonial
//               </Link>

//               <div className="dropdown">
//                 <a href="/" className="nav-link-navbar">
//                   Career <i className="fa fa-caret-down"></i>
//                 </a>
//                 <div className="dropdown-content">
//                   <a
//                     href="https://www.expertia.ai/entrepreneurshipnetwork-net?utm_source=corp_site"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                   >
//                     Apply for Internship
//                   </a>
//                   <a
//                     href="https://www.expertia.ai/entrepreneurshipnetwork-net?utm_source=corp_site"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                   >
//                     We're Hiring
//                   </a>
//                   <a
//                     href="https://calendly.com/techten/book-a-demo-session"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                   >
//                     Book a Demo session
//                   </a>
//                 </div>
//               </div>

//               <div className="dropdown">
//                 <a href="/" className="nav-link-navbar">
//                   More <i className="fa fa-caret-down"></i>
//                 </a>
//                 <div className="dropdown-content">
//                   <a
//                     href="https://hrportal.entrepreneurshipnetwork.net"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                   >
//                     HRMS
//                   </a>
//                   <a
//                     href="https://ailabs.entrepreneurshipnetwork.net/"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                   >
//                     TEN AI labs
//                   </a>
//                   <a
//                     href="https://ideaengine.entrepreneurshipnetwork.net"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                   >
//                     TEN Idea Engine
//                   </a>
//                   <Link to={"/Interview_for_course"}>Interview For Course</Link>
//                   <Link to={'https://discord.com/invite/2p8mh8vE'} target="_blank" > Virtual Campus</Link>
//                 </div>
//               </div>

//               <Link className="navbar-link" to="/contact-us">
//                 Contact
//               </Link>

//               { 
//                 !token ? (
//                   <div className="navbar-buttons">
//                     <Link to="/Login">
//                       <button className="login-btn">Log in</button>
//                     </Link>
//                     <Link to="Sign_Up">
//                       <button className="signup-btn">Sign Up</button>
//                     </Link>
//                   </div>
//                 ) : (
//                   <div className="flex gap-4 justify-center items-center">
//                     <Link to={`/profile/${userid.id}`}><p className="text-white text-md"> {userid.name} </p></Link>
//                     <button className="text-md py-1 px-4 bg-gray-500 text-white" onClick={handleLogout}> LogOut </button>
//                   </div>
//                 )
//               }
//             </ul>
//           </nav>

//           <div className="mobile-navbar-btn" onClick={toggleNavbar}>
//             <div className="toggle_btn" onClick={toggleDropdown}></div>
//           </div>
//         </header>
//       </div>
//     </div>
//   );
// };

// export default Nav;

import React, { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { mainContext } from "../../Context";
import "./Navbar.css";
import { toast } from "react-hot-toast";

const Nav = () => {
  const navigate = useNavigate();
  const context = useContext(mainContext);
  const [isNavbarActive, setIsNavbarActive] = useState(false);
  const [user, setUser] = useState(context);

  useEffect(() => {
    const storedUser = localStorage.getItem('userid');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, [context]);

  const token = localStorage.getItem('token');
  const toggleNavbar = () => {
    setIsNavbarActive(!isNavbarActive);
  };

  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('userid');
    navigate('/');
    toast.success("Logged out successfully!");
  };

  return (
    <div className={`App ${isNavbarActive ? "active" : ""}`}>
      <div className="App">
        <header
          className="header flex"
          style={{
            boxShadow:
              "0 2px 4px rgba(0, 0, 0, 0.2), 0 4px 12px rgba(0, 0, 0, 0.2)",
          }}
        >
          <Link to="/">
            <img
              src="https://i.ibb.co/6J6F1zY/the-entrepreneurship-network-cover.jpg"
              alt="ten logo"
              className="logo"
            />
          </Link>

          <nav className="navbar">
            <ul className="navbar-list">
              <Link className="navbar-link" to="/">
                Home
              </Link>
              <Link className="navbar-link" to="/About-us">
                About
              </Link>
              <Link className="navbar-link" to="/Courses">
                Courses
              </Link>
              <Link className="navbar-link" to="/Testimonial">
                Testimonial
              </Link>

              <div className="dropdown">
                <a href="/" className="nav-link-navbar">
                  Career <i className="fa fa-caret-down"></i>
                </a>
                <div className="dropdown-content">
                  <a
                    href="https://www.expertia.ai/entrepreneurshipnetwork-net?utm_source=corp_site"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Apply for Internship
                  </a>
                  <a
                    href="https://www.expertia.ai/entrepreneurshipnetwork-net?utm_source=corp_site"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    We're Hiring
                  </a>
                  <a
                    href="https://calendly.com/techten/book-a-demo-session"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Book a Demo session
                  </a>
                </div>
              </div>

              <div className="dropdown">
                <a href="/" className="nav-link-navbar">
                  More <i className="fa fa-caret-down"></i>
                </a>
                <div className="dropdown-content">
                  <a
                    href="https://hrportal.entrepreneurshipnetwork.net"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    HRMS
                  </a>
                  <a
                    href="https://ailabs.entrepreneurshipnetwork.net/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    TEN AI labs
                  </a>
                  <a
                    href="https://ideaengine.entrepreneurshipnetwork.net"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    TEN Idea Engine
                  </a>
                  <Link to={"/Interview_for_course"}>Interview For Course</Link>
                  <Link to={'https://discord.com/invite/2p8mh8vE'} target="_blank" > Virtual Campus</Link>
                </div>
              </div>

              <Link className="navbar-link" to="/contact-us">
                Contact
              </Link>

              { 
                !token ? (
                  <div className="navbar-buttons">
                    <Link to="/Login">
                      <button className="login-btn">Log in</button>
                    </Link>
                    <Link to="Sign_Up">
                      <button className="signup-btn">Sign Up</button>
                    </Link>
                  </div>
                ) : (
                  <div className="flex gap-4 justify-center items-center">
                    <Link to={`/profile/${user.id}`}><p className="text-white text-md"> {user.name} </p></Link>
                    <button className="text-md py-1 px-4 bg-gray-500 text-white" onClick={handleLogout}> LogOut </button>
                  </div>
                )
              }
            </ul>
          </nav>

          <div className="mobile-navbar-btn" onClick={toggleNavbar}>
            <div className="toggle_btn" onClick={toggleDropdown}></div>
          </div>
        </header>
      </div>
    </div>
  );
};

export default Nav;
