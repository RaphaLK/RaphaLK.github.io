import React from "react";
import "../styles/AboutMe.css";
import SocialMediaButtons from "react-social-media-buttons";
import myPhoto from "../assets/MyPhoto.jpg";

const AboutMe = () => {
  return (
    <div className="aboutMeContainer">
      <h1 className="text-4xl font-semibold mb-4 text-offWhite z-10">
        Raphael Kusuma
      </h1>

      <p className="text-lg text-offWhite max-w-[80%] leading-relaxed z-10">
        Hello! I'm Raph, I'm a Junior{" "}
        <span className="font-semibold">
          Computer Science and Engineering Major with a Minor in Mathematics{" "}
        </span>
        at Santa Clara University. I've worked with Professors at SCU for
        projects, and I currently work at the University's Library and SCU's own
        Residence Life Department as an RA.
      </p>

      <div className="imageContainer">
        <img className="decorativePic1" src={myPhoto} alt="" />
        <ul className="ButtonsList">
          <li className="hover:bg-Gray active:bg-lighterGray">
            <SocialMediaButtons
              links={["https://github.com/RaphaLK"]}
              buttonStyle={{
                width: "80px",
                height: "80px",
                margin: "0px 0px",
                backgroundColor: "transparent",
              }}
              iconStyle={{ color: "Gray" }}
              openNewTab={true}
            />
          </li>
          <li className="hover:bg-Gray active:bg-lighterGray">
            <SocialMediaButtons
              links={["https://www.linkedin.com/in/raphaelkusuma/"]}
              buttonStyle={{
                width: "80px",
                height: "80px",
                margin: "0px 0px",
                backgroundColor: "transparent",
              }}
              iconStyle={{ color: "Gray" }}
              openNewTab={true}
            />
          </li>
        </ul>
      </div>
      <p className="text-lg text-offWhite max-w-[80%] leading-relaxed z-10">
        My current interests are in Full-Stack and Mobile App Development, I
        typically use React/React Native for Web and Mobile applications :). I'm currently an incoming
        <span> </span>
        <span className="font-semibold">
          Summer Intern for Anritsu
        </span>
        . I enjoy Coffee, Boxing, Lifting, Photography, and Video Games. I'm also learning Tennis!
      </p>
    </div>
  );
};

/*
        <p className="font-sans text-2xl text-SoftWhite">
          My name is Raphael, I'm a Junior{" "}
          <span class="font-bold">
            Computer Science and Engineering Major with a Minor in Mathematics
          </span>{" "}
          at <span class="font-bold"> Santa Clara University</span>. My current
          interests are in Full-Stack Development and Mobile App Development.
          I've worked with Professors at Santa Clara University for projects,
          and I currently work in SCU's very own Residence Life Department as an
          RA. I'll expand more on my skills in the{" "}
          <span class="font-bold">Resume</span> section. I'm currently looking
          for a{" "}
          <span class="font-bold">
            Software Engineering Internship for Summer 2024
          </span>
          . I love learning new things, I love{" "}
          <span class="font-bold font italic">
            <span class="font-serif">
              Coffee, Boxing, Exercise, Photography, and Video Games
            </span>
          </span>
          .
        </p>  
*/
export default AboutMe;
