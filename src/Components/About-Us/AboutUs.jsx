import React from "react";
import "./style.css";

const AboutUs = () => {
  return (
    <>
      <div className="content-wrapper">
        <section
          className="region py-5 md:text-3xl bg-gray-200  "
          data-id="43969"
        >
          <div className="section-header flex flex-col justify-center items-center gap-2  ">
            <h1 className="text-xl md:text-2xl">
              The Entrepreneurship Network
            </h1>

            <p className="inflate text-lg text-center md:w-[60%]">
              {" "}
              At Entrepreneurship Network, our mission is to empower learners
              worldwide by providing accessible, engaging, and high-quality
              educational content. We believe that education is the key to
              unlocking human potential and driving positive change in the
              world.
            </p>

            <p className="inflate text-lg text-center md:w-[60%]">
              Quality is at the heart of everything we do. We work with leading
              educators, subject matter experts, and industry professionals to
              develop and curate content that meets the highest standards of
              excellence.{" "}
            </p>

            {/* <p className="inflate"><a href="/">Subscribe to the Entrepreneurship Network's Newsletter</a></p> */}
          </div>
        </section>

        <div className="region two-column primary-grey0 " data-id="50682">
          <div className="column-block-wrapper vertical-flex-center zzz flex justify-between  ">
            <div className="column-block celebrity-v2-wrapper centered-style-wrapper">
              <section className="celebrity-v2 centered-style">
                <div className="image-wrapper vertical-align-middle">
                  <img
                    src="https://assets.techsmith.com/Images/content/ua-tutorials-snagit-2018/About-Us.png"
                    alt="illustration with woman looking around "
                    title=""
                  />
                </div>

                <div className="inner-wrapper ">
                  <div className="link-wrapper"></div>
                </div>
              </section>
            </div>
            <div className="column-block celebrity-v2-wrapper left-style-wrapper flex justify-between">
              <section className="celebrity-v2 left-style">
                <div className="inner-wrapper ">
                  <div className="copy-wrapper">
                    <h2>
                      <strong>Our students-first approach</strong>
                    </h2>

                    <p>&nbsp;</p>

                    <p>
                      Our products are easy to use by people who are not content
                      creation experts. We know creating digital content to
                      teach, train and explain concepts can be time-consuming.
                      And learning new software can be intimidating.
                    </p>

                    <p>
                      That is why we are focused on creating easy-to-use
                      software, along with providing expert training resources
                      and unmatched support to our customers.&nbsp;
                    </p>

                    <p>
                      Our customer-focused approach has made TechSmith the
                      predominant choice for efficient and effective image and
                      video creation in corporate and academic settings,
                      especially for first-time digital content creators.
                    </p>
                  </div>

                  <div className="link-wrapper"></div>
                </div>
              </section>
            </div>
          </div>
        </div>

        <div className="region primary-grey2" data-id="36631">
          <section className="content-container">
            <div className="text-container text-container-center ">
              <h2 className="base1 text-2xl" style={{ "text-align": "center" }}>
                <strong>What Makes TechSmith Different?</strong>
              </h2>

              <p>&nbsp;</p>

              <p className="inflate">
                We understand that every learner is unique, with their own
                goals, preferences, and learning styles. That's why we offer
                personalized learning paths tailored to individual needs.{" "}
              </p>

              <p className="inflate">
                Founded in 2020, we believe in the power of interactive learning
                experiences to engage and inspire learners. Our courses are
                designed to go beyond traditional lectures and textbooks,
                offering hands-on activities, multimedia content, and real-world
                applications that bring concepts to life.
              </p>

              <p className="leadin">&nbsp;</p>

              {/* <p style={{ "text-align": "center" }}><a className="btn btn-big btn-tertiary" href="/">View Leadership Team</a></p> */}
            </div>
          </section>

          <div className="section  section--narrow section-blends section-full">
            <multiple-images-with-text className="multiple-images-with-text">
              {/* <multiple-images-with-text-image-list reversed="" swipeable="false" layout="stacked" className="multiple-images-with-text__image-list">
    <img className="image1" src="https://elmlearning.com/wp-content/uploads/2024/02/1815470_gifs-eLearningforEffectiveCustomerServiceTraining_2_113023.png" alt="" />
    </multiple-images-with-text-image-list> */}

              <div className="multiple-images-with-text__content-with-nav">
                <multiple-images-with-text-content-list
                  swipeable="false"
                  className="multiple-images-with-text__content-list"
                >
                  <div
                    className="prose is-selected"
                    image-id="image-template--15858870911164__8df90b90-e606-4c1c-8f04-decd0a2cff5e-1665675781c6605b4f-0"
                  >
                    <p className="h1">Our Mission</p>
                    <p className=" text-left text-xl ">
                      Join a vibrant community of learners from around the world
                      who share your passion for knowledge and growth. Connect
                      with fellow learners, share insights and experiences, and
                      collaborate on projects to enhance your learning
                      experience. At Entrepreneurship Network, learning doesn't
                      end with the course – it's a lifelong journey of discovery
                      and growth.
                      <br />
                      <p className=" lowercase">
                        OUR VISION IS TO REVOLUTIONIZE EDUCATION THROUGH
                        CUTTING-EDGE TECHNOLOGY, FOSTERING A DYNAMIC AND
                        INCLUSIVE LEARNING ECOSYSTEM. WE ASPIRE TO BE THE
                        PREMIER EDUCATION TECHNOLOGY PLATFORM THAT SEAMLESSLY
                        INTEGRATES INNOVATIVE TOOLS, PERSONALIZED LEARNING
                        EXPERIENCES, AND GLOBAL CONNECTIVITY. BY LEVERAGING THE
                        POWER OF AI, DATA ANALYTICS, AND IMMERSIVE CONTENT, WE
                        AIM TO INSPIRE CURIOSITY, CULTIVATE CRITICAL THINKING,
                        AND UNLOCK THE FULL POTENTIAL OF EVERY LEARNER.
                        <br /> OUR COMMITMENT IS TO BRIDGE EDUCATIONAL GAPS,
                        DEMOCRATIZE ACCESS TO QUALITY EDUCATION, AND PREPARE
                        INDIVIDUALS FOR SUCCESS IN AN EVER-EVOLVING WORLD.
                        TOGETHER, WE ENVISION A FUTURE WHERE EDUCATION
                        TRANSCENDS BOUNDARIES, CREATING A TRANSFORMATIVE IMPACT
                        ON INDIVIDUALS, COMMUNITIES, AND THE WORLD AT LARGE.
                      </p>
                    </p>
                  </div>
                </multiple-images-with-text-content-list>
              </div>
            </multiple-images-with-text>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
